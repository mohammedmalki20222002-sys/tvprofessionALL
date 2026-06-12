import { REVIEWS } from "../types";
import { Star, MessageSquareCode, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-10">
      <div className="bg-[#111211] text-[#FDFDF7] rounded-[2.5rem] py-16 px-6 md:px-12 relative overflow-hidden text-center">

        <div className="absolute top-12 left-10 opacity-60 hidden lg:block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#014E45" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-16 opacity-30 hidden lg:block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#014E45" />
          </svg>
        </div>

        {/* Headline */}
        <div className="max-w-xl mx-auto mb-14 text-center">
          <span className="serif-display italic font-light text-2xl text-white/85 mb-3 block">
            Kundenmeinungen
          </span>
          <h2 className="text-[1.85rem] sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
            Liebesbriefe
            <br />
            <span className="serif-display italic font-light text-white/90 pr-1.5">an IPTV Professional.</span>
          </h2>
          <p className="serif-display italic font-light text-base md:text-xl text-neutral-100 mt-4">
            Erfahren Sie, wie über 45.000 aktive Abonnenten ihren alten Kabelanschluss durch unsere High-Fidelity- und High-Speed-Streaming-Infrastruktur ersetzt haben.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FCFBF4] text-neutral-900 rounded-[1.8rem] p-6 flex flex-col justify-between border border-neutral-900/10 hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-0.5 mb-4 text-[#014E45]">
                  {[...Array(review.ratingValue)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#014E45] text-[#014E45]" />
                  ))}
                </div>
                <p className="text-base font-bold text-neutral-900 leading-snug mb-3">"{review.highlight}"</p>
                <p className="serif-display italic font-light text-base md:text-lg text-neutral-600/95 leading-relaxed">{review.text}</p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-900/5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-neutral-950/10"
                />
                <div>
                  <p className="text-sm font-bold text-neutral-900 leading-none">{review.name}</p>
                  <p className="serif-display italic font-light text-sm text-neutral-400 mt-1 leading-none">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-2 bg-neutral-900 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl sm:rounded-full border border-neutral-800 max-w-[280px] sm:max-w-none">
          <ShieldCheck className="w-5 h-5 text-white shrink-0" />
          <span className="serif-display italic font-light text-base sm:text-xl text-[#FCFBF4]">Durchschnittliche Abo-Verlängerungsquote von 94.2%</span>
        </div>

      </div>
    </section>
  );
}
