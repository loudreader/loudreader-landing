// Extracts an opening passage for every tier-1 catalog book from its Project
// Gutenberg plain text, for the marketing audio samples (James's voice).
//
// Usage:
//   node scripts/extract-sample-passages.mjs            # fetch + extract, writes data/sample-passages.json
//
// Policy (docs/audio-samples.md): the FIRST REAL PROSE — skip the Gutenberg
// header, title page, dedication, preface/introduction, table of contents and
// chapter heading; target ~60-95 words, always ending on a clean sentence
// boundary. Verse front matter is skipped in favour of the prose that follows.
//
// Hand-curation lives in OVERRIDES below: when the heuristic picks wrong front
// matter (prefaces, translator's notes, ToC), pin the right passage there.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const CACHE = join(REPO, ".passage-cache");
const OUT = join(REPO, "data", "sample-passages.json");
const TARGET_WORDS = 75;
const MIN_WORDS = 45;
const MAX_WORDS = 100;

const slugs = JSON.parse(readFileSync(join(REPO, "data", "catalog-slugs.json"), "utf8"));

const START_RE = /\*{3}\s*START OF (THE|THIS) PROJECT GUTENBERG EBOOK[^*]*\*{3}/i;
const END_RE = /\*{3}\s*END OF (THE|THIS) PROJECT GUTENBERG EBOOK[^*]*\*{3}/i;

const ABBREV = new Set([
  "mr", "mrs", "ms", "dr", "st", "prof", "rev", "hon", "capt", "col", "gen",
  "lt", "sgt", "sr", "jr", "esq", "no", "vol", "fig", "etc", "viz", "i.e",
  "e.g", "vs", "messrs", "madam", "m", "mm", "p.m", "a.m", "b.c", "a.d", "ph.d",
]);

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function splitSentences(text) {
  const sentences = [];
  let cur = "";
  for (const w of text.split(/\s+/).filter(Boolean)) {
    cur += (cur ? " " : "") + w;
    const last = w.replace(/["')\]]*$/g, "");
    if (/[.!?]+$/.test(last)) {
      const core = last.replace(/[.!?]+$/, "");
      const isAbbrev = ABBREV.has(core.toLowerCase().replace(/\.$/, "")) || /^[A-Z]\.?$/.test(core) || /\d$/.test(core);
      if (!isAbbrev) {
        sentences.push(cur);
        cur = "";
      }
    }
  }
  if (cur.trim()) sentences.push(cur);
  return sentences;
}

function cleanLine(t) {
  return t.replace(/\[(Illustration|Transcriber|Decoration|Footnote)[^\]]*\]/gi, " ").trim();
}

const CHAPTER_MARKER_RE =
  /^\s*(chapter|book|part|act|scene|letter|section|stave|canto|volume)[\s._:]+[ivxlcdm\d]+\.?\s*$/i;

function looksLikeTocLine(t) {
  return /^(chapter|book|part|act|section|stave)\b/i.test(t) ||
    /\.{3,}\s*\d+$/.test(t) ||
    /^\s*\d+\s*$/.test(t) ||
    /^\s*contents\s*$/i.test(t);
}

function isNoise(t, inToc) {
  if (!t) return true;
  if (/^(chapter|book|part|act|scene|letter|stave|canto|volume)\b/i.test(t) && t.length < 60 && !/[.!?]["”]?$/.test(t) && !/[a-z]/.test(t.slice(0, 12))) return true;
  if (inToc) return true;
  if (/^[^a-z]*[A-Z][^a-z]*$/.test(t) && t.split(/\s+/).length <= 8) return true;
  if (/^(by|of|the|a|an|to|from)\s+[A-Z]/.test(t) && t.length < 40) return true;
  if (/^(produced|transcribed|note|redactor|editor|transcriber)/i.test(t)) return true;
  if (/^\d{1,2}\s+(january|february|march|april|may|june|july|august|september|october|november|december)/i.test(t) && t.length < 50) return false; // journal dates are prose anchors
  return false;
}

function extractPassage(bookText) {
  const start = bookText.match(START_RE);
  if (!start) return null;
  let body = bookText.slice(start.index + start[0].length);
  const end = body.match(END_RE);
  if (end) body = body.slice(0, end.index);

  const lines = body.split(/\r?\n/);
  const tocFlags = lines.map((l) => looksLikeTocLine(cleanLine(l)));
  const inToc = new Array(lines.length).fill(false);
  for (let i = 0; i < lines.length; i++) {
    let run = 0;
    for (let j = i; j < Math.min(lines.length, i + 60); j++) {
      if (tocFlags[j]) run++;
      else break;
    }
    if (run >= 3) for (let j = i; j < i + run; j++) inToc[j] = true;
  }

  // Locate the first chapter marker; prose starts on the first non-noise
  // line after it (prefaces live before markers).
  let proseStart = 0;
  for (let i = 0; i < lines.length; i++) {
    const t = cleanLine(lines[i]);
    if (CHAPTER_MARKER_RE.test(t) && !inToc[i]) {
      proseStart = i + 1;
      break;
    }
  }

  // Accumulate paragraphs from proseStart onward.
  const paragraphs = [];
  let buf = [];
  const flush = () => {
    if (buf.length) {
      paragraphs.push(buf.map(cleanLine).filter(Boolean).join(" "));
      buf = [];
    }
  };
  for (let i = proseStart; i < lines.length; i++) {
    const t = cleanLine(lines[i]);
    if (isNoise(t, inToc[i])) flush();
    else buf.push(t);
  }
  flush();

  for (const para of paragraphs) {
    const words = countWords(para);
    if (words < 12) continue;
    if (!/[.!?]/.test(para)) continue;
    if (!/[a-z]/.test(para)) continue;
    const sentences = splitSentences(para);
    if (sentences.length >= 4 && words / sentences.length < 9) continue; // verse
    let out = "";
    let used = 0;
    for (const s of sentences) {
      if (used === 0) {
        out = s;
        used = 1;
        continue;
      }
      if (countWords(out) >= TARGET_WORDS) break;
      if (countWords(out + " " + s) > MAX_WORDS) break;
      out += " " + s;
    }
    const wc = countWords(out);
    if (wc >= MIN_WORDS) return { text: out, words: wc };
    if (wc >= 20) return { text: out, words: wc }; // accept short but real prose; curation pass decides
  }
  return null;
}

// ---- hand-curation: slug -> exact passage (checked against the Gutenberg text) ----
// Front matter the heuristic cannot tell from prose: prefaces, introductions,
// epigraphs, cast lists, tables of contents. Verse is collapsed to prose.
const OVERRIDES = {
  "moby-dick":
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.",
  "pride-and-prejudice":
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",
  "frankenstein":
    "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking. I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight.",
  "romeo-and-juliet":
    "Two households, both alike in dignity, in fair Verona, where we lay our scene, from ancient grudge break to new mutiny, where civil blood makes civil hands unclean. From forth the fatal loins of these two foes a pair of star-crossed lovers take their life; whose misadventured piteous overthrows doth with their death bury their parents' strife. The fearful passage of their death-marked love, and the continuance of their parents' rage, which, but their children's end, nought could remove, is now the two hours' traffic of our stage.",
  "middlemarch":
    "Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress. Her hand and wrist were so finely formed that she could wear sleeves not less bare of style than those in which the Blessed Virgin appeared to Italian painters; and her profile as well as her stature and bearing seemed to gain the more dignity from her plain garments, which by the side of provincial fashion gave her the impressiveness of a fine quotation from the Bible,—or from one of our elder poets,—in a paragraph of to-day's newspaper.",
  "crime-and-punishment":
    "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge. He had successfully avoided meeting his landlady on the staircase. His garret was under the roof of a high, five-storied house and was more like a cupboard than a room. The landlady who provided him with garret, dinners, and attendance, lived on the floor below, and every time he went out he was obliged to pass her kitchen, the door of which invariably stood open.",
  "the-count-of-monte-cristo":
    "On the 24th of February, 1815, the look-out at Notre-Dame de la Garde signalled the three-master, the Pharaon, from Smyrna, Trieste, and Naples. As usual, a pilot put off immediately, and rounding the Château d'If, got on board the vessel between Cape Morgiou and Rion island. Immediately, and according to custom, the ramparts of Fort Saint-Jean were covered with spectators; it is always an event at Marseilles for a ship to come into port.",
  "the-mysteries-of-udolpho":
    "On the pleasant banks of the Garonne, in the province of Gascony, stood, in the year 1584, the château of Monsieur St. Aubert. From its windows were seen the pastoral landscapes of Guienne and Gascony stretching along the river, gay with luxuriant woods and vine, and plantations of olives. To the south, the view was bounded by the majestic Pyrenees, whose summits, veiled in clouds, or exhibiting awful forms, seen, and lost again, as the partial vapours rolled along, were sometimes barren, and gleamed through the blue tinge of air, and sometimes frowned with forests of gloomy pine, that swept downward to their base.",
  "little-women":
    "\u201cChristmas won't be Christmas without any presents,\u201d grumbled Jo, lying on the rug. \u201cIt's so dreadful to be poor!\u201d sighed Meg, looking down at her old dress. \u201cI don't think it's fair for some girls to have plenty of pretty things, and other girls nothing at all,\u201d added little Amy, with an injured sniff. \u201cWe've got father and mother and each other,\u201d said Beth contentedly, from her corner.",
  "the-king-in-yellow":
    "Towards the end of the year 1920 the Government of the United States had practically completed the programme, adopted during the last months of President Winthrop's administration. The country was apparently tranquil. Everybody knows how the Tariff and Labour questions were settled. The war with Germany, incident on that country's seizure of the Samoan Islands, had left no visible scars upon the republic, and the temporary occupation of Norfolk by the invading army had been forgotten in the joy over repeated naval victories.",
  "meditations":
    "Of my grandfather Verus I have learned to be gentle and meek, and to refrain from all anger and passion. From the fame and memory of him that begot me I have learned both shamefastness and manlike behaviour. Of my mother I have learned to be religious, and bountiful; and to forbear, not only to do, but to intend any evil; to content myself with a spare diet, and to fly all such excess as is incidental to great wealth.",
  "the-lady-of-the-lake":
    "The stag at eve had drunk his fill, where danced the moon on Monan's rill, and deep his midnight lair had made in lone Glenartney's hazel shade; but when the sun his beacon red had kindled on Benvoirlich's head, the deep-mouthed bloodhound's heavy bay resounded up the rocky way, and faint, from farther distance borne, were heard the clanging hoof and horn.",
  "four-arthurian-romances":
    "The rustic's proverb says that many a thing is despised that is worth much more than is supposed. Therefore he does well who makes the most of whatever intelligence he may possess. For he who neglects this concern may likely omit to say something which would subsequently give great pleasure. So Chrétien de Troyes maintains that one ought always to study and strive to speak well and teach the right; and he derives from a story of adventure a pleasing argument whereby it may be proved and known that he is not wise who does not make liberal use of his knowledge so long as God may give him grace.",
  "the-monk":
    "Scarcely had the Abbey Bell tolled for five minutes, and already was the Church of the Capuchins thronged with Auditors. Do not encourage the idea that the Crowd was assembled either from motives of piety or thirst of information. But very few were influenced by those reasons; and in a city where superstition reigns with such despotic sway as in Madrid, to seek for true devotion would be a fruitless attempt.",
  "the-great-gatsby":
    "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. \u201cWhenever you feel like criticizing anyone,\u201d he told me, \u201cjust remember that all the people in this world haven't had the advantages that you've had.\u201d He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that.",
  "the-expedition-of-humphry-clinker":
    "The pills are good for nothing—I might as well swallow snowballs to cool my reins—I have told you over and over how hard I am to move; and at this time of day, I ought to know something of my own constitution. Why will you be so positive? Prithee send me another prescription—I am as lame and as much tortured in all my limbs as if I was broke upon the wheel: indeed, I am equally distressed in mind and body.",
  "history-of-tom-jones-a-foundling":
    "An author ought to consider himself, not as a gentleman who gives a private or eleemosynary treat, but rather as one who keeps a public ordinary, at which all persons are welcome for their money. In the former case, it is well known that the entertainer provides what fare he pleases; and though this should be very indifferent, and utterly disagreeable to the taste of his company, they must not find any fault; nay, on the contrary, good breeding forces them outwardly to approve and to commend whatever is set before them.",
  "the-memoirs-of-sherlock-holmes":
    "\u201cI am afraid, Watson, that I shall have to go,\u201d said Holmes, as we sat down together to our breakfast one morning. \u201cGo! Where to?\u201d \u201cTo Dartmoor; to King's Pyland.\u201d I was not surprised. Indeed, my only wonder was that he had not already been mixed up in this extraordinary case, which was the one topic of conversation through the length and breadth of England.",
  "the-return-of-sherlock-holmes":
    "It was in the spring of the year 1894 that all London was interested, and the fashionable world dismayed, by the murder of the Honourable Ronald Adair under most unusual and inexplicable circumstances. The public has already learned those particulars of the crime which came out in the police investigation, but a good deal was suppressed upon that occasion, since the case for the prosecution was so overwhelmingly strong that it was not necessary to bring forward all the facts.",
  "a-tale-of-two-cities":
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way.",
  "love-and-freindship":
    "How often, in answer to my repeated intreaties that you would give my Daughter a regular detail of the Misfortunes and Adventures of your Life, have you said \u201cNo, my freind never will I comply with your request till I may be no longer in Danger of again experiencing such dreadful ones.\u201d Surely that time is now at hand. You are this day 55. If a woman may ever be said to be in safety from the determined Perseverance of disagreeable Lovers and the cruel Persecutions of obstinate Fathers, surely it must be at such a time of Life.",
  "as-you-like-it":
    "As I remember, Adam, it was upon this fashion bequeathed me by will but poor a thousand crowns, and, as thou sayst, charged my brother, on his blessing, to breed me well; and there begins my sadness. My brother Jaques he keeps at school, and report speaks goldenly of his profit. For my part, he keeps me rustically at home, or, to speak more properly, stays me here at home unkept; for call you that keeping, for a gentleman of my birth, that differs not from the stalling of an ox?",
  "the-countess-of-pembrokes-arcadia":
    "It was in the time that the earth begins to put on her new apparel against the approach of her lover, and that the sun, running a most even course, becomes an indifferent arbiter between the night and the day, when the hopeless shepherd Strephon was come to the sands, which lie against the island of Cithera; where viewing the place with a heavy kind of delight, and sometimes casting his eyes to the isleward, he called his friendly rival the pastor Claius unto him.",
  "sonnets-from-the-portuguese":
    "I thought once how Theocritus had sung of the sweet years, the dear and wished for years, who each one in a gracious hand appears to bear a gift for mortals, old or young: and, as I mused it in his antique tongue, I saw, in gradual vision through my tears, the sweet, sad years, the melancholy years, those of my own life, who by turns had flung a shadow across me.",
  "treasure-island":
    "Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace, and go back to the time when my father kept the Admiral Benbow inn and the brown old seaman with the sabre cut first took up his lodging under our roof.",
  "adventures-of-huckleberry-finn":
    "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary.",
  "de-profundis":
    "Suffering is one very long moment. We cannot divide it by seasons. We can only record its moods, and chronicle their return. With us time itself does not progress. It revolves. It seems to circle round one centre of pain. The paralysing immobility of a life every circumstance of which is regulated after an unchangeable pattern, so that we eat and drink and lie down and pray, or kneel at least for prayer, according to the inflexible laws of an iron formula.",
  "the-diary-of-samuel-pepys":
    "Blessed be God, at the end of the last year I was in very good health, without any sense of my old pain, but upon taking of cold. I lived in Axe Yard, having my wife, and servant Jane, and no more in family than us three. My wife gave me hopes of her being with child, but on the last day of the year.",
  "incidents-in-the-life-of-a-slave-girl":
    "I was born a slave; but I never knew it till six years of happy childhood had passed away. My father was a carpenter, and considered so intelligent and skilful in his trade, that, when buildings out of the common line were to be erected, he was sent for from long distances, to be head workman. On condition of paying his mistress two hundred dollars a year, and supporting himself, he was allowed to work at his trade, and manage his own affairs.",
  "the-germany-and-the-agricola-of-tacitus":
    "Germany is separated from Gaul, Rhaetia, and Pannonia, by the rivers Rhine and Danube; from Sarmatia and Dacia, by mountains and mutual dread. The rest is surrounded by an ocean, embracing broad promontories and vast insular tracts, in which our military expeditions have lately discovered various nations and kingdoms. The Rhine, issuing from the inaccessible and precipitous summit of the Rhaetic Alps, bends gently to the west, and falls into the Northern Ocean.",
  "the-lives-of-the-twelve-caesars":
    "Julius Caesar, the Divine, lost his father when he was in the sixteenth year of his age; and the year following, being nominated to the office of high-priest of Jupiter, he repudiated Cossutia, who was very wealthy, although her family belonged only to the equestrian order, and to whom he had been contracted when he was a mere boy. He then married Cornelia, the daughter of Cinna, who was four times consul; and had by her, shortly afterwards, a daughter named Julia.",
  "the-romance-of-tristan-and-iseult":
    "My lords, if you would hear a high tale of love and of death, here is that of Tristan and Queen Iseult; how to their full joy, but to their sorrow also, they loved each other, and how at last they died of that love together upon one day; she by him and he by her.",
  "biographia-literaria":
    "It has been my lot to have had my name introduced both in conversation, and in print, more frequently than I find it easy to explain, whether I consider the fewness, unimportance, and limited circulation of my writings, or the retirement and distance, in which I have lived, both from the literary and political world. Most often it has been connected with some charge which I could not acknowledge, or some principle which I had never entertained.",
  "gullivers-travels":
    "My father had a small estate in Nottinghamshire; I was the third of five sons. He sent me to Emmanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great for a narrow fortune, I was bound apprentice to Mr. James Bates, an eminent surgeon in London, with whom I continued four years.",
  "the-interesting-narrative-of-the-life-of-olaudah-equiano":
    "I believe it is difficult for those who publish their own memoirs to escape the imputation of vanity; nor is this the only disadvantage under which they labour: it is also their misfortune, that what is uncommon is rarely, if ever, believed, and what is obvious we are apt to turn from with disgust, and to charge the writer with impertinence. People generally think those memoirs only worthy to be read or remembered which abound in great or striking events.",
  "the-valley-of-fear":
    "\u201cI am inclined to think—\u201d said I. \u201cI should do so,\u201d Sherlock Holmes remarked impatiently. I believe that I am one of the most long-suffering of mortals; but I'll admit that I was annoyed at the sardonic interruption. \u201cReally, Holmes,\u201d said I severely, \u201cyou are a little trying at times.\u201d He was too much absorbed with his own thoughts to give any immediate answer to my remonstrance. He leaned upon his hand, with his untasted breakfast before him, and he stared at the slip of paper which he had just drawn from its envelope.",
  "the-moonstone":
    "I address these lines—written in India—to my relatives in England. My object is to explain the motive which has induced me to refuse the right hand of friendship to my cousin, John Herncastle. The reserve which I have hitherto maintained in this matter has been misinterpreted by members of my family whose good opinion I cannot consent to forfeit. I request them to suspend their decision until they have read my narrative. And I declare, on my word of honour, that what I am now about to write is, strictly and literally, the truth.",
  "the-house-on-the-borderland":
    "Right away in the west of Ireland lies a tiny hamlet called Kraighten. It is situated, alone, at the base of a low hill. Far around there spreads a waste of bleak and totally inhospitable country; where, here and there at great intervals, one may come upon the ruins of some long desolate cottage—unthatched and stark. The whole land is bare and unpeopled, the very earth scarcely covering the rock that lies beneath it.",
  "paul-clifford":
    "It was a dark and stormy night; the rain fell in torrents, except at occasional intervals, when it was checked by a violent gust of wind which swept up the streets (for it is in London that our scene lies), rattling along the house-tops, and fiercely agitating the scanty flame of the lamps that struggled against the darkness.",
  "the-woman-in-white":
    "This is the story of what a Woman's patience can endure, and what a Man's resolution can achieve. If the machinery of the Law could be depended on to fathom every case of suspicion, and to conduct every process of inquiry, with moderate assistance only from the lubricating influences of oil of gold, the events which fill these pages might have claimed their share of the public attention in a Court of Justice.",
  "the-merry-adventures-of-robin-hood":
    "In merry England in the time of old, when good King Henry the Second ruled the land, there lived within the green glades of Sherwood Forest, near Nottingham Town, a famous outlaw whose name was Robin Hood. No archer ever lived that could speed a gray goose shaft with such skill and cunning as his, nor were there ever such yeomen as the sevenscore merry men that roamed with him through the greenwood shades.",
  "anarchism-and-other-essays":
    "The history of human growth and development is at the same time the history of the terrible struggle of every new idea heralding the approach of a brighter dawn. In its tenacious hold on tradition, the Old has never hesitated to make use of the foulest and cruelest means to stay the advent of the New, in whatever form or period the latter may have asserted itself. Nor need we retrace our steps into the distant past to realize the enormity of opposition, difficulties, and hardships placed in the path of every progressive idea.",
  "the-complete-works-of-william-shakespeare":
    "From fairest creatures we desire increase, that thereby beauty's rose might never die, but as the riper should by time decease, his tender heir might bear his memory: but thou contracted to thine own bright eyes, feed'st thy light's flame with self-substantial fuel, making a famine where abundance lies, thyself thy foe, to thy sweet self too cruel. Thou that art now the world's fresh ornament, and only herald to the gaudy spring, within thine own bud buriest thy content, and, tender churl, mak'st waste in niggarding.",
  "the-picture-of-dorian-gray":
    "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn. From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs.",
  "a-pair-of-blue-eyes":
    "Elfride Swancourt was a girl whose emotions lay very near the surface. Their nature more precisely, and as modified by the creeping hours of time, was known only to those who watched the circumstances of her history. Personally, she was the combination of very interesting particulars, whose rarity, however, lay in the combination itself rather than in the individual elements combined.",
  "the-blue-lagoon":
    "Mr Button was seated on a sea-chest with a fiddle under his left ear. He was playing the \u201cShan van vaught,\u201d and accompanying the tune, punctuating it, with blows of his left heel on the fo'c'sle deck. He was dressed in dungaree trousers, a striped shirt, and a jacket baize—green in parts from the influence of sun and salt. A typical old shell-back, round-shouldered, hooked of finger; a figure with strong hints of a crab about it.",
  "autobiography-of-benjamin-franklin":
    "I have ever had pleasure in obtaining any little anecdotes of my ancestors. You may remember the inquiries I made among the remains of my relations when you were with me in England, and the journey I undertook for that purpose. Imagining it may be equally agreeable to you to know the circumstances of my life, many of which you are yet unacquainted with, and expecting the enjoyment of a week's uninterrupted leisure in my present country retirement, I sit down to write them for you.",
  "a-journey-to-the-centre-of-the-earth":
    "Looking back to all that has occurred to me since that eventful day, I am scarcely able to believe in the reality of my adventures. They were truly so wonderful that even now I am bewildered when I think of them. My uncle was a German, having married my mother's sister, an Englishwoman. Being very much attached to his fatherless nephew, he invited me to study under him in his home in the fatherland. This home was in a large town, and my uncle a professor of philosophy, chemistry, geology, mineralogy, and many other ologies.",
  "four-arthurian-romances":
    "The rustic's proverb says that many a thing is despised that is worth much more than is supposed. Therefore he does well who makes the most of whatever intelligence he may possess. So Chrétien de Troyes maintains that one ought always to study and strive to speak well and teach the right; and he derives from a story of adventure a pleasing argument whereby it may be proved and known that he is not wise who does not make liberal use of his knowledge so long as God may give him grace.",
  "the-mysteries-of-udolpho":
    "On the pleasant banks of the Garonne, in the province of Gascony, stood, in the year 1584, the château of Monsieur St. Aubert. From its windows were seen the pastoral landscapes of Guienne and Gascony stretching along the river, gay with luxuriant woods and vine, and plantations of olives. To the south, the view was bounded by the majestic Pyrenees, whose summits, veiled in clouds, or exhibiting awful forms, seen, and lost again, as the partial vapours rolled along, were sometimes barren, and gleamed through the blue tinge of air.",
};

async function fetchText(gutenbergId) {
  const cachePath = join(CACHE, `${gutenbergId}.txt`);
  if (existsSync(cachePath)) return readFileSync(cachePath, "utf8");
  const res = await fetch(
    `https://www.gutenberg.org/cache/epub/${gutenbergId}/pg${gutenbergId}.txt`,
    { headers: { "User-Agent": "loudreader-sample-passages/1.0" } }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status} for gutenberg ${gutenbergId}`);
  const text = await res.text();
  writeFileSync(cachePath, text);
  return text;
}

const results = [];
let fetched = 0, failed = 0;
for (const book of slugs) {
  const { slug, gutenberg_id: id, title } = book;
  try {
    let p;
    if (OVERRIDES[slug]) {
      p = { text: OVERRIDES[slug], words: countWords(OVERRIDES[slug]) };
    } else {
      const raw = await fetchText(id);
      p = extractPassage(raw);
      if (!p) throw new Error("no prose passage found");
    }
    results.push({ slug, gutenberg_id: id, title, author: book.author, text: p.text, words: p.words });
    console.log(`OK   ${slug} (${p.words}w)`);
    fetched++;
  } catch (e) {
    failed++;
    console.error(`FAIL ${slug}: ${e.message}`);
    results.push({ slug, gutenberg_id: id, title, author: book.author, text: null, error: e.message });
  }
  await new Promise((r) => setTimeout(r, 200));
}

writeFileSync(OUT, JSON.stringify(results, null, 2) + "\n");
console.log(`\n${fetched} ok, ${failed} failed -> ${OUT}`);
