import { ArrowRight } from "lucide-react";

interface LiveSportsProps {
  onPricingClick: () => void;
}

// ── Inline SVG brand logos for platforms without downloadable PNGs ──────────
function NetflixLogo() {
  return (
    <svg viewBox="0 0 24 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="32" fill="#E50914" />
      <text x="12" y="24" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="Arial Black, Arial">N</text>
    </svg>
  );
}

function PrimeLogo() {
  return (
    <svg viewBox="0 0 80 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="30" rx="4" fill="#00A8E0" />
      <text x="40" y="13" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Arial">prime</text>
      <text x="40" y="24" textAnchor="middle" fontSize="7" fontWeight="400" fill="white" fontFamily="Arial">video</text>
    </svg>
  );
}

function MaxLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#002BE7" />
      <text x="30" y="21" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fontFamily="Arial Black, Arial">max</text>
    </svg>
  );
}

function AppleTVLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#000000" />
      <text x="30" y="13" textAnchor="middle" fontSize="7" fontWeight="400" fill="white" fontFamily="Arial"> Apple</text>
      <text x="30" y="23" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="Arial">TV+</text>
    </svg>
  );
}

function HuluLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#1CE783" />
      <text x="30" y="21" textAnchor="middle" fontSize="14" fontWeight="900" fill="#111" fontFamily="Arial Black, Arial">hulu</text>
    </svg>
  );
}

function PeacockLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#000000" />
      <text x="30" y="14" textAnchor="middle" fontSize="6" fontWeight="700" fill="#F4C430" fontFamily="Arial">PEACOCK</text>
      <text x="30" y="23" textAnchor="middle" fontSize="5" fontWeight="400" fill="white" fontFamily="Arial">streaming</text>
    </svg>
  );
}

function WOWLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#DA1E4B" />
      <text x="30" y="22" textAnchor="middle" fontSize="18" fontWeight="900" fill="white" fontFamily="Arial Black, Arial">WOW</text>
    </svg>
  );
}

function JoynLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#00DCA5" />
      <text x="30" y="22" textAnchor="middle" fontSize="16" fontWeight="900" fill="#111" fontFamily="Arial Black, Arial">joyn</text>
    </svg>
  );
}

function MagentaLogo() {
  return (
    <svg viewBox="0 0 80 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="30" rx="4" fill="#E20074" />
      <text x="40" y="13" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="Arial">MagentaTV</text>
      <text x="40" y="23" textAnchor="middle" fontSize="6" fontWeight="400" fill="white" fontFamily="Arial">Telekom</text>
    </svg>
  );
}

function ZattooLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#E6007E" />
      <text x="30" y="21" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="Arial Black, Arial">zattoo</text>
    </svg>
  );
}

// ── Platform data ──────────────────────────────────────────────────────────────
type LogoType = "img" | "svg";

interface Platform {
  id: string;
  name: string;
  sub: string;
  bg: string;
  logoType: LogoType;
  logo?: string;
  SvgLogo?: () => JSX.Element;
}

const INTL_PLATFORMS: Platform[] = [
  { id: "netflix",   name: "Netflix",       sub: "Filme & Serien",    bg: "#E50914", logoType: "svg", SvgLogo: NetflixLogo  },
  { id: "prime",     name: "Prime Video",   sub: "Amazon Original",   bg: "#00A8E0", logoType: "svg", SvgLogo: PrimeLogo    },
  { id: "disneyp",   name: "Disney+",       sub: "Disney Originals",  bg: "#113CCF", logoType: "img", logo: "/logos/disneyplus.png" },
  { id: "max",       name: "HBO / Max",     sub: "HBO Originals",     bg: "#002BE7", logoType: "svg", SvgLogo: MaxLogo      },
  { id: "appletv",   name: "Apple TV+",     sub: "Apple Originals",   bg: "#000000", logoType: "svg", SvgLogo: AppleTVLogo  },
  { id: "hulu",      name: "Hulu",          sub: "Live TV + VOD",     bg: "#1CE783", logoType: "svg", SvgLogo: HuluLogo     },
  { id: "paramount", name: "Paramount+",    sub: "CBS & Paramount",   bg: "#0064FF", logoType: "img", logo: "/logos/paramount.png" },
  { id: "peacock",   name: "Peacock",       sub: "NBC Universal",     bg: "#000000", logoType: "svg", SvgLogo: PeacockLogo  },
  { id: "dazn",      name: "DAZN",          sub: "Live Sport",        bg: "#111111", logoType: "img", logo: "/logos/dazn.png"      },
  { id: "espn",      name: "ESPN+",         sub: "Sport Live",        bg: "#AA0000", logoType: "img", logo: "/logos/espn.png"      },
];

const DE_PLATFORMS: Platform[] = [
  { id: "rtlplus",   name: "RTL+",          sub: "RTL Deutschland",   bg: "#FF0050", logoType: "img", logo: "/logos/rtlplus.png"   },
  { id: "skyde",     name: "Sky",           sub: "Sky Deutschland",   bg: "#101010", logoType: "img", logo: "/logos/sky.png"        },
  { id: "daznde",    name: "DAZN",          sub: "Sport Streaming",   bg: "#141414", logoType: "img", logo: "/logos/daznde.png"     },
  { id: "wow",       name: "WOW",           sub: "Sky Streaming",     bg: "#DA1E4B", logoType: "svg", SvgLogo: WOWLogo              },
  { id: "joyn",      name: "Joyn",          sub: "Gratis Streaming",  bg: "#00DCA5", logoType: "svg", SvgLogo: JoynLogo             },
  { id: "magentatv", name: "MagentaTV",     sub: "Telekom",           bg: "#E20074", logoType: "svg", SvgLogo: MagentaLogo          },
  { id: "zattoo",    name: "Zattoo",        sub: "Live TV",           bg: "#E6007E", logoType: "svg", SvgLogo: ZattooLogo           },
  { id: "ardmed",    name: "ARD Mediathek", sub: "Öffentlich-rechtl.",bg: "#003CA6", logoType: "img", logo: "/logos/ard.png"        },
  { id: "zdfmed",    name: "ZDF Mediathek", sub: "Öffentlich-rechtl.",bg: "#161616", logoType: "img", logo: "/logos/zdf.png"        },
  { id: "disneyDE",  name: "Disney+",       sub: "Disney Deutschland",bg: "#113CCF", logoType: "img", logo: "/logos/disneyplus.png" },
];

// ── Platform Card ─────────────────────────────────────────────────────────────
function PlatformCard({ p }: { p: Platform }) {
  return (
    <div className="shrink-0 flex items-center gap-3 bg-white border border-black/8 rounded-2xl px-3.5 py-2.5 shadow-sm min-w-[175px]">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden shrink-0 p-1"
        style={{ backgroundColor: p.bg }}
      >
        {p.logoType === "svg" && p.SvgLogo ? (
          <p.SvgLogo />
        ) : (
          <img
            src={p.logo}
            alt={p.name}
            className="w-full h-full object-contain"
            onError={e => {
              const el = e.currentTarget;
              el.style.display = "none";
              const par = el.parentElement;
              if (par) par.innerHTML = `<span style="color:white;font-size:8px;font-weight:900;text-align:center;line-height:1.2">${p.name}</span>`;
            }}
          />
        )}
      </div>
      <div className="flex flex-col leading-none gap-1">
        <span className="text-[#111211] text-[13px] font-bold whitespace-nowrap">{p.name}</span>
        <span className="text-[#014E45]/65 text-[11px] font-medium whitespace-nowrap">{p.sub}</span>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LiveSports({ onPricingClick }: LiveSportsProps) {
  const tripled1 = [...INTL_PLATFORMS, ...INTL_PLATFORMS, ...INTL_PLATFORMS];
  const tripled2 = [...DE_PLATFORMS,   ...DE_PLATFORMS,   ...DE_PLATFORMS];

  return (
    <section id="live-sports-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="bg-[#080908] text-white rounded-2xl py-8 px-4 md:px-6 relative overflow-hidden ring-1 ring-white/[8]">

        <div className="absolute top-0 right-0 w-72 h-72 bg-[#014E45]/[6] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-0 w-56 h-56 bg-[#014E45]/[4] rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Alle Plattformen.{" "}
              <span className="serif-display italic font-light text-white/60">Ein Abo.</span>
            </h2>
          </div>
        </div>

        <p className="text-white/35 text-xs font-mono mb-6 relative z-10">
          Netflix · Prime · Disney+ · HBO · Sky · RTL+ · und viele mehr — alles über uns.
        </p>

        {/* Row 1 — International, scrolls left */}
        <div className="mb-2 relative z-10">
          <span className="text-[9px] font-black font-mono uppercase tracking-[0.22em] text-white/30 mb-2 block">🌍 International</span>
        </div>
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-3 select-none pointer-events-none">
          <div className="animate-scroll flex gap-3 px-4">
            {tripled1.map((p, i) => (
              <PlatformCard key={`r1-${p.id}-${i}`} p={p} />
            ))}
          </div>
        </div>

        {/* Row 2 — German, scrolls right */}
        <div className="mb-2 relative z-10">
          <span className="text-[9px] font-black font-mono uppercase tracking-[0.22em] text-white/30 mb-2 block">🇩🇪 Deutschland</span>
        </div>
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-8 select-none pointer-events-none">
          <div className="animate-scroll-reverse flex gap-3 px-4">
            {tripled2.map((p, i) => (
              <PlatformCard key={`r2-${p.id}-${i}`} p={p} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[8]">
          <div>
            <p className="text-white font-extrabold text-base tracking-tight">Zugang zu allen Plattformen</p>
            <p className="text-white/35 text-xs mt-1">Ohne einzelne Abos — alles in einem IPTV-Paket.</p>
          </div>
          <button
            onClick={onPricingClick}
            className="flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-sm px-6 py-2.5 rounded-full
                       shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none hover:bg-white/90 transition-all shrink-0"
          >
            <span>Jetzt Tarif wählen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
