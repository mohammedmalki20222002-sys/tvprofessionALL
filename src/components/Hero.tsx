import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onPricingClick: () => void;
}

const WM_CHANNELS = [
  { id: "ard",      name: "ARD",        sub: "Das Erste HD",   logo: "/logos/ard.png",      bg: "#003CA6" },
  { id: "zdf",      name: "ZDF",        sub: "ZDF HD",         logo: "/logos/zdf.png",      bg: "#161616" },
  { id: "rtl",      name: "RTL",        sub: "RTL HD",         logo: "/logos/rtl.png",      bg: "#E8001A" },
  { id: "sat1",     name: "SAT.1",      sub: "SAT.1 HD",       logo: "/logos/sat1.png",     bg: "#1A3A8F" },
  { id: "pro7",     name: "ProSieben",  sub: "Pro7 HD",        logo: "/logos/pro7.png",     bg: "#CC0000" },
  { id: "vox",      name: "VOX",        sub: "VOX HD",         logo: "/logos/vox.png",      bg: "#CC0033" },
  { id: "kabel1",   name: "Kabel Eins", sub: "Kabel1 HD",      logo: "/logos/kabel1.png",   bg: "#E50043" },
  { id: "rtl2",     name: "RTL Zwei",   sub: "RTL2 HD",        logo: "/logos/rtl2.png",     bg: "#C00018" },
  { id: "rtlplus",  name: "RTL+",       sub: "RTL+ Stream",    logo: "/logos/rtlplus.png",  bg: "#E8001A" },
  { id: "ndr",      name: "NDR",        sub: "NDR HD",         logo: "/logos/ndr.png",      bg: "#003DA5" },
  { id: "wdr",      name: "WDR",        sub: "WDR HD",         logo: "/logos/wdr.png",      bg: "#0057A8" },
  { id: "br",       name: "BR",         sub: "BR HD",          logo: "/logos/br.png",       bg: "#009BD4" },
  { id: "arte",     name: "Arte",       sub: "Arte HD",        logo: "/logos/arte.png",     bg: "#1A1A1A" },
  { id: "ntv",      name: "n-tv",       sub: "n-tv News",      logo: "/logos/ntv.png",      bg: "#CC0000" },
  { id: "zdfinfo",  name: "ZDFinfo",    sub: "ZDFinfo HD",     logo: "/logos/zdfinfo.png",  bg: "#161616" },
  { id: "sport1",   name: "Sport1",     sub: "Sport1 HD",      logo: "/logos/sport1.png",   bg: "#E8001A" },
  { id: "sky",      name: "Sky Sport",  sub: "Sky DE",         logo: "/logos/skyde.png",    bg: "#101010" },
  { id: "euro1",    name: "Eurosport",  sub: "Eurosport 1",    logo: "/logos/euro1.png",    bg: "#FF6600" },
  { id: "dazn",     name: "DAZN",       sub: "DAZN DE",        logo: "/logos/daznde.png",   bg: "#111111" },
  { id: "joyn",     name: "Joyn",       sub: "Joyn Free",      logo: "/logos/joyn.png",     bg: "#FF0066" },
];


export default function Hero({ onPricingClick }: HeroProps) {
  const doubled = [...WM_CHANNELS, ...WM_CHANNELS, ...WM_CHANNELS];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">

      {/* ── Unified card ─────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl overflow-hidden min-h-[520px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] flex flex-col">

        {/* Background: WM photo on the right */}
        <div className="absolute inset-0">
          <img
            src="/wm-banner.png"
            alt="WM 2026"
            className="absolute right-0 top-0 h-full w-full sm:w-[62%] md:w-[58%] lg:w-[55%] object-cover object-top"
          />
          {/* Left green gradient — lighter so photo shows through more */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(1,46,42,0.96) 0%, rgba(1,46,42,0.90) 28%, rgba(1,46,42,0.70) 42%, rgba(1,46,42,0.30) 58%, rgba(1,46,42,0.08) 72%, transparent 100%)",
            }}
          />
          {/* Bottom gradient for mobile readability */}
          <div
            className="absolute inset-0 sm:hidden"
            style={{ background: "linear-gradient(to top, rgba(1,46,42,0.92) 35%, rgba(1,46,42,0.30) 65%, transparent 100%)" }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-40 w-48 h-48 rounded-full bg-black/10 blur-3xl pointer-events-none" />

        {/* ── Content ──────────────────────────────────────────────── */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full flex-1 gap-6 max-w-[600px]">

          {/* Top: WM badge + trust */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span className="text-[10px] font-bold text-white/70">TrustScore 4.9 ★★★★★</span>
            </div>
          </div>

          {/* Middle: headline + description */}
          <div className="flex flex-col gap-3">
            {/* Announcement subtitle */}
            <p className="serif-display italic font-light text-xl sm:text-2xl text-white/80">
              IPTV kaufen – Das Beste in Deutschland
            </p>

            {/* Main headline */}
            <h1 className="text-[2.4rem] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.0] tracking-[-0.04em] font-black text-white">
              <span className="serif-display italic font-light text-white/80" style={{ fontSize: "1.06em" }}>
                4K-Qualität,
              </span>
              <br />
              <span className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.08] font-black text-white">
                Verfolgen Sie die{" "}
                <span
                  className="serif-display italic font-light block sm:inline text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ color: "#F5C842", textShadow: "0 0 40px rgba(245,200,66,0.35)" }}
                >
                  Weltmeisterschaft WM
                </span>{" "}
                <span className="serif-display italic text-white/90">Seien Sie dabei!</span>
              </span>
            </h1>

          </div>

          {/* Stats */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-6 sm:gap-8">
              {[
                { v: "59K",  l: "Sender"   },
                { v: "200K", l: "VOD"      },
                { v: "4K",   l: "Ultra HD" },
              ].map(({ v, l }, i) => (
                <div key={l} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <div className="w-px h-6 bg-white/15" />}
                  <div>
                    <p className="text-xl sm:text-2xl font-black leading-none text-white">{v}</p>
                    <p className="serif-display italic font-light text-xl text-white/75 mt-0.5">{l}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA + device pills */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-sm px-6 py-2.5 rounded-full
                           shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none hover:bg-white/90 transition-all"
              >
                <span>Jetzt IPTV kaufen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all"
              >
                Sofortigen Zugang sichern
              </button>
            </div>
            {/* Displaced tagline */}

            {/* WM Channel auto-scroll strip */}
            <div className="overflow-hidden -mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12">
                <div className="animate-scroll flex gap-2.5 px-2">
                  {doubled.map((ch, i) => (
                    <div
                      key={`${ch.id}-${i}`}
                      className="shrink-0 flex items-center gap-3 bg-white hover:bg-white/95 border border-black/8 rounded-2xl px-3.5 py-2.5 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {/* Logo box */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shrink-0 p-1"
                        style={{ backgroundColor: ch.bg }}
                      >
                        <img
                          src={ch.logo}
                          alt={ch.name}
                          className="w-full h-full object-contain"
                          onError={e => {
                            const el = e.currentTarget;
                            el.style.display = "none";
                            const parent = el.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span style="color:white;font-size:8px;font-weight:900;text-align:center;line-height:1.1;word-break:break-all">${ch.name}</span>`;
                            }
                          }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col leading-none gap-1">
                        <span className="text-[#111211] text-[13px] font-bold whitespace-nowrap">{ch.name}</span>
                        <span className="text-[11px] text-[#014E45]/70 font-medium whitespace-nowrap">{ch.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
