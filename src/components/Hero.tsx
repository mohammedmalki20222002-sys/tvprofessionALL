import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onPricingClick: () => void;
}

const WM_CHANNELS = [
  // German Free TV
  { id: "ard",   name: "ARD",        sub: "Das Erste",    logo: "/logos/ard.png",   bg: "#003CA6", type: "Free", flag: "🇩🇪" },
  { id: "zdf",   name: "ZDF",        sub: "ZDF HD",       logo: "/logos/zdf.png",   bg: "#161616", type: "Free", flag: "🇩🇪" },
  { id: "rtl",   name: "RTL",        sub: "RTL HD",       logo: "/logos/rtl.png",   bg: "#E8001A", type: "Free", flag: "🇩🇪" },
  { id: "sat1",  name: "SAT.1",      sub: "SAT.1 HD",     logo: "/logos/sat1.png",  bg: "#1A3A8F", type: "Free", flag: "🇩🇪" },
  { id: "pro7",  name: "ProSieben",  sub: "Pro7 HD",      logo: "/logos/pro7.png",  bg: "#CC0000", type: "Free", flag: "🇩🇪" },
  // German Premium
  { id: "sky",   name: "Sky Sport",  sub: "Sky WM",       logo: "/logos/sky.png",   bg: "#101010", type: "PPV", flag: "🇩🇪" },
  { id: "euro1", name: "Eurosport",  sub: "Eurosport 1",  logo: "/logos/euro1.png", bg: "#FF6600", type: "PPV", flag: "🇩🇪" },
  { id: "dazn",  name: "DAZN",       sub: "DAZN WM",      logo: "/logos/dazn.png",  bg: "#111111", type: "PPV", flag: "🌍"  },
  // International
  { id: "bein",  name: "beIN Sports",sub: "beIN 1",       logo: "/logos/bein.png",  bg: "#6B0FA8", type: "PPV", flag: "🌍"  },
  { id: "bbc",   name: "BBC One",    sub: "BBC WM",       logo: "/logos/bbc.png",   bg: "#CC0000", type: "Free", flag: "🇬🇧" },
  { id: "itv",   name: "ITV",        sub: "ITV1 HD",      logo: "/logos/itv.png",   bg: "#0057A8", type: "Free", flag: "🇬🇧" },
  { id: "tf1",   name: "TF1",        sub: "TF1 France",   logo: "/logos/tf1.png",   bg: "#0066CC", type: "Free", flag: "🇫🇷" },
  { id: "canal", name: "Canal+",     sub: "Canal+ Sport", logo: "/logos/canal.png", bg: "#1A1A1A", type: "PPV", flag: "🇫🇷" },
  { id: "espn",  name: "ESPN",       sub: "ESPN WM",      logo: "/logos/espn.png",  bg: "#AA0000", type: "PPV", flag: "🇺🇸" },
  { id: "fox",   name: "Fox Sports", sub: "FS1 WM",       logo: "/logos/fox.png",   bg: "#003DA5", type: "PPV", flag: "🇺🇸" },
];

const TYPE_STYLE: Record<string, string> = {
  Free: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  PPV:  "bg-amber-500/20  text-amber-300  border-amber-500/30",
  VIP:  "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

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
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 pl-3 pr-4 py-1.5 rounded-full">
              <span className="text-base leading-none">⚽</span>
              <span className="font-black text-[10px] uppercase tracking-[0.2em] text-white">WM 2026 — Live</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span className="text-[10px] font-bold text-white/70">TrustScore 4.9 ★★★★★</span>
            </div>
          </div>

          {/* Middle: headline + description */}
          <div className="flex flex-col gap-3">
            {/* Announcement subtitle */}
            <p className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-[0.25em] text-white/40">
              Das beste IPTV in Deutschland
            </p>

            {/* Main headline */}
            <h1 className="text-[2.4rem] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.0] tracking-[-0.04em] font-black text-white">
              <span className="serif-display italic font-light text-white/80" style={{ fontSize: "1.06em" }}>
                4K-Qualität,
              </span>
              <br />
              auf all deinen Geräten.
            </h1>

            {/* WM line */}
            <p className="text-white/55 text-xs sm:text-sm font-medium leading-snug max-w-sm">
              Verfolgen Sie die{" "}
              <span className="serif-display italic text-white/75">Weltmeisterschaft WM</span> live —
              überall in Deutschland mit uns.{" "}
              <span className="serif-display italic text-white/60">Seien Sie dabei!</span>
            </p>

            {/* Description */}
            <p className="text-white/45 text-[11px] sm:text-xs leading-relaxed max-w-sm">
              Über <span className="font-semibold text-white/75">59.000 Live-Sender</span> und{" "}
              <span className="font-semibold text-white/75">200.000+ VOD</span> — sofort auf jedem Gerät, ohne Vertrag.
            </p>
          </div>

          {/* Stats */}
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
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mt-0.5">{l}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + device pills */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-sm px-6 py-2.5 rounded-full
                           shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none hover:bg-white/90 transition-all"
              >
                <span>Jetzt Tarif wählen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all"
              >
                Sofortigen Zugang sichern
              </button>
            </div>
            <p className="text-[9px] font-mono text-white/30 tracking-wider uppercase">
              Kein Vertrag · Sofortiger Zugang
            </p>

            {/* WM Channel auto-scroll strip */}
            <div className="flex flex-col gap-1.5">
              <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30">
                ⚽ WM Live-Sender — verfügbar mit uns
              </p>
              <div className="overflow-hidden -mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12">
                <div className="animate-scroll flex gap-2.5 px-2">
                  {doubled.map((ch, i) => (
                    <div
                      key={`${ch.id}-${i}`}
                      className="shrink-0 flex items-center gap-2.5 bg-white/8 hover:bg-white/14 border border-white/10 rounded-xl px-3 py-2.5 transition-colors cursor-default"
                    >
                      {/* Logo box */}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0 p-1"
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

                      {/* Text + badges */}
                      <div className="flex flex-col leading-none gap-1">
                        <span className="text-white text-[12px] font-bold whitespace-nowrap">{ch.name}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-[8px] text-white/35">{ch.flag}</span>
                          <span className={`text-[7px] font-black uppercase tracking-wide px-1.5 py-px rounded-full border ${TYPE_STYLE[ch.type]}`}>
                            {ch.type}
                          </span>
                          {/* 4K badge */}
                          <span className="text-[7px] font-black uppercase tracking-wide px-1.5 py-px rounded-full border bg-sky-500/20 text-sky-300 border-sky-500/30">
                            4K
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
