import { useState } from "react";
import { PricingPlan, SUBSCRIPTION_PLANS } from "../types";
import { Check, ShieldCheck, Zap, Tv2, Users, Crown, MessageCircle, Monitor } from "lucide-react";

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

const GOLD   = "#D4A820";
const GOLD_L = "#FFE370";
const GOLD_D = "#8B6510";
const GOLD_T = "#FFF0A0";
const GREEN  = "#014E45";
const GREEN_D = "#013d37";

const WA_NUMBER = "447449708976";

function trackWaConversion() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag?.('event', 'conversion', { send_to: 'AW-18235035269/rSDACJDGwb4cEIWdkvdD' });
}

function buildWhatsAppUrl(plan: PricingPlan): string {
  const geraete = plan.devices === 1 ? "1 Gerat" : "2 Gerate";
  const preis   = plan.price.toFixed(2).replace(".", ",");
  const msg = `Hallo, ich mochte das TV Professional Paket bestellen: ${plan.durationMonths} Monate / ${geraete} / ${preis} EUR`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Pricing({ onSelectPlan: _unused }: PricingProps) {
  const [activeDevices, setActiveDevices] = useState<1 | 2>(1);

  const plans = SUBSCRIPTION_PLANS
    .filter(p => p.devices === activeDevices)
    .sort((a, b) => {
      if (a.durationMonths === 12) return -1;
      if (b.durationMonths === 12) return 1;
      return a.durationMonths - b.durationMonths;
    });

  return (
    <section
      id="pricing-section"
      className="relative py-10 md:py-20 px-4 md:px-8 w-full text-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, #080908 0%, #0d1a18 45%, #080908 100%)` }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-10"
          style={{ background: `radial-gradient(ellipse, ${GREEN} 0%, transparent 65%)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px opacity-20"
          style={{ background: `linear-gradient(to right, transparent, ${GREEN}, transparent)` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Stats bar ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-24 mb-10 md:mb-16">
          {[
            { value: "59K",  label: "CHANNELS"        },
            { value: "200K", label: "SERIES & FILMS"  },
            { value: "∞",    label: "PERMANENT UPDATE" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex flex-col items-center relative">
              {i < 2 && (
                <span className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 text-white/10 text-4xl font-thin">|</span>
              )}
              <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">{value}</span>
              <span className="serif-display italic font-light text-xl text-white/75 mt-1.5">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <div className="max-w-xl mx-auto mb-10 text-center">
          <span className="serif-display italic font-light text-2xl text-white/80 mb-3 block">
            Premium Abonnements
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-white">
            Wähle deinen
            <br />
            <span className="serif-display italic font-light pr-1.5"
              style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_L} 40%, ${GOLD_T} 65%, ${GOLD_L} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                display: "inline-block"
              }}>
              Premium-Plan.
            </span>
          </h2>
          <p className="serif-display italic font-light text-base md:text-xl text-white/75 mt-4 leading-relaxed">
            Keine automatische Verlängerung. Deine Laufzeit, deine Regeln — sicher, schnell und weltweit verfügbar.
          </p>
        </div>

        {/* ── Device toggle ─────────────────────────────────────────────── */}
        <div className="inline-flex items-center rounded-full p-1 mb-12 border border-white/10"
          style={{ background: "rgba(255,255,255,0.06)" }}>
          {([1, 2] as const).map(n => (
            <button key={n} onClick={() => setActiveDevices(n)}
              className={`flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                activeDevices === n
                  ? "bg-white text-[#014E45] shadow-md"
                  : "text-white/40 hover:text-white/70"
              }`}>
              {n === 1 ? <Tv2 className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
              {n} {n === 1 ? "Gerät" : "Geräte"}
            </button>
          ))}
        </div>

        {/* ── Plan grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl mx-auto items-stretch">
          {plans.map(plan => (
            <div key={plan.id} className="relative flex flex-col">


              {/* Card */}
              <div className="flex-1 flex flex-col rounded-2xl overflow-hidden"
                style={plan.popular ? {
                  background: `linear-gradient(160deg, #020806 0%, #010e0c 30%, #011a16 55%, #010e0c 80%, #020806 100%)`,
                  border: `1.5px solid ${GOLD}88`,
                  boxShadow: `0 0 80px rgba(1,78,69,0.5), 0 0 40px rgba(200,164,0,0.18), 0 16px 50px rgba(0,0,0,0.5)`,
                } : {
                  background: "#ffffff",
                  border: `1.5px solid rgba(1,78,69,0.20)`,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
                }}>

                {/* Top stripe */}
                <div className="h-1.5 w-full"
                  style={{
                    background: plan.popular
                      ? `linear-gradient(90deg, transparent, ${GOLD_L}, transparent)`
                      : `linear-gradient(90deg, transparent, ${GREEN}, transparent)`
                  }} />

                <div className="flex flex-col flex-1 p-6 text-left">

                  {/* Popular title */}
                  {plan.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Crown className="w-4 h-4" style={{ color: GOLD }} />
                      <span className="text-sm font-black uppercase tracking-[0.15em]"
                        style={{ color: GOLD_T }}>
                        Beliebtester
                      </span>
                    </div>
                  )}

                  {/* Months — big number */}
                  <div className="mb-5">
                    <div className="flex items-end gap-2 leading-none">
                      <span className="text-7xl font-black tracking-tighter leading-none"
                        style={ plan.popular
                          ? { background: `linear-gradient(135deg, ${GOLD_D} 0%, ${GOLD} 40%, ${GOLD_L} 100%)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }
                          : { color: GREEN }}>
                        {plan.durationMonths}
                      </span>
                      <span className="text-base font-black mb-3 uppercase tracking-widest"
                        style={{ color: plan.popular ? GOLD_T : "rgba(1,78,69,0.65)" }}>
                        {plan.durationMonths === 1 ? "Monat" : "Monate"}
                      </span>
                    </div>

                    {/* Devices badge */}
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={plan.popular ? {
                        background: `${GOLD}22`,
                        border: `1px solid ${GOLD}55`,
                      } : {
                        background: `rgba(1,78,69,0.08)`,
                        border: `1px solid rgba(1,78,69,0.25)`,
                      }}>
                      <Monitor className="w-3.5 h-3.5"
                        style={{ color: plan.popular ? GOLD : GREEN }} />
                      <span className="text-xs font-black uppercase tracking-wider"
                        style={{ color: plan.popular ? GOLD_T : GREEN }}>
                        {plan.devices} {plan.devices === 1 ? "Gerät" : "Geräte"}
                      </span>
                    </div>
                  </div>

                  {/* Savings badge */}
                  <span className="self-start text-[9px] font-black py-0.5 px-2.5 rounded-full uppercase tracking-wide mb-5"
                    style={plan.popular ? {
                      background: `${GOLD}33`,
                      color: GOLD_L,
                      border: `1px solid ${GOLD}66`,
                    } : {
                      background: "rgba(1,78,69,0.10)",
                      color: GREEN,
                      border: `1px solid rgba(1,78,69,0.25)`,
                    }}>
                    <span style={{ color: plan.popular ? GOLD_T : "inherit" }}>{plan.savings}</span>
                  </span>

                  {/* Price */}
                  <div className="pb-5 mb-5 border-b"
                    style={{ borderColor: plan.popular ? `${GOLD}33` : "rgba(1,78,69,0.15)" }}>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black tracking-tight leading-none"
                        style={{ color: plan.popular ? GOLD_T : "#111211" }}>
                        {plan.price.toFixed(2).replace(".", ",")} €
                      </span>
                      <span className="text-sm font-mono line-through pb-0.5"
                        style={{ color: plan.popular ? `${GOLD}55` : "rgba(0,0,0,0.30)" }}>
                        {plan.originalPrice.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                    <p className="serif-display italic font-light text-2xl mt-1.5"
                      style={{ color: plan.popular ? GOLD_T : GREEN }}>
                      ≈ {(plan.price / plan.durationMonths).toFixed(2).replace(".", ",")} € / Monat
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.slice(0, 6).map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center"
                          style={plan.popular ? {
                            background: `${GOLD}22`,
                            border: `1px solid ${GOLD}55`,
                          } : {
                            background: `rgba(1,78,69,0.10)`,
                            border: `1px solid rgba(1,78,69,0.30)`,
                          }}>
                          <Check className="w-3.5 h-3.5 stroke-[3]"
                            style={{ color: plan.popular ? GOLD : GREEN }} />
                        </span>
                        <span className="text-[15px] font-mono font-bold leading-snug"
                          style={{ color: plan.popular ? GOLD_T : "#0a0a0a" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={buildWhatsAppUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWaConversion}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider
                               flex items-center justify-center gap-2 transition-all duration-200 no-underline
                               hover:opacity-90 hover:scale-[1.02] active:scale-100"
                    style={plan.popular ? {
                      background: `linear-gradient(135deg, ${GOLD_D} 0%, ${GOLD} 45%, ${GOLD_L} 100%)`,
                      color: "#1a1200",
                      boxShadow: `0 4px 24px rgba(200,164,0,0.45)`,
                    } : {
                      background: GREEN,
                      color: "#fff",
                      boxShadow: `0 4px 20px rgba(1,78,69,0.35)`,
                    }}
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Jetzt kaufen</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Separator ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto mt-14 mb-10 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${GREEN}88, transparent)` }} />

        {/* ── Trust bar ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: <ShieldCheck className="w-5 h-5 shrink-0 text-white" />, title: "100 % Rückerstattung", desc: "Volle Rückerstattung innerhalb von 24 Std.", href: null },
            { icon: <Zap         className="w-5 h-5 shrink-0 text-white" />, title: "Sofortige Freischaltung", desc: "Zugangsdaten in wenigen Minuten via WhatsApp.", href: null },
            { icon: <MessageCircle className="w-5 h-5 shrink-0 text-white" />, title: "WhatsApp-Support", desc: "Direkter Support rund um die Uhr über WhatsApp.", href: `https://wa.me/${WA_NUMBER}?text=Hallo%2C%20ich%20brauche%20Support%20mit%20IPTV%20Professional.` },
          ].map(({ icon, title, desc, href }) => {
            const inner = (
              <>
                {icon}
                <div>
                  <p className="text-base font-bold text-white/80">{title}</p>
                  <p className="serif-display italic font-light text-base text-white/75 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </>
            );
            return href ? (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                onClick={trackWaConversion}
                className="flex items-start gap-3 p-4 rounded-xl text-left no-underline hover:opacity-80 transition-opacity"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {inner}
              </a>
            ) : (
              <div key={title}
                className="flex items-start gap-3 p-4 rounded-xl text-left"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {inner}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
