import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface LiveSportsProps {
  onPricingClick: () => void;
}

type CrestShape = "shield" | "round" | "hex";

interface TeamDef {
  name: string;
  abbr: string;
  logoUrl: string;
  primary: string;
  secondary: string;
  accent: string;
  textColor: string;
  shape: CrestShape;
}

// api-sports.io public media CDN for football logos
const T = (name: string, abbr: string, id: number, p: string, s: string, a: string, t: string): TeamDef =>
  ({ name, abbr, logoUrl: `https://media.api-sports.io/football/teams/${id}.png`, primary: p, secondary: s, accent: a, textColor: t, shape: "shield" });

const TEAMS: Record<string, TeamDef> = {
  // ── Bundesliga ──────────────────────────────────────────────────────────────
  FCB:  T("FC Bayern",         "FCB", 157, "#DC052D", "#0066B2", "#fff",    "#fff"),
  BVB:  T("Dortmund",          "BVB", 165, "#FDE100", "#222",    "#222",    "#111"),
  B04:  T("Leverkusen",        "B04", 168, "#CC0000", "#000",    "#fff",    "#fff"),
  RBL:  T("RB Leipzig",        "RBL", 173, "#CC0000", "#0032A0", "#fff",    "#fff"),
  SGE:  T("Frankfurt",         "SGE", 169, "#E1000F", "#000",    "#fff",    "#fff"),
  VFB:  T("VfB Stuttgart",     "VFB", 172, "#E32219", "#fff",    "#fff",    "#fff"),
  SCF:  T("SC Freiburg",       "SCF", 160, "#CC0000", "#000",    "#fff",    "#fff"),
  WOB:  T("Wolfsburg",         "WOB", 161, "#65B32E", "#fff",    "#fff",    "#fff"),
  BMG:  T("M'gladbach",        "BMG", 163, "#000",    "#fff",    "#fff",    "#fff"),
  FCU:  T("Union Berlin",      "FCU", 176, "#EB1923", "#B2982B", "#fff",    "#fff"),
  SVW:  T("Werder Bremen",     "SVW", 162, "#1D7042", "#fff",    "#fff",    "#fff"),
  M05:  T("Mainz 05",          "M05", 164, "#CC0000", "#000",    "#fff",    "#fff"),
  TSG:  T("Hoffenheim",        "TSG", 167, "#1761A0", "#fff",    "#fff",    "#fff"),
  KOE:  T("1. FC Köln",        "KOE", 166, "#E3000F", "#fff",    "#fff",    "#fff"),
  // ── 2. Bundesliga ──────────────────────────────────────────────────────────
  HSV:  T("Hamburger SV",      "HSV", 180, "#0033A0", "#fff",    "#fff",    "#fff"),
  S04:  T("Schalke 04",        "S04", 158, "#004D9D", "#FFFFFF", "#fff",    "#fff"),
  // ── National ──────────────────────────────────────────────────────────────
  DFB:  T("Deutschland",       "DFB",  25, "#000",    "#CC0000", "#FFCE00", "#FFCE00"),
  FRA:  T("Frankreich",        "FRA",   2, "#002395", "#ED2939", "#fff",    "#fff"),
  ENG:  T("England",           "ENG",   9, "#CF142B", "#fff",    "#CF142B", "#fff"),
  // ── Champions League ───────────────────────────────────────────────────────
  RM:   T("Real Madrid",       "RM",  541, "#F5F5F5", "#1A1A70", "#C8A400", "#1A1A70"),
  PSG:  T("PSG",               "PSG",  85, "#001A5E", "#D00027", "#fff",    "#fff"),
  MCI:  T("Man City",          "MCI",  50, "#6CABDD", "#1C2C5B", "#fff",    "#fff"),
  // ── Non-football ───────────────────────────────────────────────────────────
  GP:   { name: "Nürburgring",    abbr: "F1",  logoUrl: "", primary: "#E8002D", secondary: "#15151E", accent: "#00D2BE", textColor: "#fff",    shape: "hex" },
  FP:   { name: "Qualifying",     abbr: "Q3",  logoUrl: "", primary: "#15151E", secondary: "#444",    accent: "#E8002D", textColor: "#ddd",    shape: "hex" },
  RFI:  { name: "Rhein Fire",     abbr: "RFI", logoUrl: "", primary: "#C8102E", secondary: "#B8860B", accent: "#111",    textColor: "#fff",    shape: "shield" },
  VIK:  { name: "Vienna Vikings", abbr: "VIK", logoUrl: "", primary: "#003882", secondary: "#FDB927", accent: "#003882", textColor: "#FDB927", shape: "shield" },
  ALB:  { name: "ALBA Berlin",    abbr: "ALB", logoUrl: "", primary: "#004B98", secondary: "#00A9E0", accent: "#fff",    textColor: "#fff",    shape: "round" },
  FCB2: { name: "Bayern Bball",   abbr: "FCB", logoUrl: "", primary: "#DC052D", secondary: "#0066B2", accent: "#fff",    textColor: "#fff",    shape: "round" },
  AZ:   { name: "A. Zverev",      abbr: "AZ",  logoUrl: "", primary: "#000",    secondary: "#CC0000", accent: "#FFCC00", textColor: "#FFCC00", shape: "round" },
  CA:   { name: "C. Alcaraz",     abbr: "CA",  logoUrl: "", primary: "#AA151B", secondary: "#F1BF00", accent: "#fff",    textColor: "#fff",    shape: "round" },
  UFC:  { name: "UFC Fight Night", abbr: "UFC", logoUrl: "", primary: "#D20A0A", secondary: "#111",   accent: "#fff",    textColor: "#fff",    shape: "hex" },
  MUC:  { name: "München Arena",  abbr: "MUC", logoUrl: "", primary: "#1a1a2e", secondary: "#555",    accent: "#fff",    textColor: "#aaa",    shape: "hex" },
};

// ─── SVG Crest ────────────────────────────────────────────────────────────────
function SvgCrest({ t }: { t: TeamDef }) {
  if (t.shape === "shield") {
    return (
      <svg viewBox="0 0 40 46" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2 L4 8 V22 C4 33 11 40.5 20 43.5 C29 40.5 36 33 36 22 V8 Z" fill={t.primary} />
        <path d="M20 2 L4 8 V22 C4 33 11 40.5 20 43.5 C29 40.5 36 33 36 22 V8 Z" fill="none" stroke={t.secondary} strokeWidth="2.2" />
        <path d="M20 5.5 L7 10.5 V22 C7 31 12.5 37.5 20 40 C27.5 37.5 33 31 33 22 V10.5 Z" fill="none" stroke={t.accent} strokeWidth="0.7" opacity="0.35" />
        <text x="20" y="28" textAnchor="middle" fontSize={t.abbr.length > 2 ? "8.5" : "11"} fontWeight="900"
          fill={t.textColor} fontFamily="Arial Black, Arial, sans-serif" letterSpacing="-0.5">{t.abbr}</text>
      </svg>
    );
  }
  if (t.shape === "hex") {
    return (
      <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <polygon points="14,3 26,3 37,14 37,26 26,37 14,37 3,26 3,14" fill={t.primary} stroke={t.secondary} strokeWidth="1.8" />
        <polygon points="14,3 26,3 37,14 37,26 26,37 14,37 3,26 3,14" fill="none" stroke={t.accent} strokeWidth="0.6" opacity="0.3" transform="scale(0.88) translate(2.5,2.5)" />
        <text x="20" y="25" textAnchor="middle" fontSize={t.abbr.length > 2 ? "8" : "10"} fontWeight="900"
          fill={t.textColor} fontFamily="Arial Black, Arial, sans-serif" letterSpacing="-0.5">{t.abbr}</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill={t.primary} />
      <circle cx="20" cy="20" r="18" fill="none" stroke={t.secondary} strokeWidth="2.2" />
      <circle cx="20" cy="20" r="13" fill="none" stroke={t.accent} strokeWidth="0.6" opacity="0.3" />
      <rect x="2" y="17" width="36" height="6" fill={t.secondary} opacity="0.12" />
      <text x="20" y="25" textAnchor="middle" fontSize={t.abbr.length > 2 ? "8.5" : "11"} fontWeight="900"
        fill={t.textColor} fontFamily="Arial Black, Arial, sans-serif" letterSpacing="-0.5">{t.abbr}</text>
    </svg>
  );
}

// SVG crest shown instantly; real logo fades in on top if it loads
function TeamBadge({ id }: { id: string }) {
  const team = TEAMS[id] ?? { name: id, abbr: id.slice(0,3), logoUrl: "", primary: "#014E45", secondary: "#fff", accent: "#fff", textColor: "#fff", shape: "shield" as CrestShape };
  const [loaded, setLoaded]   = useState(false);
  const [failed, setFailed]   = useState(false);
  const showReal = !!team.logoUrl && loaded && !failed;

  return (
    <div className="flex flex-col items-center gap-1 flex-1">
      <div className="w-9 h-9 shrink-0 relative">
        <div className={`absolute inset-0 transition-opacity duration-300 ${showReal ? "opacity-0" : "opacity-100"}`}>
          <SvgCrest t={team as TeamDef} />
        </div>
        {team.logoUrl && !failed && (
          <img src={team.logoUrl} alt={team.name}
            className={`absolute inset-0 w-full h-full object-contain p-0.5 transition-opacity duration-300 ${showReal ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
        )}
      </div>
      <span className="text-[7px] font-semibold text-white/45 truncate w-full text-center leading-tight px-0.5">{team.name}</span>
    </div>
  );
}

// ─── Match data ───────────────────────────────────────────────────────────────
type MatchStatus = "LIVE" | "SOON" | "UPCOMING";
interface Match {
  id: string; sport: string; league: string; leagueShort: string;
  homeI: string; awayI: string; score: string; time: string;
  status: MatchStatus; quality: string;
}

const ALL_MATCHES: Match[] = [
  // ── Bundesliga ─────────────────────────────────────────────────────────────
  { id:"b1",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"FCB", awayI:"BVB",  score:"3–2",  time:"74'",    status:"LIVE",     quality:"4K"  },
  { id:"b2",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"RBL", awayI:"B04",  score:"1–1",  time:"58'",    status:"LIVE",     quality:"4K"  },
  { id:"b3",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"SGE", awayI:"BMG",  score:"2–0",  time:"82'",    status:"LIVE",     quality:"FHD" },
  { id:"b4",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"VFB", awayI:"SCF",  score:"",     time:"18:30",  status:"UPCOMING", quality:"FHD" },
  { id:"b5",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"WOB", awayI:"M05",  score:"",     time:"20:30",  status:"UPCOMING", quality:"FHD" },
  { id:"b6",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"FCU", awayI:"SVW",  score:"",     time:"–30m",   status:"SOON",     quality:"FHD" },
  { id:"b7",  sport:"football", league:"Bundesliga",          leagueShort:"BL",   homeI:"TSG", awayI:"KOE",  score:"",     time:"Sa 15h", status:"UPCOMING", quality:"FHD" },
  // ── Champions League ───────────────────────────────────────────────────────
  { id:"c1",  sport:"football", league:"Champions League",    leagueShort:"UCL",  homeI:"B04", awayI:"RM",   score:"",     time:"–15m",   status:"SOON",     quality:"4K"  },
  { id:"c2",  sport:"football", league:"Champions League",    leagueShort:"UCL",  homeI:"BVB", awayI:"PSG",  score:"0–1",  time:"43'",    status:"LIVE",     quality:"4K"  },
  { id:"c3",  sport:"football", league:"Champions League",    leagueShort:"UCL",  homeI:"RBL", awayI:"MCI",  score:"",     time:"Sa 21h", status:"UPCOMING", quality:"4K"  },
  // ── DFB-Pokal ──────────────────────────────────────────────────────────────
  { id:"d1",  sport:"football", league:"DFB-Pokal",           leagueShort:"Pokal",homeI:"FCB", awayI:"HSV",  score:"",     time:"Di 20h", status:"UPCOMING", quality:"4K"  },
  { id:"d2",  sport:"football", league:"DFB-Pokal",           leagueShort:"Pokal",homeI:"BVB", awayI:"SGE",  score:"",     time:"Mi 18h", status:"UPCOMING", quality:"FHD" },
  // ── 2. Bundesliga ──────────────────────────────────────────────────────────
  { id:"z1",  sport:"football", league:"2. Bundesliga",       leagueShort:"2.BL", homeI:"HSV", awayI:"S04",  score:"2–1",  time:"67'",    status:"LIVE",     quality:"FHD" },
  // ── Nationalmannschaft ─────────────────────────────────────────────────────
  { id:"n1",  sport:"football", league:"Nations League",      leagueShort:"NL",   homeI:"DFB", awayI:"FRA",  score:"",     time:"So 20h", status:"UPCOMING", quality:"4K"  },
  { id:"n2",  sport:"football", league:"EM Quali",            leagueShort:"Quali",homeI:"DFB", awayI:"ENG",  score:"",     time:"Mi 20h", status:"UPCOMING", quality:"4K"  },
  // ── F1 ─────────────────────────────────────────────────────────────────────
  { id:"f1",  sport:"f1",       league:"Formel 1",            leagueShort:"F1",   homeI:"GP",  awayI:"FP",   score:"AKTIV",time:"LIVE",   status:"LIVE",     quality:"4K"  },
  // ── NFL / ELF ──────────────────────────────────────────────────────────────
  { id:"e1",  sport:"nfl",      league:"ELF Final",           leagueShort:"ELF",  homeI:"RFI", awayI:"VIK",  score:"",     time:"20:00",  status:"UPCOMING", quality:"4K"  },
  // ── Basketball ─────────────────────────────────────────────────────────────
  { id:"k1",  sport:"basketball",league:"BBL Play-offs",      leagueShort:"BBL",  homeI:"ALB", awayI:"FCB2", score:"",     time:"–45m",   status:"SOON",     quality:"FHD" },
  // ── Tennis ─────────────────────────────────────────────────────────────────
  { id:"t1",  sport:"tennis",   league:"ATP Finals",          leagueShort:"ATP",  homeI:"AZ",  awayI:"CA",   score:"6-4 3-6",time:"S.3", status:"LIVE",     quality:"4K"  },
  // ── MMA ────────────────────────────────────────────────────────────────────
  { id:"m1",  sport:"mma",      league:"WM-Kampf",            leagueShort:"MMA",  homeI:"UFC", awayI:"MUC",  score:"",     time:"Sa 22h", status:"UPCOMING", quality:"PPV" },
];

// ─── Main component ────────────────────────────────────────────────────────────
export default function LiveSports({ onPricingClick }: LiveSportsProps) {
  const [activeSport,  setActiveSport]  = useState("football");
  const [activeLeague, setActiveLeague] = useState("all");
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => setNow(new Date().toUTCString().slice(17, 22) + " UTC");
    tick();
    const t = setInterval(tick, 15000);
    return () => clearInterval(t);
  }, []);

  const sportTabs = [
    { value: "football",    label: "Fußball",     icon: "⚽" },
    { value: "f1",          label: "Formel 1",    icon: "🏎️" },
    { value: "nfl",         label: "NFL / ELF",   icon: "🏈" },
    { value: "basketball",  label: "Basketball",  icon: "🏀" },
    { value: "tennis",      label: "Tennis",      icon: "🎾" },
    { value: "mma",         label: "Boxen/MMA",   icon: "🥊" },
  ];

  const footballLeagues = [
    { value: "all",      label: "Alle"             },
    { value: "BL",       label: "Bundesliga"        },
    { value: "UCL",      label: "Champions League"  },
    { value: "Pokal",    label: "DFB-Pokal"         },
    { value: "2.BL",     label: "2. Bundesliga"     },
    { value: "NL",       label: "Nationalelf"       },
  ];

  const sportFiltered = ALL_MATCHES.filter(m => m.sport === activeSport);
  const displayed = activeSport !== "football" || activeLeague === "all"
    ? sportFiltered
    : sportFiltered.filter(m => m.leagueShort === activeLeague);

  return (
    <section id="live-sports-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="bg-[#080908] text-white rounded-2xl py-5 px-4 md:px-6 relative overflow-hidden ring-1 ring-white/[8]">

        <div className="absolute top-0 right-0 w-56 h-56 bg-[#014E45]/[8] rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-[#014E45]/30 border border-[#014E45]/50 px-2 py-0.5 rounded-full text-[9px] font-black font-mono uppercase tracking-widest text-white/70">
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
              Live
            </span>
            <h2 className="text-base font-extrabold tracking-tight text-white">VIP Live-Sport</h2>
            <span className="text-[9px] font-mono text-white/20 border border-white/[8] px-1.5 py-0.5 rounded-full">
              {ALL_MATCHES.filter(m => m.status === "LIVE").length} live
            </span>
          </div>
          <span className="text-[9px] font-mono text-neutral-600">{now}</span>
        </div>

        {/* Sport tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 mb-3 scrollbar-none">
          {sportTabs.map(s => (
            <button key={s.value}
              onClick={() => { setActiveSport(s.value); setActiveLeague("all"); }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap shrink-0 transition-all ${
                activeSport === s.value
                  ? "bg-[#014E45] text-white"
                  : "bg-white/5 text-white/[35] hover:text-white/60 border border-white/5"
              }`}>
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Football sub-league filter */}
        {activeSport === "football" && (
          <div className="flex gap-1 overflow-x-auto pb-1 mb-3 scrollbar-none">
            {footballLeagues.map(l => (
              <button key={l.value}
                onClick={() => setActiveLeague(l.value)}
                className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold whitespace-nowrap shrink-0 transition-all border ${
                  activeLeague === l.value
                    ? "bg-white/15 border-white/25 text-white"
                    : "border-white/5 text-white/25 hover:text-white/45"
                }`}>
                {l.label}
              </button>
            ))}
          </div>
        )}

        {/* Match cards — horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none -mx-1 px-1">
          {displayed.length === 0 && (
            <p className="text-white/20 text-xs py-4 px-2">Keine Spiele gerade.</p>
          )}
          {displayed.map(m => (
            <div key={m.id}
              className="shrink-0 w-[190px] bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/[12] rounded-xl p-3 flex flex-col gap-2.5 transition-all">

              {/* League + status */}
              <div className="flex items-center justify-between gap-1">
                <span className="text-[7.5px] font-mono text-white/25 uppercase tracking-wide truncate">{m.league}</span>
                {m.status === "LIVE" ? (
                  <span className="flex items-center gap-0.5 bg-[#014E45]/50 border border-[#014E45]/60 text-white text-[7px] font-black font-mono uppercase px-1.5 py-0.5 rounded-full animate-pulse shrink-0">
                    <span className="w-1 h-1 bg-white rounded-full" /> LIVE
                  </span>
                ) : m.status === "SOON" ? (
                  <span className="text-[7.5px] font-mono text-white/30 shrink-0">{m.time}</span>
                ) : (
                  <span className="text-[7.5px] font-mono text-white/20 shrink-0">{m.time}</span>
                )}
              </div>

              {/* Teams + score */}
              <div className="flex items-center justify-between gap-1">
                <TeamBadge id={m.homeI} />
                <div className="flex flex-col items-center shrink-0 px-1">
                  <span className="text-[13px] font-black text-white font-mono leading-none">{m.score || "VS"}</span>
                  {m.status === "LIVE" && (
                    <span className="text-[7px] text-white/25 font-mono mt-0.5">{m.time}</span>
                  )}
                </div>
                <TeamBadge id={m.awayI} />
              </div>

              {/* Quality + CTA */}
              <div className="flex items-center justify-between pt-1.5 border-t border-white/5">
                <span className="text-[7.5px] font-mono text-[#014E45] font-bold">{m.quality}</span>
                <button onClick={onPricingClick}
                  className="flex items-center gap-0.5 bg-[#014E45] hover:bg-[#013d37] text-white text-[9px] font-black px-2 py-1 rounded-lg transition-all">
                  <span>Abo</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
