import { useState } from "react";
import { PricingPlan } from "./types";
import Header from "./components/Header";
import LiveSports from "./components/LiveSports";
import MovieGrid from "./components/MovieGrid";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import DeviceCompatibility from "./components/DeviceCompatibility";
import ChannelStripe from "./components/ChannelStripe";
import PaymentsAndFaq from "./components/PaymentsAndFaq";
import Hero from "./components/Hero";
import VideoShowcase from "./components/VideoShowcase";
import CheckoutModal from "./components/CheckoutModal";
import { Tv, ShieldCheck, Heart, Sparkles, CheckCircle, Smartphone, Flame } from "lucide-react";

export default function App() {
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PricingPlan | null>(null);

  // Smooth scrolling scroll functions
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanForCheckout(plan);
  };

  return (
    <div className="min-h-screen bg-[#FDFDF7] text-neutral-900 flex flex-col font-sans selection:bg-[#014E45] selection:text-white overflow-x-hidden w-full">
      
      {/* Top sticky styled Header */}
      <Header
        onSportsClick={() => scrollToSection("live-sports-section")}
        onMoviesClick={() => scrollToSection("movies-section")}
        onPricingClick={() => scrollToSection("pricing-section")}
        onReviewsClick={() => scrollToSection("reviews-section")}
        onFaqClick={() => scrollToSection("faq-section")}
      />

      <main className="flex-grow">
        
        {/* SECTION 1: HERO section (Typography displays + devices selector simulators) */}
        <Hero onPricingClick={() => scrollToSection("pricing-section")} />

        {/* VIDEO SHOWCASE: Autoplay service preview video */}
        <VideoShowcase />

        {/* SECTION 2.5: LIVE SPORTS SECTION */}
        <LiveSports onPricingClick={() => scrollToSection("pricing-section")} />

        {/* SECTION 3: VOD MOVIE GRID (cinematic filters, blockbusters collection) */}
        <MovieGrid onPricingClick={() => scrollToSection("pricing-section")} />

        {/* SECTION 4: INFORMATIVE SUBSCRIPTION PACKAGES (3, 6, 12 Months selection layout) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* SECTION 4.5: DIGITAL CHANNELS STRIPE — placed after pricing */}
        <ChannelStripe />

        {/* SECTION 5: CUSTOMER LOVE LETTERS REVIEWS (Black rounded section with user avatars and star reviews) */}
        <Testimonials />
        <DeviceCompatibility onPricingClick={() => scrollToSection("pricing-section")} />

        {/* SECTION 6: PAYMENT METHODS GRID & FAQ GUIDES ACCORDION */}
        <PaymentsAndFaq />

      </main>

      {/* FOOTER: Matches Wispr minimalist dark styled footer */}
      <footer className="mt-16 bg-[#111211] text-[#FDFDF7] py-16 px-6 md:px-12 border-t border-neutral-850">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & copyright column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="flex items-end gap-0.5 h-6">
                <span className="w-1.5 h-2.5 bg-white rounded-full"></span>
                <span className="w-1.5 h-4 bg-white rounded-full"></span>
                <span className="w-1.5 h-5 bg-white rounded-full"></span>
                <span className="w-1.5 h-4 bg-white rounded-full"></span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                IPTV<span className="serif-display italic font-normal text-neutral-400 pl-0.5"> Professional</span>
              </span>
            </div>

            <p className="serif-display italic font-light text-lg text-neutral-200 leading-relaxed max-w-sm">
              Der High-Fidelity-Store für digitales Live-Fernsehen. Keine Verträge, absolut minmierte Latenz und erstklassige Server-Verbindungen.
            </p>

            <p className="serif-display italic font-light text-base text-neutral-500 pt-3">
              Copyright © 2026 IPTV Professional. Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 text-left">
            <h5 className="serif-display italic font-light text-2xl text-neutral-100 mb-4">
              Abonnements
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection("pricing-section")} className="text-neutral-300 hover:text-white transition-colors">
                  Quartals-Classic (3 Monate)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing-section")} className="text-neutral-300 hover:text-white transition-colors">
                  Standard-Wert (6 Monate)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing-section")} className="text-white hover:underline font-semibold transition-colors">
                  Super-Sparjahr (12 Monate – 57 % sparen)
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 text-left">
            <h5 className="serif-display italic font-light text-2xl text-neutral-100 mb-4">
              Inhalte & Support
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection("movies-section")} className="text-neutral-300 hover:text-white transition-colors">
                  Filme & Serien VOD-Bibliothek
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("channels-section")} className="text-neutral-300 hover:text-white transition-colors">
                  Live-TV-Senderübersicht
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq-section")} className="text-neutral-300 hover:text-white transition-colors">
                  Geräte-Einrichtung & Hilfe-FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Setup notice badge column */}
          <div className="md:col-span-2 text-left">
            <h5 className="serif-display italic font-light text-2xl text-neutral-100 mb-4">
              Server-Status
            </h5>
            <div className="inline-flex items-center gap-1.5 bg-[#014E45]/40 border border-[#014E45] px-3.5 py-1.5 rounded-full text-[10px] font-mono text-[#FDFDF7] font-bold uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span>Alle Relays Live</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto w-full mt-10 pt-8 border-t border-neutral-800/[65] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
          <p>
            IPTV Professional wird vollkommen unabhängig betrieben. Alle genannten Herstellermarken, Produktnamen und Sender-Logos sind Eigentum der jeweiligen Inhaber. Vollständig SSL-verschlüsselte Bezahlvorgänge.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-neutral-300 cursor-pointer">Sicherheitszertifikat</span>
            <span className="hover:text-neutral-300 cursor-pointer">SLA-Vereinbarung</span>
          </div>
        </div>
      </footer>

      {/* Interactive Checkout Modal backdrop wizard slider */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          plan={selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
        />
      )}

    </div>
  );
}
