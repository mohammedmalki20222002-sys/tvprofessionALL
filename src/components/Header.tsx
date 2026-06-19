import { useState } from "react";
import { Tv2, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onPricingClick: () => void;
  onReviewsClick: () => void;
  onFaqClick: () => void;
  onMoviesClick: () => void;
  onSportsClick: () => void;
}

export default function Header({
  onPricingClick,
  onReviewsClick,
  onFaqClick,
  onMoviesClick,
  onSportsClick
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full transition-all">
      <div id="navigation-bar" className="backdrop-blur-md rounded-full border border-white/15 shadow-[0_4px_30px_rgba(1,78,69,0.45)] px-4 py-2 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #012e28 0%, #014E45 45%, #013d37 100%)" }}>
        {/* Logo */}
        <div className="flex items-center gap-2 pl-3">
          <div className="flex items-end gap-0.5 h-6">
            <span className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></span>
            <span className="w-1 h-4 bg-white/70 rounded-full"></span>
            <span className="w-1 h-5 bg-white rounded-full"></span>
            <span className="w-1 h-6 bg-white rounded-full"></span>
            <span className="w-1 h-4 bg-white/60 rounded-full"></span>
          </div>
          <span className="text-[19px] font-bold tracking-tight text-white font-sans">
            TV<span className="serif-display italic font-normal text-white/80 pl-0.5"> Professional</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/10 py-1 px-1.5 rounded-full">
          <button
            onClick={onSportsClick}
            className="px-4 py-1.5 text-[13px] font-bold text-white bg-white/15 hover:bg-white/25 transition-colors rounded-full flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span>Live-Sport</span>
          </button>
          <button onClick={onMoviesClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">
            Filme & Serien (VOD)
          </button>
          <button onClick={onPricingClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">
            Tarife
          </button>
          <button onClick={onReviewsClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">
            Bewertungen
          </button>
          <button onClick={onFaqClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">
            FAQ
          </button>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={onPricingClick}
            className="hidden sm:flex items-center gap-1.5 bg-white hover:bg-white/90 text-[#014E45] px-4 py-2 rounded-full text-xs font-bold transition-all shadow-[0_2px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 active:shadow-none"
          >
            <span>IPTV kaufen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/15 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 border border-white/15 rounded-2xl p-5 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-200" style={{ background: "linear-gradient(160deg, #012e28 0%, #014E45 50%, #013d37 100%)" }}>
          <button
            onClick={() => { onSportsClick(); setMobileMenuOpen(false); }}
            className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>Live-VIP-Sport</span>
          </button>
          <button onClick={() => { onMoviesClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white/85">
            Filme & Serien (VOD)
          </button>
          <button onClick={() => { onPricingClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white/85">
            Abo-Pakete
          </button>
          <button onClick={() => { onReviewsClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white/85">
            Kundenstimmen & Reviews
          </button>
          <button onClick={() => { onFaqClick(); setMobileMenuOpen(false); }} className="text-left py-2 text-sm font-semibold text-white/85">
            FAQ
          </button>
          <button
            onClick={() => { onPricingClick(); setMobileMenuOpen(false); }}
            className="w-full text-center bg-white text-[#014E45] py-3 rounded-xl text-sm font-bold"
          >
            IPTV kaufen – Tarife anzeigen
          </button>
        </div>
      )}
    </header>
  );
}
