"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

import NarratorPlayer from "@/components/listen/NarratorPlayer";

/* ─── Touch detection ─── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  return isMobile;
}

/* ─── Scroll reveal ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const appStoreUrl = "https://apps.apple.com/app/loudreader/id6758149478";

/* ─── App Store Button ───
   `source` feeds the store_click event's source dimension via the site-wide
   delegated listener (components/analytics/Analytics.tsx). Keep the values
   stable, they are a reporting contract (docs/analytics-events.md). */
function AppStoreButton({ dark = false, source }: { dark?: boolean; source: string }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-store-source={source}
      className={`inline-flex items-center gap-3 px-7 py-3.5 rounded-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
        dark
          ? "bg-white text-black shadow-lg shadow-white/10"
          : "bg-black text-white shadow-lg shadow-black/20"
      }`}
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="flex flex-col items-start -space-y-0.5">
        <span className="text-[10px] font-normal leading-tight opacity-80">Download on the</span>
        <span className="text-lg font-semibold leading-tight tracking-tight">App Store</span>
      </div>
    </a>
  );
}

/* ─── Blur placeholders (10px base64) ─── */
const blurMap: Record<string, string> = {
  "/screen-reader-light.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVR4nD2S624TMRCE/eZAn6ZSQYjLOwBJSiVQm+xuLrvx+r7eW5ICvz5kp/BjdI7mjM+MZYvTPHCaevbbko8f3nPz5jU3b17x+dMHqnLD0AeCN4jz3HE59VjdsFp84d3dLW/vbrlffsWomtPUMfYO0UdHjB6lFUVZsFguMlKvdUuaD9EiYmfxwaGtQxmLVAapDa2xaGtxThNci+j7gA+BWioe1wWL+4eMn08b9o3EWINzCvF8GTmfZ5wPlGXJcrVisVyy2SRrQ4wB7zXiz6+J388zsfNsqw33qwWr5TfKYo1zhmmMOae4zJ7z5Ok7jVEHmkNJvS/Q7SFn6ztD5xVi6I5EV+P0DtNWaFlm2LbCtFucOeBMg/B6i5EFbfOEata0CfU69zLVY4XVB4TTW9Rxgzw85qGWBUaWmLbM1ao93jaIYHbYtkQ1m7w5OSTuin2ONXTyKszW9TpXp6osSge82RHdgbE7IqLb56E+bjKSODkk61TToaFrEJ3dZ/LfBVKEfKn6iiROW7PwmnH9f2NC6hNn1YswZGGFOhaoY4k+pr58QYFNme0eMcSWGFo637KTioed5vtOsWtV5vqgGKNCTIMnfbUhBrYysNxGFlWklOlZr7N5DIjLeWSeRy6nE1KP/KiGjFoNnOeZaRq4nKdkbYnB0geHVxrTqAyrkrWlC4ZpcIgYJDEkUhOMxMsDvq1zn7g0G6LiL7wUIsbD9sqkAAAAAElFTkSuQmCC",
  "/screen-reader-dark-hero.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAClUlEQVR4nD2SS0scQRSF6+ck8TH9rO6ufr9nph3tnoyOjBMfSYxBx+DCjTthXDgBSTa6FESIAXUhuFH8Cf6jxDqhKyGLj1P31OVCnVuEMcY9z+Ou68I0TaiqKqCUgrk2WOBwM2AvxLIYZ8zmlsWgaRSqqkPT/qIbBnSTcs3UOXEcF57nw3E86LoBWVYEkiSjIUmYbUhoyBJInjfR6cyj01lAluUIgghBEML3A7iuD8ZsmCYD2dvbw+HhIcbjI+zv72Nrawubm5sYjUbY3d3F2to6ms02yOnpKW5ubvD4+Ijr62tcXFzg/PwcVz+v8OPqCpPJV6yuroNcXl7i6ekJz8/Povnu7g63t7d4eHjA/f09vn37jsFgCHJwcIDJZIKzszOcnJzg+PgYR0dHwhuPx9jZGaEoOiBVVWF5eRnD4RD9fh+9Xg/dbldoWVbigZZlgziOgzps3/eE1rVt27BtBsuyQKkhMiV1FHEcI80ypGmKNK01E3UUxbBtVyyBNLMEnaKJ7kLxn+qflp0W8iSCZzOQ5W6BjUGF7Y1FfF7r4dNq9z/vByWWFnK0Eg9kpVdgc1jhy4dFjDZ62FnvCrbXKnxcmUe/zFFkPshiVeBdv8THd2/F5I1B+U8rrCzOo5zLkSUBSJYmaLdydObamGs3/1K0BO1WE0kSw/N9kDAMEYYRwihGUGucIIxTUcdxgiiKUPeQ+mfUUGrCjnIEC31Bfa69+s4wLBBZ1qEoFI1ZGYabwm0vCQw3Q2NWgaoaXJY1TqamJExPy3jzagY69eHHJfykAjVDvHk9i5kZhU9PS5yoKuWKSrksqaCyAUdlAlM1uSJrXFXpi6Jov4lpWi+6bvB6TbpCwXQTlm6CasLjuk5/U2r8+gNDsqevBfbM/AAAAABJRU5ErkJggg==",
  "/screen-library-light.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPklEQVR4nG3Sa28TORTGcX906PehILYSQjTdZkGl6aQgKrRNSptLO5lL5uLxfYY2+a9mlq72BS9+smSfYx3rsTBa0lvc3fDH2zccHLzk4OULjo7ecvtjhqwLim2KcFbRy9KYy+kFrw9fcXj4ii+XEcnmAdVUVGWOMM7SWEdeKe7uN3y/nnM9m5EkMY2ssUahlURY52ispzIBaTuM7whtR9e2tG0gBIf3FlEpS954UukpdEBZj3WeEDxt2w4NXRsQ0dryaemI7t1Q7KzFWotzFu8dbeibHOLi3vJx4egbkspgtUKpBq0VxmicNThnEOOrBe+/Ljm9WrJKCqqqpCwL6qpCNg3Gmn9njM7HXJx/5DI6J88z6rqikRKt1DCCH2YNiMnZn0w+j5lGZ2TbjFrWNEpiTH/T84MCYnw24uRsxOnklGW+JpEZuSlJXcHKblibmNRmiHF0wvHkmA/RiL+TObflimXzwEwtuKivmFZXzOQt4q/pKSfRiNHlCdfpDXfVitWvwuj/hT+WM+bLa27Wc7ImozQFpS3J7ZZYbwZbkyO803j/O4bW2/+I4A299lno9Ydm2H8mWq9/Fdjf6CN0dH2Es+8R98s52zxBNZKmqYdvJWVFnqfkWUpeZIjPn517z7euE+GGN1ppGKbQxSSlJkg1xHJOlKeL4/RHfvk6J4wekthSNpdKeUiqSJCHebMiyDHG3WJDn+ZBr+7jDdnvczz2heySEMMTYr+Lp6Yln3eMO/3M/6J727Ha7wX6/5x/7yDFGYezHFAAAAABJRU5ErkJggg==",
  "/screen-reader-huckfinn.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvklEQVR4nGWSW2sUQRCF+ycLgij+Ex8kgUgU3/MWJJBNlIgJ2Z1Lz6Vv0z333Sj+gCNVvZNN4sOhp6lvTp+qbhFsBluv8ePqHCfHH/D2zSu8f/caXz8f4/72Cq3L4U0KMYQKbSORJze4+HaG008f8eX0CN9X53AqwW60mHsNMQ8WU6fgbY4yv8XdrxXu765h1Qbb0eDvQ4s/uxZiNzlsR4vtoLEbDR5mFzVZdqP679lDEDC2FXpfoG8kOlbB+64puEaMmLqai41OOXRU9qjOSxAjpq5ikIDgMtAUnqoPJeZeQZA1Oy7gE9ibjCMwOLQl2iZHo5NY3AP0I6ljsCbHkodK4CFjypkbAhu5gBWDTiexyGuy3ycMUh9iCCUCgSoWndpE6QNIZjweCuxtyvnoOJ6AjQ2RER/NYChigR4AA/njfggltoOCmPo96HLO+nIdGNQ0nvh6lpuhNWZNDs3Q0fTHoevYjK1Ja/6m2khdLzfDbiaD06T0uSPdNc+xkRxe1iV+SoMbqZGWBbxO2PEZ2NoMaa1xmbe4zAPWpUIwKdf+c0xrhVXmWZuqjuDiyO/RS56fMwWUrljWxBe1ZPwHeMgWhPRCNy8AAAAASUVORK5CYII=",
  "/screen-reader-dark.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAABpklEQVR4nE2R22pTURCG57R2Ds2OIUhFUJAiCLXQa99L36Iv471P4Av0yjMaL6Q1aZqd7DUHWXth6FwsFsz/z3wzg2dnryIckeBBRIRqZhYhIndAxJTSMd33WSQRkTRNMjNEbNsZIlbzZnPn7kQsk0ky593usOt2zAwApubh0+mImeR02Z6/eHyzvkckZiJi1Wyqy8Xs+tsfmY7k2Wn7/MkiwmtjdyNigPj6+69sdv319zUiRngJ88prpuvtQbadfloVEIiAIgphVlUz63slImySEAIRJmEmJEJmGo0aomEbZtY0DTObWX0RkQdOAQAiUlV3Z+aIGDhKlNEBQFWPu5SBqyqIiB7KB2CrXETFWRSIqKrHyjhERJR0GQlARBDx+K9VS7qeofqYOefs7iIFuaBUVUriHm4mTPS/SxksIvb7g1mEG49PwsO2d7WSmclmc991N2U5uX/z7soCPl695dQAwHjcCLMsl9NHi8XPz19uP7wPgElqXr4+X/1a5Zzx4uKy6w4eMSd5WpbNPzxvXbG65/OTtp3lrMR8SyTCo/0hmUm5D/4D8FMMuLP0HS0AAAAASUVORK5CYII=",
  "/screen-reader-quote.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbElEQVR4nFVRi27jIBDko9JLWgLsE1jjuE4TqZXa+//fOAFppBuNkM3AsLPraq3btu37bmZ5oNba3lfbWr4UR0S11nVdzawMmJm1RWsGQef9GZFKKarKzEQkIswcUzq9vbnj8RRCJKKp4UBKyXt//HNyIQREVFUZ4AEiAoAQokNEEck5P0+IiKpOpy4zs4jMfwBARCJKKYUQ/pNhAH+fP5/PPdg0n55z1ZECAJyIlFKWZTGzudr4KKUwc7+tqvUXzwYgYoyjclUZ+x3zFe7OKcTgAICZtQd7kHtuflTOhFnFaplcrNqgSjdwVmRr9b63277e9/V+XW97u+/tsuSi9JT77oPvnRfLRdHVLOtSrtuytXpZ8uTW6lJEhRxAb2EvFSkCRsA0+vYoDQBopMTacP+k6xfWFSCNiU15DCCVFT5+8PY32RbjTFOeIyFEsk1uP/zxnUrz3ocQvPf99pxSAkzIPqTj6fVwOLwM/AOxnrARGsGFbQAAAABJRU5ErkJggg==",
  "/screen-voices-premium.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPklEQVR4nHWRi04CMRBF+yFGAii7sG3nPdNd4v//lmlBFKM3TdPkdF530uFwmIb2+/3L0O51d5zejvP7fj6m0+l0GZrn+fZvmqbzcjnny5TPKedchwAQkRAJoD8BsSIkJhYWYTG1GDIzHRLR5BJN1iaba6h2IKIsInLD2la7bv4R1kSUiEf+XoiIk2prdt2iY2YBwFKgFAAgIklkodGibWaOKKXAspScoSKTeCJ19eaxmjoS/4nXER1EP6KBka1ji7WtV/f2wMtSRnlMKPfkqo7Iz5gSSY+OdjWLv7CamKuHiCIyANYKtcJ9bnbTFt6amjHLzRMAJOrWDRyu4Sx3druJmFkSm1tbY+220Ji7lFpKrbX/e9iyqToA5Vx/tdZt8fY/Fgu1YJZa7/v4Ts5qaq7mj7afFtoX/yXmpyMin5XHfa7OD7UPAAAAAElFTkSuQmCC",
  "/screen-library-dark.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCklEQVR4nHWS227cIBBA+Y88JNn1DQwYML7sZh0lqZRL01xUbdpGafv/f3Eq2LRqH/pwhBkdD8wMYhgGNpsNMUaapuHo6ChTVRXTNLHb7ViWBZGEcRyzqLWmLMtM22pSknmeMyLEgTDMuGHGhgGlLVJpjLE45wmhz4jO91mw/XTAR4z1GNPRtgatExbR9SMmzuh+g3Ipo0Mqg5QtdS2RUqGURkx3nxk/faW/fkL3Uw6mTGltGpV/SHsxfdwzPb4Sb56xcc5FpONUq1EqSYf7iu3dA9uHPdu7J/p5R9d5tOlo3o9OWZMsetcSvCH2Hh9iFqXUFGXNalVQljVNIxGhk/iuJQRL5z2666ilYl2UnJ6uKdYldd0gri4sF1cd5x88ZnI0QVPYhjJIqo1GnlnUZBFfXiMvbwNP3yf8dURdeqqdprl2tPsRu58xtxHx7W3g5cfI888Jl8QrT7UYmhuPTuLLjLmLiPv7yP3jwO3zTH85YM8jcrLUs6FeDPK8Q206xLJxLNvAcjbg+3AoRinWZcXpak1RvBezGx3LFFg2A32IGONy79ZF9d6eKvdTTNExRc8YA855PIXU4DSVw5zbPCkRQsD7hP9r/ZfkiL7v+T8hk8XfQ0/pjXUYFw7YDpNiJr1HjSiKiqqq86WrWlJKncnfKVbVJEccH59ycrI6sCo5WdcHVsWfeHJ+AVRwV6nvIwiuAAAAAElFTkSuQmCC",
  "/screen-settings-premium.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABgElEQVR4nGVSi2ojMQz0hxyBNCnZdjfWy5JsrzfJXiD9/z861kmh9IbBIMYWmpHD4XAYhuF0Ou33+z8du93ucDoeh/e3j2MYhmEcx2maPjs+OsbzNMbpM44BAYiIO1IHP0thYgrqrubJXM1yzu5ZVVPaqGpB66K1iVeSRCSEhMhACUUpPeXSZU6ABIDbSQKckFPw2rw2zZUl4beMJMRKoiHnUnI1c0KKEWIEAOzDCbMEzc3nq9WLlybqzClGRGSmLrPPqVykXtvtPi/XUmYA2t73BkG8ar1YWy/3x3JbW1uYBZGo3whi1crsdaltyaWqGgn7UuralvUaWKvlOZfZ1Ig4niEy5r+tfd3Wr3sgLepzrkvOVUTjGScEv83z47o+7iGpq2Xzomov64iUREzVLKi5eY866XOojUCE22oCaxbNnLyHypur1wq77ygFUolSIvsEaYp0PkNPphsDdhCPkqN4JI1bAwT4lkmMRLGTRImF6PUhmDkkkd/8gfCz+B//AEVMg61fohJzAAAAABJRU5ErkJggg==",
  "/screen-reader-soundscape.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB0klEQVR4nFWQ226jMBCG/TTdtkGEgG2Mjc82NgQIJM1htcnebN7/GVaQ3vTTaKSZX3MEMcZxHKdpatu2aRrvfYyxPwzdYd8MEWhtnPNNE4yxWhutjdHWem+8U04DShnnQkrFuahrzhhnrGaspowRWoGyJFVFl5iy1deE0BIThEqEMOCca62dc3bFrEgpKWUIl+ClhRD8ilsxxtS1IIQusrX2ldJaK6W01lLKqmIQ4h+yWtGLrBirMSbAGOOce138au+9t9YKIUtSgdfgruviStOEEIJzXgj5Xe29b9vW+8ZaJ+XSnnNRVbQo4PfmMUZrnRCKC8VqSQjLsiJNM6C1staGEKy1nEsuVEXrktAsy7Ns9+Pu5f++UdpwoSDEBURAqaXa+2aZvbxkWds7a5SUgoMuuGmIl+NwnveXxfrrsb9fxuvczX0DTmO4zd3j3P85D4/rYbHL+O/34e95f5sjGIKZOnfs7OV6uj+f9+fzevv66t3c2c5LUBPCKaUYa9/F0yOeHjb0FJesqlCBwGaz3Wyy97ekQIKbiZsJYvX+K9kk2cdHCvIc5jnKd5AUhKOaFRRlKE2y7TZP0x3AuIQQQ1gSRHjJqqLcpbvPzyRJ0u02+w/rcac0RmJi7wAAAABJRU5ErkJggg==",
  "/screen-reading-style.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABs0lEQVR4nG2R7W5aMQyGz72vcAbsMtYBoqhcR9eiUdbewjjKl51PO8lBUw6V+qfWq/zIE/u1na7vZ6vV4sdqufjez+d38/ld388Wy75fzmaLb91ms97vHw6Hx4fddr2+36zvd7vt42G/329/bX52x+PL6/n17e3v6XR8fn56eX46nY7v7+fz+c/x+LvTxiCCtRZBKyW0EtZCij74dtM5ZxEBANojRGvRORtjoBSZYmctKiWHYRBCKKW01kopAPDeM6WGpZT/phiGyzBcLpeLEAIRUoqdswjNVUoplBRyklbSWojRN4xgAMzNMqV4E03qnEPEhr13TKmWfFPJnDl1FkFKMQwDIjLT9Tper2Mdx1wKMbfiRisphbVIlGqt4ziWOnIukSYMYIzR3lmiVKbKnDMRh0StOBgNYGLwzFQyN+PJmYhatkVwzqYUc+Zb9mdrAEZJqZQKwTdW63VsUWvJmTs/mX9skbmUMtGGS+a2VKO1MSaEUHKuteE6jqUU5ikbwCBAaK19ZH8OFnz7a2cxxsBMeeqcc023wWJwwdvgbQyOUmCKmRNzSpRiih0lTylM5xf6DxsqXNbfF5dpAAAAAElFTkSuQmCC",
  "/screen-home.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAAB9ElEQVR4nH1STWsTURS9933MTCZTG5pgxRChCF1ZuhFc2YX0x7j1B7jzb4h/wKUiFAU3pQVpoUJTUqvUJKYmzUfn483Xm/eezGRTETyryzv33cM952Kaivl87jiO67rGGKgQx/FgMGy372OSREVRkApLDgC0UkEYcs4JItbcOqMUsSRMBUKpbXGtFEuEOD85eLD12CD3HFqvsaoJUtv2ajm5Hg7fvHo5uxoKfyyzGJEgEqnp632YRAQnv0cnR0dPnu5QyjjnAFCKIPoJuCzH8XiklEqTtNlq2Y5jtMYSIKXSSFkQiuHI51wns24qFt5a58f3c2+lsbm1c3x4wJKcH38drHoy/vlx7/PBs93dL4f7d5ve8xcPL7qnrHfWfbf3dnOjc3l60e2Nm+1Ba60xmV5/eP+p/63HwpsrK59hvvpoe9upe+3Oxq/BJbuzMg1u+vMAIxHFGRgZaW2M0YyxWq1GKaOUZFnKlKFhYTVYJqUkhCmlLcuuNjQAholgCiJcIL23vk4pBQBVZIVMq+UR41gsUt6w89w4NtMIUBhiocy0ZZGcSSkzEeVoxVmqrcpRqZjn5GlkuRyFCMoEKqnKUSzLKj4EZLdj/hf/4wCAlfYDKA0ElyMrKWOQ3DqP/kyHaemLMSbLMt/3lzUuz+/v3+XLcuofeWwbA7czL28AAAAASUVORK5CYII=",
  "/screen-home-dark.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAIAAAB2RJoKAAACEUlEQVR4nD2STU8UQRCGu7qre3pmdgb2CxdcI0FjwMSAErwIiYnxFxjv3v0X/jzPJlyMQU0AgZ1dYXdmdrq7yuyE+Byrk/p43obDw8M8z5umqesaAESLtXY0Gl1dXSEAVFVFRP/fhBBN0xRFwczIzFVZKVRtnYUAAPDeV1WptUGQMH68+fP3hEFKKV05d8uamHWSo5jLTho/2RnGRmXWGKDYRgDASr/7/CXujmBv77l3SwZEhb4F2iVM1lWhxuFwoFqms7+ucSDFarwQxE53Ovhsd/fg1fHF+Zltfgy66fdfBSqOkzzKHjWLO3yw+dSmY20mdxdXp6cziSY0ZW89Pnn/uiwsfPj4yZvY1bdn375ScArl26Odyz8XyfqLh/0E9vdfEpHzPokNMy/mt/1u7pyrlpzEGgMFL9BGklkSUSfr3UzvQgir8wRIIdHkA2ahlELUUipmEQJ5H1ZS++uZRg/J4Ob6OrTm09RKmRARIuLNZArxWphfMsbknFj1QeErRqtdLSWAXcUm40gbRK11bAwRGQVEjErJZjGz1pCvtV45Y/ZZllKgKLGYr3WaZVOWVRvlfaYhBCIiJvnmZH9za2CjNEnSKIqNiYtitrExOj4+6fWGcHR0UM6rIIxgquuKWRBRv9/P82wyKWA83hZM+dZ2fVu4ci6EiFqm0+nKhJQghFpcnzPffzfnnPceEYUQ/wCkWw/5jRS8JgAAAABJRU5ErkJggg==",
};

/* ─── Interactive Phone with tilt + hover crossfade ─── */
function Phone({
  src,
  hoverSrc,
  alt,
  className = "",
  light = false,
  size = "md",
  onClick,
  delay = 0,
  tilt = true,
  onHoverChange,
  priority = false,
}: {
  src: string;
  hoverSrc?: string;
  alt: string;
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  delay?: number;
  tilt?: boolean;
  onHoverChange?: (hovered: boolean) => void;
  priority?: boolean;
}) {
  const sizeClasses = {
    sm: "w-[180px] md:w-[200px]",
    md: "w-[240px] md:w-[270px]",
    lg: "w-[270px] md:w-[300px]",
  };

  const imgSizes = {
    sm: "(max-width: 768px) 180px, 200px",
    md: "(max-width: 768px) 240px, 270px",
    lg: "(max-width: 768px) 270px, 300px",
  };

  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();
  const transform = useRef("none");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
  }, [tilt]);

  const handleMouseLeave = useCallback(() => {
    if (ref.current && tilt) {
      ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    }
    setHovered(false);
    onHoverChange?.(false);
  }, [tilt, onHoverChange]);

  return (
    <div
      ref={ref}
      className={`device-frame ${light && !hovered ? "device-frame-light" : ""} ${sizeClasses[size]} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, background 0.8s ease, box-shadow 0.8s ease`,
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => { setHovered(true); onHoverChange?.(true); }}
    >
      <div className="relative overflow-hidden rounded-[36px]">
        <Image
          src={src}
          alt={alt}
          width={393}
          height={852}
          className={`w-full h-auto block ${!isMobile && onClick ? "cursor-pointer" : ""}`}
          onClick={() => { if (!isMobile) onClick?.(); }}
          quality={75}
          sizes={imgSizes[size]}
          priority={priority}
          {...(blurMap[src] ? { placeholder: "blur" as const, blurDataURL: blurMap[src] } : {})}
        />
        {hoverSrc && (
          <Image
            src={hoverSrc}
            alt={alt}
            width={393}
            height={852}
            className={`w-full h-auto absolute inset-0 block ${!isMobile && onClick ? "cursor-pointer" : ""}`}
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={() => onClick?.()}
            quality={75}
            sizes={imgSizes[size]}
            priority={priority}
            {...(blurMap[hoverSrc] ? { placeholder: "blur" as const, blurDataURL: blurMap[hoverSrc] } : {})}
          />
        )}
        {tilt && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[36px]"
            style={{
              background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.06), transparent 70%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Feature data for bento grid ─── */
const featureItems = [
  { icon: "\u{1F319}", label: "Sleep timer", desc: "Drift off. It stops when you do." },
  { icon: "\u{1F327}", label: "Soundscapes", desc: "Rain, fireplace, ocean waves." },
  { icon: "\u26A1", label: "0.3x to 3.0x", desc: "Blaze through or savor every word." },
  { icon: "\u{1F311}", label: "Night mode", desc: "Easy on the eyes after dark." },
  { icon: "\u270F\uFE0F", label: "Notes", desc: "Highlight passages. Save thoughts." },
  { icon: "\u{1F4D6}", label: "Chapters", desc: "Jump to any chapter instantly." },
  { icon: "\u{1F3A7}", label: "Background", desc: "Keep listening with the screen off." },
  { icon: "\u{1F4E4}", label: "Share", desc: "Send from Safari, Mail, anywhere." },
];

/* ═══════════════════════════════════════════════ */

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [heroDimmed, setHeroDimmed] = useState(false);

  const s1 = useReveal();
  const s2 = useReveal();
  const s3 = useReveal();
  const s4 = useReveal();
  const s5 = useReveal();
  const s6 = useReveal();
  const s7 = useReveal();
  const s8 = useReveal();
  const s9 = useReveal();

  const reveal = (r: { ref: React.RefObject<HTMLDivElement | null>; visible: boolean }) =>
    `section-reveal ${r.visible ? "visible" : "not-visible"}`;

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <>
      <main className="flex flex-col items-center min-h-screen overflow-x-hidden">

        {/* ══════════ HERO ══════════ */}
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div
            className="absolute inset-0 transition-colors duration-[1200ms] ease-in-out"
            style={{ backgroundColor: heroDimmed ? "#1d1d1f" : "#f7f5f2" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-loudBlue/8 rounded-full blur-[140px] animate-glow pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="animate-fade-in-up">
                <Image src="/logo2.png" alt="LoudReader" width={56} height={56} className="mx-auto lg:mx-0 mb-6 drop-shadow-md" priority />
              </div>
              <div className="animate-fade-in-up mb-6 flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-loudBlue/10 border border-loudBlue/20 px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-loudBlue">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-loudBlue opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-loudBlue" />
                  </span>
                  Free forever &middot; No limits &middot; No quotas
                </span>
              </div>
              <h1
                className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6 transition-colors duration-[1200ms]"
                style={{ color: heroDimmed ? "#ffffff" : "#111827" }}
              >
                Every text is<br />an audiobook.
              </h1>
              <p
                className="animate-fade-in-up delay-200 text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed transition-colors duration-[1200ms]"
                style={{ color: heroDimmed ? "rgba(255,255,255,0.5)" : "#9ca3af" }}
              >
                Natural AI voices read any book aloud, every word highlighted in sync. Listen as much as you want. No limits, no quotas, no account. Fully private, completely offline.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col items-center lg:items-start gap-4">
                <AppStoreButton dark={heroDimmed} source="home-hero" />
                <p
                  className="text-[13px] tracking-wide transition-colors duration-[1200ms]"
                  style={{ color: heroDimmed ? "rgba(255,255,255,0.3)" : "#9ca3af" }}
                >
                  Unlimited listening, free &middot; Offline &middot; Private
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-end gap-4">
              <Phone
                src="/screen-reader-light.png"
                hoverSrc="/screen-reader-dark-hero.png"
                alt="Reader with playback"
                light
                delay={0.3}
                onHoverChange={setHeroDimmed}
                onClick={() => setLightbox("/screen-reader-light.png")}
                priority
              />
              <Phone
                src="/screen-library-light.png"
                alt="Book library"
                size="sm"
                light
                className="opacity-70 translate-y-8 hidden sm:block"
                delay={0.5}
                tilt={false}
                onClick={() => setLightbox("/screen-library-light.png")}
              />
            </div>
          </div>
        </section>

        {/* ══════════ READER ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f] overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s1.ref} className={`${reveal(s1)} max-w-6xl mx-auto px-6 py-24 md:py-36`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Read along as you listen.
              </h2>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                Every sentence lights up as it&apos;s spoken. Your eyes and ears stay perfectly in sync.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <Phone src="/screen-reader-huckfinn.png" alt="Reading Huck Finn" size="sm" className="hidden md:block opacity-50 -rotate-3" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-reader-huckfinn.png")} />
              <Phone src="/screen-reader-dark.png" alt="Dark mode reader" delay={0} onClick={() => setLightbox("/screen-reader-dark.png")} />
              <Phone src="/screen-reader-quote.png" alt="Reader with quote" size="sm" className="hidden md:block opacity-50 rotate-3" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-reader-quote.png")} />
            </div>
          </div>
        </section>

        {/* ══════════ PRIVACY ══════════ */}
        <section className="w-full bg-white overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s7.ref} className={`${reveal(s7)} max-w-3xl mx-auto px-6 py-24 md:py-32 text-center`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900/5 mb-8">
              <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
              Nothing leaves<br />your phone.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-4">
              Work memos. Legal documents. Personal letters. Whatever you&apos;re reading, it stays on your device. Every voice, every word of processing happens locally.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto font-medium">
              No cloud. No accounts. No servers. Just you and your books.
            </p>
          </div>
        </section>

        {/* ══════════ VOICES ══════════ */}
        <section className="w-full bg-[#f7f5f2] overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s2.ref} className={`${reveal(s2)} max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col lg:flex-row items-center gap-12 lg:gap-20`}>
            <div className="flex-1 flex justify-center">
              <Phone
                src="/screen-voices-premium.png"
                alt="Voice selection"
                delay={0}
                onClick={() => setLightbox("/screen-voices-premium.png")}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-[1.05]">
                Voices worth<br />listening to.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-3">
                23 studio narrators across 10 languages. Eleven of them in English. All running entirely on your device.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-3">
                Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish books get a narrator who actually speaks the language — not an English voice with an accent. They appear in the picker once you have a book in that language.
              </p>
              <p className="text-sm text-gray-500 max-w-md mx-auto lg:mx-0">
                No internet. No data leaves your phone.
              </p>
              <NarratorPlayer />
            </div>
          </div>
        </section>

        {/* ══════════ VOICE CLONING ══════════ */}
        <section className="w-full bg-white overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s9.ref} className={`${reveal(s9)} max-w-3xl mx-auto px-6 py-24 md:py-32 text-center`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900/5 mb-8">
              <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
              Or read it<br />in your own voice.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-4">
              Read one paragraph aloud — about thirty seconds — and LoudReader builds a narrator out of it. Then any book in your library can be read in that voice.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto font-medium">
              The recording never leaves your phone. Neither does the voice. Delete it and the files go with it.
            </p>
          </div>
        </section>

        {/* ══════════ LIBRARY ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f] overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s3.ref} className={`${reveal(s3)} max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20`}>
            <div className="flex-1 flex justify-center">
              <Phone
                src="/screen-library-dark.png"
                alt="Dark library"
                delay={0}
                onClick={() => setLightbox("/screen-library-dark.png")}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Your library,<br />always with you.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Import any EPUB or PDF. Or browse 70,000+ free classics from Project Gutenberg.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ CUSTOMIZE ══════════ */}
        <section className="w-full bg-[#f7f5f2] overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s4.ref} className={`${reveal(s4)} max-w-6xl mx-auto px-6 py-24 md:py-36`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-[1.05]">
                Make it yours.
              </h2>
              <p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
                Speed, font, text size, night mode. Every detail tuned to how you read.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <Phone src="/screen-settings-premium.png" alt="Premium settings" size="sm" className="hidden md:block opacity-60 -rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-settings-premium.png")} />
              <Phone src="/screen-reader-soundscape.png" alt="Reader with soundscape" delay={0} onClick={() => setLightbox("/screen-reader-soundscape.png")} />
              <Phone src="/screen-reading-style.png" alt="Reading style" size="sm" light className="hidden md:block opacity-60 rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-reading-style.png")} />
            </div>
          </div>
        </section>

        {/* ══════════ DISCOVER ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f] overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s5.ref} className={`${reveal(s5)} max-w-6xl mx-auto px-6 py-24 md:py-36`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Never short of<br />something to read.
              </h2>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                Over 100 hand-picked classics sit on the home shelf. Pull down to shuffle it and deal a new hand, or hit Surprise Me and start listening to something you never would have picked. All free, all offline.
              </p>
            </div>
            <div className="flex justify-center items-end gap-3 md:gap-5">
              <Phone src="/screen-home-dark.png" alt="Home with classics shelf" size="sm" light className="opacity-70 -rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-home-dark.png")} />
              <Phone src="/screen-home.png" alt="Home tab" delay={0} onClick={() => setLightbox("/screen-home.png")} />
              <Phone src="/screen-library-light.png" alt="Library" size="sm" light className="opacity-70 rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-library-light.png")} />
            </div>
          </div>
        </section>

        {/* ══════════ FEATURES BENTO ══════════ */}
        <section className="w-full bg-white overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div ref={s6.ref} className={`${reveal(s6)} max-w-5xl mx-auto px-6 py-24 md:py-32`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-4">
              And all the details.
            </h2>
            <p className="text-lg text-gray-400 text-center mb-14 max-w-md mx-auto">
              The little things that make it feel right.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featureItems.map((f, i) => (
                <div
                  key={i}
                  className="group relative bg-gray-50 hover:bg-gray-100/80 rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                  style={{
                    opacity: 0,
                    animation: s6.visible ? `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s forwards` : "none",
                  }}
                >
                  <span className="text-2xl md:text-3xl block mb-3">{f.icon}</span>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PRICING ══════════ */}
        <section className="w-full bg-[#f7f5f2] overflow-hidden" style={{ contentVisibility: "auto" }}>
          <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-4">
              Free forever. Go further.
            </h2>
            <p className="text-lg text-gray-400 text-center mb-16 max-w-md mx-auto">
              Every book, cover to cover, with no time limit. Free, always. Upgrade only when you want more.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Free</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2 mb-1">$0</p>
                <p className="text-sm text-gray-400 mb-6">No account needed</p>
                <ul className="space-y-3 text-[15px] text-gray-500">
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Unlimited listening, cover to cover</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Unlimited library, import all you like</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Every voice free for your first 8 hours</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>100+ curated classics, plus all of Project Gutenberg</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Night mode, chapters, background play</span></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-loudBlue/20 bg-loudBlue/5 p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-medium text-loudBlue bg-loudBlue/10 px-2.5 py-1 rounded-full">Recommended</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2 mb-1">$7.99<span className="text-sm font-normal text-gray-400">/month</span></p>
                <p className="text-sm text-gray-400 mb-1">First month free. Cancel anytime.</p>
                <p className="text-[13px] text-gray-400 mb-6">or $49.99/year &middot; $199.99 once, yours for life</p>
                <ul className="space-y-3 text-[15px] text-gray-500">
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>All 23 studio narrators, 10 languages</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Clone your own voice, on device</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Variable speed (0.3x to 3.0x)</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Sleep timer to drift off to</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Ambient soundscapes</span></li>
                  <li className="flex items-start gap-3"><span className="text-loudBlue mt-0.5">&#10003;</span><span>Notes, highlights &amp; reading styles</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f]">
          <div ref={s8.ref} className={`${reveal(s8)} max-w-3xl mx-auto px-6 py-24 md:py-36 text-center`}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.95]">
              Start listening.
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
              That book you&apos;ve been meaning to finish? Import it, press play, and go.
            </p>
            <div className="flex flex-col items-center gap-4">
              <AppStoreButton dark source="home-cta-footer" />
              <p className="text-[13px] text-gray-600 tracking-wide">
                Free forever &middot; Offline &middot; Private
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer className="w-full border-t border-gray-200/60 py-10 px-6 bg-[#f7f5f2]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo2.png" alt="LoudReader" width={28} height={28} className="opacity-60" />
              <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} LoudReader</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-gray-400">
              {[
                { label: "Free Classics", href: "/listen" },
                { label: "FAQ", href: "/faq" },
                { label: "Release Notes", href: "/releases" },
                { label: "Support", href: "/support" },
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="hover:text-gray-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>

      {/* ══════════ LIGHTBOX ══════════ */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          style={{
            background: "radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-sm w-full"
            style={{ animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-2 text-white/60 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-3xl transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={lightbox}
              alt="Screenshot"
              width={393}
              height={852}
              className="rounded-[36px] mx-auto shadow-2xl"
              quality={80}
            />
          </div>
        </div>
      )}
    </>
  );
}
