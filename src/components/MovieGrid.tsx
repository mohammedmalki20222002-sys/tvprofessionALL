import { useState } from "react";
import { INITIAL_MOVIES, MovieItem } from "../types";
import { Play, Star, ArrowRight, Sparkles, Film, Tv, Trophy, BookOpen } from "lucide-react";

interface MovieGridProps {
  onPricingClick: () => void;
}

const CATEGORIES = [
  { value: "all",           label: "Alle",    icon: Sparkles },
  { value: "movies",        label: "Filme",   icon: Film     },
  { value: "shows",         label: "Serien",  icon: Tv       },
  { value: "sports",        label: "Sport",   icon: Trophy   },
  { value: "documentaries", label: "Dokus",   icon: BookOpen },
];

export default function MovieGrid({ onPricingClick }: MovieGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [featured,       setFeatured]       = useState(INITIAL_MOVIES[0].id);

  const usedCategories = new Set(INITIAL_MOVIES.map(m => m.category));
  const visibleCategories = CATEGORIES.filter(
    cat => cat.value === "all" || usedCategories.has(cat.value as MovieItem["category"])
  );

  const filtered = INITIAL_MOVIES.filter(
    m => activeCategory === "all" || m.category === activeCategory
  );

  const featuredMovie = filtered.find(m => m.id === featured) ?? filtered[0];
  const rest          = featuredMovie ? filtered.filter(m => m.id !== featuredMovie.id) : filtered;

  return (
    <section id="movies-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div
        className="rounded-2xl overflow-hidden relative text-white"
        style={{ background: "linear-gradient(145deg, #014E45 0%, #013d37 60%, #012e2a 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-4 md:p-6">

          {/* ── Header ──────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-[9px] font-black font-mono uppercase tracking-widest text-white/50 border border-white/15 bg-white/5 px-2.5 py-0.5 rounded-full">
                200K+ VOD
              </span>
              <div>
                <h2 className="text-base md:text-lg font-extrabold tracking-tight text-white leading-snug">
                  4K-Qualität,{" "}
                  <span className="font-light italic opacity-70">auf all deinen Geräten.</span>
                </h2>
                <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest mt-0.5">
                  Das beste IPTV in Deutschland
                </p>
              </div>
            </div>
            <button onClick={onPricingClick}
              className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-white/50 hover:text-white transition-colors whitespace-nowrap">
              Alles freischalten <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* ── Filter ──────────────────────────────────────────────────── */}
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none mb-5">
            {visibleCategories.map(cat => {
              const Icon = cat.icon;
              return (
                <button key={cat.value}
                  onClick={() => { setActiveCategory(cat.value); setFeatured(INITIAL_MOVIES[0].id); }}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap shrink-0 transition-all ${
                    activeCategory === cat.value
                      ? "bg-white text-[#014E45] shadow-sm"
                      : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white border border-white/10"
                  }`}>
                  <Icon className="w-2.5 h-2.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-white/30 text-sm">Keine Ergebnisse.</p>
              <button onClick={() => setActiveCategory("all")}
                className="text-white/50 hover:text-white text-xs font-bold mt-2 underline">
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <>
              {/* ── Featured + side grid ─────────────────────────────────── */}
              {featuredMovie && (
                <div className="flex flex-col sm:flex-row gap-3 mb-4">

                  {/* Featured hero card — full width on mobile */}
                  <div className="relative w-full sm:flex-[2] min-w-0 rounded-xl overflow-hidden cursor-pointer group"
                    style={{ minHeight: "200px" }}
                    onClick={onPricingClick}>
                    <img src={featuredMovie.image} alt={featuredMovie.title} referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />

                    {/* Top badges */}
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {featuredMovie.badge && (
                        <span className="bg-white text-[#014E45] text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                          {featuredMovie.badge}
                        </span>
                      )}
                      <span className="bg-black/50 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 rounded-full font-mono">
                        {featuredMovie.quality}
                      </span>
                    </div>

                    {/* Play button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center
                                    border border-white/30 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                      <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[8px] font-mono text-white/50 uppercase tracking-widest">{featuredMovie.genre}</span>
                        <span className="text-white/20">·</span>
                        <span className="flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 fill-white text-white" />
                          <span className="text-[9px] font-bold text-white font-mono">{featuredMovie.rating}</span>
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">{featuredMovie.title}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-[9px] text-white/40 font-mono">{featuredMovie.year} · {featuredMovie.duration}</span>
                        <span className="flex items-center gap-1 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[9px] font-bold px-2.5 py-1 rounded-full transition-all">
                          <Play className="w-2.5 h-2.5 fill-white" /> Abspielen
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Side poster grid — desktop (sm+) only */}
                  <div className="hidden sm:grid grid-cols-3 gap-2 flex-1 min-w-0" style={{ gridTemplateRows: "repeat(2, 1fr)" }}>
                    {rest.slice(0, 6).map(m => (
                      <button key={m.id}
                        onClick={onPricingClick}
                        className="relative rounded-lg overflow-hidden group aspect-[3/2]">
                        <img src={m.image} alt={m.title} referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        {m.badge && (
                          <span className="absolute top-1 left-1 bg-white text-[#014E45] text-[6px] font-black px-1 py-0.5 rounded uppercase">
                            {m.badge}
                          </span>
                        )}
                        <div className="absolute bottom-1 left-1 right-1">
                          <p className="text-white text-[8px] font-bold leading-tight truncate drop-shadow">{m.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Horizontal scroll ─────────────────────────────────────── */}
              {/* Mobile: show all of rest; Desktop: show rest after first 6 (which are in side grid) */}
              {rest.length > 0 && (
                <div>
                  <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">Weitere Titel</p>
                  {/* Mobile — all rest */}
                  <div className="sm:hidden flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
                    {rest.map(m => (
                      <button key={m.id}
                        onClick={onPricingClick}
                        className="shrink-0 w-[80px] group relative rounded-xl overflow-hidden flex flex-col">
                        <div className="aspect-[2/3] relative overflow-hidden rounded-xl">
                          <img src={m.image} alt={m.title} referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute top-1 left-1">
                            <span className="bg-black/60 text-white text-[6px] font-mono px-1 py-0.5 rounded-full uppercase leading-none">
                              {m.quality === "4K UHD" ? "4K" : "HD"}
                            </span>
                          </div>
                          <div className="absolute bottom-1 right-1 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-1 py-0.5 rounded-full">
                            <Star className="w-1.5 h-1.5 fill-white text-white" />
                            <span className="text-[6px] font-bold text-white font-mono">{m.rating}</span>
                          </div>
                        </div>
                        <p className="mt-1 text-[8px] font-semibold text-white/70 text-left truncate leading-tight px-0.5">{m.title}</p>
                      </button>
                    ))}
                  </div>
                  {/* Desktop — rest after side grid (index 6+) */}
                  {rest.length > 6 && (
                    <div className="hidden sm:flex gap-2.5 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
                      {rest.slice(6).map(m => (
                        <button key={m.id}
                          onClick={onPricingClick}
                          className="shrink-0 w-[100px] group relative rounded-xl overflow-hidden flex flex-col">
                          <div className="aspect-[2/3] relative overflow-hidden rounded-xl">
                            <img src={m.image} alt={m.title} referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                <Play className="w-3.5 h-3.5 fill-white text-white translate-x-px" />
                              </div>
                            </div>
                            <div className="absolute top-1.5 left-1.5 flex flex-col gap-0.5">
                              {m.badge && (
                                <span className="bg-white text-[#014E45] text-[6.5px] font-black px-1.5 py-0.5 rounded-full uppercase leading-none">
                                  {m.badge}
                                </span>
                              )}
                              <span className="bg-black/60 text-white text-[6.5px] font-mono px-1.5 py-0.5 rounded-full uppercase leading-none">
                                {m.quality === "4K UHD" ? "4K" : "HD"}
                              </span>
                            </div>
                            <div className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                              <Star className="w-2 h-2 fill-white text-white" />
                              <span className="text-[7px] font-bold text-white font-mono">{m.rating}</span>
                            </div>
                          </div>
                          <p className="mt-1.5 text-[9px] font-semibold text-white/70 text-left truncate leading-tight px-0.5">{m.title}</p>
                          <p className="text-[7.5px] text-white/30 font-mono text-left px-0.5">{m.year}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ── Footer ──────────────────────────────────────────────────── */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <p className="text-[9px] font-mono text-white/25">
              Täglich aktualisiert · {INITIAL_MOVIES.length}+ Titel verfügbar
            </p>
            <button onClick={onPricingClick}
              className="flex items-center gap-1.5 bg-white text-[#014E45] text-[10px] font-black px-3.5 py-1.5 rounded-full transition-all hover:bg-white/90 shadow-sm">
              <span>Jetzt anmelden</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
