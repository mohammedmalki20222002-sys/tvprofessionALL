import { useState } from "react";
import { Tv, Menu, X, ArrowRight, ShieldCheck, Heart } from "lucide-react";

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
      <div id="navigation-bar" className="bg-[#FAF9F2]/80 backdrop-blur-md rounded-full border border-neutral-900/10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 pl-3">
          <div className="flex items-end gap-0.5 h-6">
            <span className="w-1 h-3 bg-neutral-900 rounded-full animate-pulse"></span>
            <span className="w-1 h-4 bg-neutral-900 rounded-full"></span>
            <span className="w-1 h-5 bg-[#014E45] rounded-full"></span>
            <span className="w-1 h-6 bg-[#014E45] rounded-full"></span>
            <span className="w-1 h-4 bg-[#014E45]/50 rounded-full"></span>
          </div>
          <span className="text-[19px] font-bold tracking-tight text-neutral-900 font-sans">
            IPTV<span className="serif-display italic font-normal text-neutral-600 pl-0.5"> Professional</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 bg-neutral-900/5 py-1 px-1.5 rounded-full">
          <button
            onClick={onSportsClick}
            className="px-4 py-1.5 text-[13px] font-bold text-[#014E45] hover:text-[#013d37] transition-colors rounded-full flex items-center gap-1 bg-[#014E45]/10"
          >
            <span className="w-1.5 h-1.5 bg-[#014E45] rounded-full animate-pulse"></span>
            <span>Live-Sport</span>
          </button>
          <button onClick={onMoviesClick} className="px-4 py-1.5 text-[13px] font-medium text-neutral-800 hover:text-neutral-950 transition-colors rounded-full">
            Filme & Serien (VOD)
          </button>
          <button onClick={onPricingClick} className="px-4 py-1.5 text-[13px] font-medium text-neutral-800 hover:text-neutral-950 transition-colors rounded-full">
            Tarife
          </button>
          <button onClick={onReviewsClick} className="px-4 py-1.5 text-[13px] font-medium text-neutral-800 hover:text-neutral-950 transition-colors rounded-full">
            Bewertungen
          </button>
          <button onClick={onFaqClick} className="px-4 py-1.5 text-[13px] font-medium text-neutral-800 hover:text-neutral-950 transition-colors rounded-full">
            FAQ
          </button>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={onPricingClick}
            className="hidden sm:flex items-center gap-1.5 bg-[#014E45] hover:bg-[#013d37] text-white px-4 py-2 rounded-full text-xs font-bold border border-[#014E45] transition-all shadow-[0_2px_0_#00201c] active:translate-y-0.5 active:shadow-none"
          >
            <span>Jetzt abonnieren</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-800 hover:bg-neutral-900/5 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-[#FDFDF7] border border-neutral-900/10 rounded-2xl p-5 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <button
            onClick={() => { onSportsClick(); setMobileMenuOpen(false); }}
            className="text-left py-2 border-b border-neutral-900/5 text-sm font-semibold text-[#014E45] flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#014E45] rounded-full animate-pulse"></span>
            <span>Live-VIP-Sport</span>
          </button>
          <button onClick={() => { onMoviesClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-neutral-900/5 text-sm font-semibold text-neutral-800">
            Filme & Serien (VOD)
          </button>
          <button onClick={() => { onPricingClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-neutral-900/5 text-sm font-semibold text-neutral-800">
            Abo-Pakete
          </button>
          <button onClick={() => { onReviewsClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-neutral-900/5 text-sm font-semibold text-neutral-800">
            Kundenstimmen & Reviews
          </button>
          <button onClick={() => { onFaqClick(); setMobileMenuOpen(false); }} className="text-left py-2 text-sm font-semibold text-neutral-800">
            FAQ
          </button>
          <button
            onClick={() => { onPricingClick(); setMobileMenuOpen(false); }}
            className="w-full text-center bg-[#014E45] text-white py-3 rounded-xl text-sm font-bold border border-[#014E45]"
          >
            Jetzt abonnieren — Tarife anzeigen
          </button>
        </div>
      )}
    </header>
  );
}
