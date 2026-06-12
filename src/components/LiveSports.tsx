import { ArrowRight } from "lucide-react";

interface LiveSportsProps {
  onPricingClick: () => void;
}

// ── Inline SVG fallbacks ──────────────────────────────────────────────────────
function JoynLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#00DCA5" />
      <text x="30" y="22" textAnchor="middle" fontSize="16" fontWeight="900" fill="#111" fontFamily="Arial Black,Arial">joyn</text>
    </svg>
  );
}
function MagentaLogo() {
  return (
    <svg viewBox="0 0 80 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="30" rx="4" fill="#E20074" />
      <text x="40" y="14" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Arial">MagentaTV</text>
      <text x="40" y="24" textAnchor="middle" fontSize="7" fontWeight="400" fill="white" fontFamily="Arial">Telekom</text>
    </svg>
  );
}
function WOWLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#DA1E4B" />
      <text x="30" y="22" textAnchor="middle" fontSize="18" fontWeight="900" fill="white" fontFamily="Arial Black,Arial">WOW</text>
    </svg>
  );
}
function PeacockLogo() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" rx="4" fill="#000000" />
      <text x="30" y="14" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#F4C430" fontFamily="Arial">PEACOCK</text>
      <text x="30" y="23" textAnchor="middle" fontSize="5.5" fontWeight="400" fill="white" fontFamily="Arial">NBC Universal</text>
    </svg>
  );
}

// ── Sports leagues data ───────────────────────────────────────────────────────
interface League {
  id: string;
  name: string;
  logo: string;
  country: string;
}

const LEAGUES: League[] = [
  { id: "ucl",    name: "UEFA Champions League",  logo: "/sports/UEFA_Champions_League.png",  country: "Europa"      },
  { id: "uel",    name: "UEFA Europa League",      logo: "/sports/UEFA_Europa_League.png",     country: "Europa"      },
  { id: "uecl",   name: "UEFA Conference League",  logo: "/sports/UEFA_Conference_League.png", country: "Europa"      },
  { id: "pl",     name: "Premier League",          logo: "/sports/Premier_League.png",         country: "England"     },
  { id: "laliga", name: "La Liga",                 logo: "/sports/La_Liga.png",                country: "Spain"       },
  { id: "bl",     name: "Bundesliga",              logo: "/sports/Bundesliga.png",             country: "Deutschland" },
  { id: "sa",     name: "Serie A",                 logo: "/sports/Serie_A.png",                country: "Italia"      },
  { id: "l1",     name: "Ligue 1",                 logo: "/sports/Ligue_1.png",                country: "France"      },
  { id: "erediv",  name: "Eredivisie",             logo: "/sports/Eredivisie.png",             country: "Netherlands" },
  { id: "primeirap", name: "Primeira Liga",        logo: "/sports/Primeira_Liga.png",          country: "Portugal"    },
  { id: "spl",    name: "Saudi Pro League",        logo: "/sports/Saudi_Pro_League.png",       country: "Saudi Arabia"},
  { id: "superlig", name: "Süper Lig",             logo: "/sports/Super_Lig.png",              country: "Türkiye"     },
  { id: "bra",    name: "Brasileirão",             logo: "/sports/Brasileirao.png",            country: "Brasil"      },
  { id: "ligapro", name: "Liga Profesional",       logo: "/sports/Liga_Profesional.png",       country: "Argentina"   },
  { id: "caf",    name: "CAF Champions League",    logo: "/sports/CAF_Champions_League.png",   country: "Africa"      },
  { id: "f1",     name: "Formula 1",               logo: "/sports/Formula_1.png",              country: "Motorsport"  },
  { id: "ufc",    name: "UFC",                     logo: "/sports/UFC.png",                    country: "MMA"         },
  { id: "tdf",    name: "Tour de France",          logo: "/sports/Tour_de_France.png",         country: "Cycling"     },
  { id: "can",    name: "Canadian Championship",   logo: "/sports/Canadian_Championship.png",  country: "Canada"      },
  { id: "cpl",    name: "Challenger Pro League",   logo: "/sports/Challenger_Pro_League.png",  country: "Belgium"     },
];

// ── Platforms data ────────────────────────────────────────────────────────────
type LogoKind = "svg-file" | "img" | "inline";

interface Platform {
  id: string;
  name: string;
  sub: string;
  bg: string;
  logoKind: LogoKind;
  logo?: string;
  InlineLogo?: () => JSX.Element;
}

const INTL_PLATFORMS: Platform[] = [
  { id: "netflix",   name: "Netflix",      sub: "Filme & Serien",   bg: "#E50914", logoKind: "svg-file", logo: "/logos/netflix.svg"   },
  { id: "prime",     name: "Prime Video",  sub: "Amazon Original",  bg: "#00A8E0", logoKind: "svg-file", logo: "/logos/prime.svg"     },
  { id: "disneyp",   name: "Disney+",      sub: "Disney Originals", bg: "#113CCF", logoKind: "img",      logo: "/logos/disneyplus.png"},
  { id: "max",       name: "HBO / Max",    sub: "HBO Originals",    bg: "#002BE7", logoKind: "svg-file", logo: "/logos/hbomax.svg"    },
  { id: "appletv",   name: "Apple TV+",    sub: "Apple Originals",  bg: "#000000", logoKind: "svg-file", logo: "/logos/appletv.svg"   },
  { id: "hulu",      name: "Hulu",         sub: "Live TV + VOD",    bg: "#1CE783", logoKind: "svg-file", logo: "/logos/hulu.svg"      },
  { id: "paramount", name: "Paramount+",   sub: "CBS & Paramount",  bg: "#0064FF", logoKind: "img",      logo: "/logos/paramount.png" },
  { id: "peacock",   name: "Peacock",      sub: "NBC Universal",    bg: "#000000", logoKind: "inline",   InlineLogo: PeacockLogo     },
  { id: "dazn",      name: "DAZN",         sub: "Live Sport",       bg: "#111111", logoKind: "svg-file", logo: "/logos/dazn.svg"      },
  { id: "espn",      name: "ESPN+",        sub: "Sport Live",       bg: "#AA0000", logoKind: "img",      logo: "/logos/espn.png"      },
  { id: "viaplay",   name: "Viaplay",      sub: "Nordic Streaming", bg: "#3700B3", logoKind: "svg-file", logo: "/logos/viaplay.svg"   },
];

const DE_PLATFORMS: Platform[] = [
  { id: "rtlplus",   name: "RTL+",         sub: "RTL Deutschland",  bg: "#FF0050", logoKind: "img",      logo: "/logos/rtlplus.png"   },
  { id: "skyde",     name: "Sky",          sub: "Sky Deutschland",  bg: "#101010", logoKind: "svg-file", logo: "/logos/skyde.svg"     },
  { id: "daznde",    name: "DAZN",         sub: "Sport Streaming",  bg: "#141414", logoKind: "img",      logo: "/logos/daznde.png"    },
  { id: "wow",       name: "WOW",          sub: "Sky Streaming",    bg: "#DA1E4B", logoKind: "inline",   InlineLogo: WOWLogo          },
  { id: "joyn",      name: "Joyn",         sub: "Gratis Streaming", bg: "#00DCA5", logoKind: "inline",   InlineLogo: JoynLogo         },
  { id: "magentatv", name: "MagentaTV",    sub: "Telekom",          bg: "#E20074", logoKind: "inline",   InlineLogo: MagentaLogo      },
  { id: "ardmed",    name: "ARD Mediathek",sub: "Öffentl.-rechtl.", bg: "#003CA6", logoKind: "img",      logo: "/logos/ard.png"       },
  { id: "zdfmed",    name: "ZDF Mediathek",sub: "Öffentl.-rechtl.", bg: "#161616", logoKind: "img",      logo: "/logos/zdf.png"       },
  { id: "disneyDE",  name: "Disney+",      sub: "Disney DE",        bg: "#113CCF", logoKind: "img",      logo: "/logos/disneyplus.png"},
  { id: "videoland", name: "Videoland",    sub: "RTL Nederland",    bg: "#FF0066", logoKind: "img",      logo: "/logos/videoland.png" },
  { id: "viaplayde", name: "Viaplay",      sub: "Nordic Streaming", bg: "#3700B3", logoKind: "svg-file", logo: "/logos/viaplay.svg"   },
];

// ── League Card ───────────────────────────────────────────────────────────────
function LeagueCard({ l }: { l: League }) {
  return (
    <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white hover:bg-neutral-50 border border-black/8 rounded-2xl p-3 transition-colors shadow-sm" title={l.name}>
      <img
        src={l.logo}
        alt={l.name}
        className="w-full h-full object-contain drop-shadow-sm"
        onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
      />
    </div>
  );
}

// ── Platform Card ─────────────────────────────────────────────────────────────
function PlatformCard({ p }: { p: Platform }) {
  return (
    <div
      className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden p-2.5 shadow-sm"
      style={{ backgroundColor: p.bg }}
      title={p.name}
    >
      {p.logoKind === "inline" && p.InlineLogo ? (
        <p.InlineLogo />
      ) : p.logoKind === "svg-file" ? (
        <img src={p.logo} alt={p.name} className="w-full h-full object-contain" style={{ filter: "brightness(0) invert(1)" }} />
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
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LiveSports({ onPricingClick }: LiveSportsProps) {
  const leaguesTripled = [...LEAGUES, ...LEAGUES, ...LEAGUES];
  const tripled1       = [...INTL_PLATFORMS, ...INTL_PLATFORMS, ...INTL_PLATFORMS];
  const tripled2       = [...DE_PLATFORMS,   ...DE_PLATFORMS,   ...DE_PLATFORMS];

  return (
    <>
      {/* ── SECTION 1 — Live Sport ───────────────────────────────────────────── */}
      <section id="live-sports-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
        <div
          className="rounded-2xl overflow-hidden relative text-white py-5"
          style={{ background: "linear-gradient(145deg, #0a0f1e 0%, #0d1a2e 55%, #091525 100%)" }}
        >
          {/* League scroll row */}
          <div className="overflow-hidden -mx-4 md:-mx-6 select-none pointer-events-none">
            <div className="animate-scroll flex gap-3 px-4">
              {leaguesTripled.map((l, i) => (
                <div key={`${l.id}-${i}`} className="pointer-events-auto">
                  <LeagueCard l={l} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Streaming Platforms ─────────────────────────────────── */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
        <div className="bg-[#080908] text-white rounded-2xl py-8 px-4 md:px-6 relative overflow-hidden ring-1 ring-white/[8]">

          <div className="absolute top-0 right-0 w-72 h-72 bg-[#014E45]/[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-0 w-56 h-56 bg-[#014E45]/[0.04] rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 mb-5 px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Alle Plattformen.{" "}
              <span className="serif-display italic font-light text-white/85">Ein Abo.</span>
            </h2>
            <p className="serif-display italic font-light text-xl text-white/75 mt-1">
              Netflix · Prime · Disney+ · HBO · Sky · RTL+ · Viaplay · Videoland — alles über uns.
            </p>
          </div>

          {/* Row 1 */}
          <div className="overflow-hidden -mx-4 md:-mx-6 mb-3 select-none pointer-events-none">
            <div className="animate-scroll flex gap-3 px-4">
              {tripled1.map((p, i) => <PlatformCard key={`r1-${p.id}-${i}`} p={p} />)}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden -mx-4 md:-mx-6 mb-8 select-none pointer-events-none">
            <div className="animate-scroll-reverse flex gap-3 px-4">
              {tripled2.map((p, i) => <PlatformCard key={`r2-${p.id}-${i}`} p={p} />)}
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 flex justify-end pt-6 border-t border-white/[8]">
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
    </>
  );
}
