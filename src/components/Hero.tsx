import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onPricingClick: () => void;
}

export default function Hero({ onPricingClick }: HeroProps) {
  const devices = ["🖥️ Smart TV", "🔥 Fire Stick", "🍏 Apple TV", "🤖 Android", "💻 PC"];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full pt-6 pb-8">

      <div className="flex flex-col gap-4 max-w-2xl">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-1.5 bg-neutral-900/5 border border-neutral-200/60 rounded-full px-3 py-1 self-start">
          <Sparkles className="w-3 h-3 text-[#014E45]" />
          <span className="text-[11px] font-bold text-neutral-700">TrustScore 4.9</span>
          <span className="text-neutral-300 text-xs">|</span>
          <span className="text-[10px] font-bold text-[#014E45]">★★★★★ Verifiziert</span>
        </div>

        {/* Headline */}
        <div>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.05] tracking-[-0.03em] font-extrabold text-neutral-900">
            <span className="serif-display italic font-light text-neutral-700">4K-Qualität,</span>
            <br />
            auf all deinen Geräten.
          </h1>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-neutral-400 mt-2">
            Das beste IPTV in Deutschland
          </p>
          <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-md">
            Über <span className="font-semibold text-neutral-900">59.000 Live-Sender</span> und <span className="font-semibold text-neutral-900">200.000+ VOD</span> — sofort auf jedem Gerät, ohne Vertrag.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-5">
          {[
            { v: "59K",  l: "Sender" },
            { v: "200K", l: "VOD" },
            { v: "4K",   l: "Ultra HD" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p className="text-xl font-black leading-none text-neutral-900">{v}</p>
              <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 mt-0.5">{l}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onPricingClick}
            className="self-start flex items-center gap-2 bg-[#014E45] hover:bg-[#013d37] text-white font-extrabold text-sm px-7 py-3 rounded-full border-2 border-[#014E45] transition-all shadow-[0_4px_0_#00201c] active:translate-y-0.5 active:shadow-none"
          >
            <span>Sofortigen Zugang sichern</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase">
            Kein Vertrag · Sofortiger Zugang
          </p>
        </div>

        {/* Device pills */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
          {devices.map(d => (
            <span key={d} className="shrink-0 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[10px] font-semibold rounded-full border border-neutral-900/[8] transition-colors whitespace-nowrap">
              {d}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
