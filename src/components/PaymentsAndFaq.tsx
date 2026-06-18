import { useState } from "react";
import { FAQS } from "../types";
import { Plus, Minus, Lock } from "lucide-react";

const PaypalLogo = () => (
  <svg viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg" width="64" height="20">
    <path d="M9.5 2h7.2c3.6 0 5.5 1.8 5.1 5-.4 3.5-2.9 5.4-6.4 5.4H13l-1 6H8.2L9.5 2z" fill="#009cde"/>
    <path d="M4 2h7.2c3.6 0 5.5 1.8 5.1 5-.4 3.5-2.9 5.4-6.4 5.4H7.5l-1 6H2.7L4 2z" fill="#003087"/>
    <text x="26" y="17" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#003087">Pay</text>
    <text x="50" y="17" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#009cde">Pal</text>
  </svg>
);

const VisaLogo = () => (
  <svg viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg" width="52" height="18">
    <text x="0" y="16" fontFamily="Arial" fontWeight="900" fontSize="19" fill="#1A1F71" fontStyle="italic" letterSpacing="-0.5">VISA</text>
  </svg>
);

const MastercardLogo = () => (
  <svg viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg" width="44" height="28">
    <circle cx="17" cy="15" r="13" fill="#EB001B"/>
    <circle cx="33" cy="15" r="13" fill="#F79E1B"/>
    <path d="M25 5.4a13 13 0 0 1 0 19.2A13 13 0 0 1 25 5.4z" fill="#FF5F00"/>
  </svg>
);

const SepaLogo = () => (
  <svg viewBox="0 0 64 28" xmlns="http://www.w3.org/2000/svg" width="56" height="24">
    <rect width="64" height="28" rx="4" fill="#003399"/>
    {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
      const angle = (i * 30 - 90) * Math.PI / 180;
      const x = 14 + 9 * Math.cos(angle);
      const y = 14 + 9 * Math.sin(angle);
      return <text key={i} x={x} y={y + 1.5} textAnchor="middle" fontSize="5" fill="#FFD700" fontFamily="Arial">★</text>;
    })}
    <text x="38" y="18" fontFamily="Arial" fontWeight="bold" fontSize="11" fill="white" letterSpacing="1">SEPA</text>
  </svg>
);

const SofortLogo = () => (
  <svg viewBox="0 0 72 24" xmlns="http://www.w3.org/2000/svg" width="64" height="22">
    <rect width="72" height="24" rx="3" fill="#EF6C00"/>
    <text x="6" y="17" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="white" letterSpacing="0.3">SOFORT</text>
  </svg>
);

const GiropayLogo = () => (
  <svg viewBox="0 0 72 24" xmlns="http://www.w3.org/2000/svg" width="64" height="22">
    <rect width="34" height="24" rx="3" fill="#005DAA"/>
    <rect x="34" width="38" height="24" rx="0" fill="#00A650"/>
    <rect x="34" width="4" height="24" fill="#005DAA"/>
    <text x="4" y="17" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="white">giro</text>
    <text x="38" y="17" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="white">pay</text>
  </svg>
);

const KlarnaLogo = () => (
  <svg viewBox="0 0 64 24" xmlns="http://www.w3.org/2000/svg" width="56" height="22">
    <rect width="64" height="24" rx="3" fill="#FFB3C7"/>
    <text x="8" y="17" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="#17120F" letterSpacing="0.2">Klarna</text>
  </svg>
);

export default function PaymentsAndFaq() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("f1");

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  const paymentMethods = [
    { name: "PayPal",          logo: <PaypalLogo />,     desc: "Autorisierter Käuferschutz",        delay: "Direkt"   },
    { name: "Visa",            logo: <VisaLogo />,       desc: "SSL & 3D-Secure gesichert",          delay: "Direkt"   },
    { name: "Mastercard",      logo: <MastercardLogo />, desc: "SSL & 3D-Secure gesichert",          delay: "Direkt"   },
    { name: "SEPA-Lastschrift",logo: <SepaLogo />,       desc: "Lastschrifteinzug mit IBAN",         delay: "1-2 Tage" },
    { name: "Sofort",          logo: <SofortLogo />,     desc: "Zahlung direkt über deine Hausbank", delay: "Direkt"   },
    { name: "Klarna",          logo: <KlarnaLogo />,     desc: "Kauf auf Rechnung & Ratenzahlung",   delay: "Direkt"   },
  ];

  return (
    <section id="faq-section" className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

      {/* Payments */}
      <div className="lg:col-span-5 bg-[#FDFDF7] rounded-[2rem] p-5 sm:p-8 border border-neutral-900/10 text-left">
        <span className="serif-display italic font-light text-2xl text-[#014E45]/70 mb-3 block">
          Verifizierte Zahlungsmethoden
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-snug">
          Sichere verfügbare
          <br />
          <span className="serif-display italic font-light text-[#014E45] pr-1.5">Zahlungsverfahren.</span>
        </h2>
        <p className="serif-display italic font-light text-base md:text-lg text-neutral-500 mt-3 leading-relaxed">
          Wir verwenden modernste Verschlüsselungsverfahren auf Bankenniveau (SSL & AES-256), um alle Zahlungen abzuwickeln. Deine Bankdaten sind zu jeder Zeit optimal geschützt.
        </p>

        <div className="grid grid-cols-1 gap-3 mt-8">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900/5 hover:bg-neutral-900/[0.08] transition-colors border border-neutral-900/5">
              <div className="flex items-center gap-3">
                <span className="bg-white shadow-sm h-11 px-3 flex items-center justify-center rounded-xl border border-neutral-200 shrink-0">
                  {method.logo}
                </span>
                <div>
                  <p className="text-sm font-bold text-neutral-900">{method.name}</p>
                  <p className="serif-display italic font-light text-sm text-neutral-500">{method.desc}</p>
                </div>
              </div>
              <span className="serif-display italic font-light text-sm text-[#014E45] bg-[#014E45]/10 px-2.5 py-1 rounded-full shrink-0">
                {method.delay}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900/5 flex items-center gap-3 text-neutral-500">
          <Lock className="w-4 h-4 text-neutral-400 shrink-0" />
          <span className="serif-display italic font-light text-base">Jeder Bezahlvorgang ist durch PCI-DSS-Sicherheitszertifikate geschützt.</span>
        </div>
      </div>

      {/* FAQ */}
      <div className="lg:col-span-7 text-left">
        <div className="mb-8">
          <span className="serif-display italic font-light text-2xl text-[#014E45]/70 mb-3 block">
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-snug">
            Fragen & Antworten
            <br />
            <span className="serif-display italic font-light text-[#014E45] pr-1.5">sofort gelöst.</span>
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[1.2rem] border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#FCFBF4] border-neutral-900/40 shadow-sm"
                    : "bg-[#FDFDF7] border-neutral-900/10 hover:border-neutral-900/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-base md:text-xl text-neutral-800 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`p-1.5 rounded-full ${isOpen ? "bg-[#014E45]/10" : "bg-neutral-900/5"} transition-colors shrink-0`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-[#014E45]" /> : <Plus className="w-3.5 h-3.5 text-neutral-600" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="serif-display italic font-light px-5 md:px-6 pb-6 text-base md:text-lg text-neutral-600/90 leading-relaxed border-t border-neutral-900/5 pt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-[#014E45]/5 rounded-2xl border border-neutral-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-base md:text-lg font-bold text-neutral-900">Sie nutzen eine spezielle Hardware-Einrichtung?</p>
            <p className="serif-display italic font-light text-base text-neutral-500 mt-1">Unsere Support-Techniker helfen Ihnen gerne bei der Konfiguration Ihrer MAG-Box, Ihres Smart-TVs oder Ihrer Playlist.</p>
          </div>
          <a
            href="https://wa.me/447449708976?text=Hallo%2C%20ich%20brauche%20Hilfe%20bei%20der%20Einrichtung%20meines%20IPTV%20Professional%20Abonnements."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).gtag?.('event', 'conversion', { send_to: 'AW-18235035269/rSDACJDGwb4cEIWdkvdD' })}
            className="whitespace-nowrap px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-[#FCFBF4] hover:text-white rounded-full text-sm font-bold transition-colors no-underline"
          >
            Support kontaktieren
          </a>
        </div>
      </div>

    </section>
  );
}
