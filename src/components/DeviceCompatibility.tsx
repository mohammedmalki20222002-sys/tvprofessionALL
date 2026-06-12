import { ArrowRight } from "lucide-react";

interface DeviceCompatibilityProps {
  onPricingClick: () => void;
}

const DEVICES = [
  { id: "samsung",     name: "Samsung",      logo: "/devices/Samsung.png"     },
  { id: "lg",          name: "LG",           logo: "/devices/LG.png"          },
  { id: "android-tv",  name: "Android TV",   logo: "/devices/Android_TV.png"  },
  { id: "apple",       name: "Apple",        logo: "/devices/Apple.png"       },
  { id: "fire-tv",     name: "Fire TV",      logo: "/devices/Fire_TV.png"     },
  { id: "sony",        name: "Sony",         logo: "/devices/Sony.png"        },
  { id: "xbox",        name: "Xbox",         logo: "/devices/Xbox.png"        },
  { id: "playstation", name: "PlayStation",  logo: "/devices/PlayStation.png" },
  { id: "roku",        name: "Roku",         logo: "/devices/Roku.png"        },
  { id: "xiaomi",      name: "Xiaomi",       logo: "/devices/Xiaomi.png"      },
  { id: "android",     name: "Android",      logo: "/devices/Android.png"     },
  { id: "chrome",      name: "Chrome",       logo: "/devices/Chrome.png"      },
  { id: "formuler",    name: "Formuler",     logo: "/devices/Formuler.png"    },
  { id: "huawei",      name: "Huawei",       logo: "/devices/Huawei.png"      },
  { id: "philips",     name: "Philips",      logo: "/devices/Philips.png"     },
  { id: "tcl",         name: "TCL",          logo: "/devices/TCL.png"         },
  { id: "toshiba",     name: "Toshiba",      logo: "/devices/Toshiba.png"     },
  { id: "lenovo",      name: "Lenovo",       logo: "/devices/Lenovo.png"      },
  { id: "sharp",       name: "Sharp",        logo: "/devices/Sharp.png"       },

  { id: "x96",         name: "X96",          logo: "/devices/X96.png"         },
];

function DeviceCard({ d }: { d: typeof DEVICES[0] }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center w-20 h-20 bg-white hover:bg-neutral-50 border border-black/8 rounded-2xl p-3 transition-colors shadow-sm"
      title={d.name}
    >
      <img
        src={d.logo}
        alt={d.name}
        className="w-full h-full object-contain"
        onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
      />
    </div>
  );
}

export default function DeviceCompatibility({ onPricingClick }: DeviceCompatibilityProps) {
  const row1 = DEVICES.slice(0, Math.ceil(DEVICES.length / 2));
  const row2 = DEVICES.slice(Math.ceil(DEVICES.length / 2));
  const tripled1 = [...row1, ...row1, ...row1];
  const tripled2 = [...row2, ...row2, ...row2];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="bg-[#FAF9F2] border border-black/8 rounded-2xl py-8 relative overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-4 md:px-6">
          <div>
            <span className="serif-display italic font-light text-2xl text-neutral-400 block mb-1">21+ Geräte</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Kompatibel mit{" "}
              <span className="serif-display italic font-light text-[#014E45]">allen Geräten.</span>
            </h2>
          </div>
          <button
            onClick={onPricingClick}
            className="hidden sm:flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-700 text-white text-[10px] font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap"
          >
            Jetzt starten <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-3 select-none pointer-events-none">
          <div className="animate-scroll flex gap-3 px-4">
            {tripled1.map((d, i) => (
              <div key={`${d.id}-r1-${i}`} className="pointer-events-auto">
                <DeviceCard d={d} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden -mx-4 md:-mx-6 select-none pointer-events-none">
          <div className="animate-scroll-reverse flex gap-3 px-4">
            {tripled2.map((d, i) => (
              <div key={`${d.id}-r2-${i}`} className="pointer-events-auto">
                <DeviceCard d={d} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
