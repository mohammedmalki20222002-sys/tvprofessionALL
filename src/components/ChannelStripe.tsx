import { useState } from "react";
import { ALL_CHANNELS, ChannelItem } from "../types";
import { Search, CheckCircle, Radio } from "lucide-react";

export default function ChannelStripe() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{ message: string; matches: ChannelItem[] } | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("DE");

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (!q.trim()) { setSearchResult(null); return; }

    const matched = ALL_CHANNELS.filter(c =>
      c.name.toLowerCase().includes(q.toLowerCase()) ||
      c.category.toLowerCase().includes(q.toLowerCase()) ||
      c.country.toLowerCase().includes(q.toLowerCase())
    );

    setSearchResult({
      message: matched.length > 0
        ? `${matched.length} Sender gefunden`
        : `"${q}" ist in unserer Datenbank mit 59.000+ Feeds enthalten`,
      matches: matched.length > 0
        ? matched.slice(0, 4)
        : [{ id: "custom", name: `${q} HD Stream`, category: "Live", country: "DE/EU", logoColor: "from-[#014E45] to-[#00201c]", logoText: "OK" }]
    });
  };

  const marqueeChannels = ALL_CHANNELS.slice(0, 12);

  const countries = [
    { code: "DE", flag: "🇩🇪" },
    { code: "US", flag: "🇺🇸" },
    { code: "UK", flag: "🇬🇧" },
    { code: "FR", flag: "🇫🇷" },
    { code: "ES", flag: "🇪🇸" },
    { code: "IT", flag: "🇮🇹" },
    { code: "TR", flag: "🇹🇷" },
    { code: "AR", flag: "🇦🇪" },
  ];

  const visibleChannels = ALL_CHANNELS.filter(ch => ch.country === selectedCountry).slice(0, 12);

  return (
    <section id="channels-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="bg-[#014E45] text-white rounded-2xl py-5 px-4 md:px-6 relative overflow-hidden shadow-lg">

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/3 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded-full border border-white/10">
              <Radio className="w-2.5 h-2.5 text-white/60 animate-pulse" />
              <span className="text-[9px] font-black font-mono uppercase tracking-widest text-white/70">59K+ Sender</span>
            </div>
            <h2 className="text-base font-extrabold tracking-tight text-white">Sender-Katalog</h2>
          </div>
          <span className="hidden sm:block text-[9px] font-mono text-white/40 border border-white/10 bg-black/10 px-2.5 py-0.5 rounded-full">
            {ALL_CHANNELS.length} gelistet
          </span>
        </div>

        {/* Marquee — single slim row */}
        <div className="relative w-full overflow-hidden mb-4 py-1.5 bg-black/15 rounded-xl border border-white/5 pointer-events-none select-none">
          <div className="animate-scroll gap-2.5">
            {[...marqueeChannels, ...marqueeChannels, ...marqueeChannels].map((ch, idx) => (
              <div key={`m-${ch.id}-${idx}`} className="flex items-center gap-1.5 bg-white/5 border border-white/[8] px-2.5 py-1 rounded-full min-w-max shrink-0">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${ch.logoColor} flex items-center justify-center text-[6px] font-black text-white shrink-0`}>
                  {ch.logoText}
                </div>
                <span className="text-[9px] font-bold text-white/80 whitespace-nowrap">{ch.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Country tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 mb-3 scrollbar-none relative z-10">
          {countries.map(c => (
            <button
              key={c.code}
              onClick={() => setSelectedCountry(c.code)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold shrink-0 transition-all border ${
                selectedCountry === c.code
                  ? "bg-white text-[#014E45] border-white shadow-sm"
                  : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.code}</span>
            </button>
          ))}
        </div>

        {/* Horizontal scrollable channel pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none -mx-1 px-1 relative z-10">
          {visibleChannels.map(ch => (
            <div
              key={ch.id}
              className="shrink-0 flex items-center gap-2 bg-black/20 hover:bg-black/30 border border-white/5 hover:border-white/15 rounded-xl px-3 py-2 transition-all cursor-default min-w-[130px]"
            >
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${ch.logoColor} flex items-center justify-center text-[7px] font-black text-white shrink-0`}>
                {ch.logoText}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-white truncate leading-tight">{ch.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1 h-1 bg-white/40 rounded-full animate-pulse" />
                  <span className="text-[7px] font-mono text-white/30 uppercase">{ch.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="bg-black/20 rounded-xl px-3 py-2.5 border border-white/10 relative z-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input
              type="text"
              placeholder="Sender suchen… Sky Sport, ZDF, HBO…"
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-full py-2 pl-9 pr-4 text-[11px] text-white placeholder-white/25 focus:outline-none focus:border-white/[35] transition-all"
            />
          </div>

          {searchResult ? (
            <div className="mt-2 animate-in fade-in duration-200">
              <p className="text-[9px] font-bold text-white/60 mb-1.5 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-white/50 shrink-0" />
                {searchResult.message}
              </p>
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-0.5">
                {searchResult.matches.map((ch, i) => (
                  <div key={i} className="shrink-0 flex items-center gap-1.5 py-1 px-2 bg-white/5 rounded-lg border border-white/[8]">
                    <span className="text-[9px] font-semibold text-white whitespace-nowrap">{ch.name}</span>
                    <span className="text-[8px] text-white/30 bg-black/20 px-1 py-0.5 rounded font-mono">4K</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {["Sky Sport", "ZDF", "RTL", "HBO", "DAZN", "beIN"].map(s => (
                <button
                  key={s}
                  onClick={() => handleSearch(s)}
                  className="bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/70 text-[9px] font-medium py-0.5 px-2 rounded-full border border-white/[8] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
