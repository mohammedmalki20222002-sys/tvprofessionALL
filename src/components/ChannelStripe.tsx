import { ALL_CHANNELS } from "../types";
import { Radio } from "lucide-react";

const DE_CHANNELS = [
  { id: "ard",     name: "ARD",        sub: "Das Erste",     logo: "/logos/ard.png",     bg: "#003CA6" },
  { id: "zdf",     name: "ZDF",        sub: "ZDF HD",        logo: "/logos/zdf.png",     bg: "#161616" },
  { id: "rtl",     name: "RTL",        sub: "RTL HD",        logo: "/logos/rtl.png",     bg: "#E8001A" },
  { id: "pro7",    name: "ProSieben",  sub: "Pro7 HD",       logo: "/logos/pro7.png",    bg: "#CC0000" },
  { id: "sat1",    name: "SAT.1",      sub: "SAT.1 HD",      logo: "/logos/sat1.png",    bg: "#1A3A8F" },
  { id: "vox",     name: "VOX",        sub: "VOX HD",        logo: "/logos/vox.png",     bg: "#E8670A" },
  { id: "kabel1",  name: "Kabel Eins", sub: "K1 HD",         logo: "/logos/kabel1.png",  bg: "#CC0000" },
  { id: "rtl2",    name: "RTL II",     sub: "RTL2 HD",       logo: "/logos/rtl2.png",    bg: "#1A1A2E" },
  { id: "arte",    name: "ARTE",       sub: "ARTE HD",       logo: "/logos/arte.png",    bg: "#006699" },
  { id: "ntv",     name: "n-tv",       sub: "Nachrichten",   logo: "/logos/ntv.png",     bg: "#CC0000" },
  { id: "wdr",     name: "WDR",        sub: "WDR HD",        logo: "/logos/wdr.png",     bg: "#003C78" },
  { id: "ndr",     name: "NDR",        sub: "NDR HD",        logo: "/logos/ndr.png",     bg: "#003C78" },
  { id: "br",      name: "BR",         sub: "BR Fernsehen",  logo: "/logos/br.png",      bg: "#005A9C" },
  { id: "zdfinfo", name: "ZDFinfo",    sub: "ZDFinfo HD",    logo: "/logos/zdfinfo.png", bg: "#161616" },
  { id: "sport1",  name: "Sport1",     sub: "Sport1 HD",     logo: "/logos/sport1.png",  bg: "#FF0000" },
  { id: "sky",     name: "Sky Sport",  sub: "Sky WM",        logo: "/logos/sky.png",     bg: "#101010" },
  { id: "euro1",   name: "Eurosport",  sub: "Eurosport 1",   logo: "/logos/euro1.png",   bg: "#FF6600" },
  { id: "dazn",    name: "DAZN",       sub: "DAZN Sport",    logo: "/logos/dazn.png",    bg: "#111111" },
  { id: "bbc",     name: "BBC One",    sub: "BBC WM",        logo: "/logos/bbc.png",     bg: "#CC0000" },
  { id: "bein",    name: "beIN Sports",sub: "beIN 1",        logo: "/logos/bein.png",    bg: "#6B0FA8" },
];

const WORLD_CHANNELS = [
  { id: "hbo",       name: "HBO",           sub: "HBO Max",        logo: "/logos/hbo.png",       bg: "#000000" },
  { id: "cnn",       name: "CNN",           sub: "CNN International", logo: "/logos/cnn.png",    bg: "#CC0000" },
  { id: "discovery", name: "Discovery",     sub: "Discovery HD",   logo: "/logos/discovery.png", bg: "#003DA5" },
  { id: "disney",    name: "Disney Channel",sub: "Disney+",        logo: "/logos/disney.png",    bg: "#000B8C" },
  { id: "natgeo",    name: "Nat Geo",       sub: "National Geographic", logo: "/logos/natgeo.png", bg: "#FFCC00" },
  { id: "mtv",       name: "MTV",           sub: "MTV Global",     logo: "/logos/mtv.png",       bg: "#000000" },
  { id: "bloomberg", name: "Bloomberg",     sub: "Bloomberg TV",   logo: "/logos/bloomberg.png", bg: "#1D1D1D" },
  { id: "cnbc",      name: "CNBC",          sub: "CNBC Business",  logo: "/logos/cnbc.png",      bg: "#003087" },
  { id: "abc",       name: "ABC",           sub: "ABC HD",         logo: "/logos/abc.png",       bg: "#000B8C" },
  { id: "nbc",       name: "NBC",           sub: "NBC HD",         logo: "/logos/nbc.png",       bg: "#000000" },
  { id: "tnt",       name: "TNT",           sub: "TNT Drama",      logo: "/logos/tnt.png",       bg: "#CC0000" },
  { id: "history",   name: "History",       sub: "History Channel", logo: "/logos/history.png",  bg: "#1A1A1A" },
  { id: "cartoon",   name: "Cartoon Network",sub: "CN HD",         logo: "/logos/cartoon.png",   bg: "#000000" },
  { id: "skynews",   name: "Sky News",      sub: "Sky News UK",    logo: "/logos/skynews.png",   bg: "#DA0000" },
  { id: "france24",  name: "France 24",     sub: "France 24 Int.", logo: "/logos/france24.png",  bg: "#F50000" },
];

const ROW1 = DE_CHANNELS.slice(0, 10);
const ROW2 = DE_CHANNELS.slice(10, 20);
const ROW3 = WORLD_CHANNELS.slice(0, 8);
const ROW4 = WORLD_CHANNELS.slice(7, 15);

function ChannelCard({ ch }: { ch: typeof DE_CHANNELS[0] }) {
  return (
    <div className="shrink-0 flex items-center gap-3 bg-white border border-black/8 rounded-2xl px-3.5 py-2.5 shadow-sm min-w-[150px]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0 p-1"
        style={{ backgroundColor: ch.bg }}
      >
        <img
          src={ch.logo}
          alt={ch.name}
          className="w-full h-full object-contain"
          onError={e => {
            const el = e.currentTarget;
            el.style.display = "none";
            const p = el.parentElement;
            if (p) p.innerHTML = `<span style="color:white;font-size:8px;font-weight:900;text-align:center;line-height:1.1">${ch.name}</span>`;
          }}
        />
      </div>
      <div className="flex flex-col leading-none gap-1">
        <span className="text-[#111211] text-[13px] font-bold whitespace-nowrap">{ch.name}</span>
        <span className="text-[#014E45]/65 text-[11px] font-medium whitespace-nowrap">{ch.sub}</span>
      </div>
    </div>
  );
}

export default function ChannelStripe() {
  const tripled1 = [...ROW1, ...ROW1, ...ROW1];
  const tripled2 = [...ROW2, ...ROW2, ...ROW2];
  const tripled3 = [...ROW3, ...ROW3, ...ROW3];
  const tripled4 = [...ROW4, ...ROW4, ...ROW4];

  return (
    <section id="channels-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="bg-[#014E45] text-white rounded-2xl py-8 px-4 md:px-6 relative overflow-hidden shadow-lg">

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-full border border-white/10">
              <Radio className="w-3 h-3 text-white/60 animate-pulse" />
              <span className="text-[9px] font-black font-mono uppercase tracking-widest text-white/70">59K+ Sender</span>
            </div>
            <h2 className="text-lg font-extrabold tracking-tight text-white">Sender-Katalog</h2>
          </div>
          <span className="hidden sm:block text-[9px] font-mono text-white/40 border border-white/10 bg-black/10 px-2.5 py-1 rounded-full">
            {ALL_CHANNELS.length} gelistet
          </span>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-3 select-none pointer-events-none">
          <div className="animate-scroll flex gap-3 px-4">
            {tripled1.map((ch, i) => (
              <ChannelCard key={`r1-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-6 select-none pointer-events-none">
          <div className="animate-scroll-reverse flex gap-3 px-4">
            {tripled2.map((ch, i) => (
              <ChannelCard key={`r2-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

        {/* Divider + worldwide label */}
        <div className="flex items-center gap-3 mb-5 relative z-10 px-1">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[9px] font-black font-mono uppercase tracking-[0.22em] text-white/35 shrink-0">🌍 Weltweite Sender</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Row 3 — worldwide, scrolls left */}
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-3 select-none pointer-events-none">
          <div className="animate-scroll flex gap-3 px-4">
            {tripled3.map((ch, i) => (
              <ChannelCard key={`r3-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

        {/* Row 4 — worldwide, scrolls right */}
        <div className="overflow-hidden -mx-4 md:-mx-6 select-none pointer-events-none">
          <div className="animate-scroll-reverse flex gap-3 px-4">
            {tripled4.map((ch, i) => (
              <ChannelCard key={`r4-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
