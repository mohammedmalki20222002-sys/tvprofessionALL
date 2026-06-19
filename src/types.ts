export interface MovieItem {
  id: string;
  title: string;
  category: "movies" | "shows" | "sports" | "documentaries";
  rating: string;
  year: string;
  genre: string;
  duration: string;
  image: string;
  badge?: string;
  quality: "4K UHD" | "1080p Full HD";
}

export interface ChannelItem {
  id: string;
  name: string;
  category: "Sports" | "Entertainment" | "Movies" | "News" | "Kids" | "Local";
  country: string;
  logoColor: string;
  logoText: string;
}

export interface PricingPlan {
  id: string;
  durationMonths: number;
  name: string;
  price: number;
  originalPrice: number;
  popular: boolean;
  features: string[];
  savings: string;
  devices: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  ratingValue: number;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const INITIAL_MOVIES: MovieItem[] = [
  {
    id: "m1",
    title: "Dune: Part Two",
    category: "movies",
    rating: "9.1",
    year: "2024",
    genre: "Sci-Fi / Abenteuer",
    duration: "2 Std. 46 Min.",
    image: "/movies/dune_part_two_ver2_xxlg.jpg",
    quality: "4K UHD",
  },
  {
    id: "m9",
    title: "Oppenheimer",
    category: "movies",
    rating: "8.8",
    year: "2023",
    genre: "Biopic / Drama",
    duration: "3 Std.",
    image: "/movies/oppenheimer_xlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m17",
    title: "John Wick: Kapitel 4",
    category: "movies",
    rating: "7.7",
    year: "2023",
    genre: "Action / Thriller",
    duration: "2 Std. 49 Min.",
    image: "/movies/john_wick_chapter_four_xxlg.jpg",
    badge: "4K",
    quality: "4K UHD",
  },
  {
    id: "m18",
    title: "Killers of the Flower Moon",
    category: "movies",
    rating: "7.7",
    year: "2023",
    genre: "Krimi / Drama / Geschichte",
    duration: "3 Std. 26 Min.",
    image: "/movies/killers_of_the_flower_moon_xxlg.jpg",
    quality: "4K UHD",
  },
  {
    id: "m19",
    title: "Napoleon",
    category: "movies",
    rating: "6.5",
    year: "2023",
    genre: "Historisches Epos / Drama",
    duration: "2 Std. 38 Min.",
    image: "/movies/napoleon.jpg",
    quality: "4K UHD",
  },
  {
    id: "m20",
    title: "Mission: Impossible – Dead Reckoning",
    category: "movies",
    rating: "7.7",
    year: "2023",
    genre: "Action / Spionage",
    duration: "2 Std. 43 Min.",
    image: "/movies/mission_impossible__dead_reckoning_part_one_ver5_xxlg.jpg",
    quality: "4K UHD",
  },
  {
    id: "m21",
    title: "Mission: Impossible – The Final Reckoning",
    category: "movies",
    rating: "8.0",
    year: "2025",
    genre: "Action / Spionage / Thriller",
    duration: "2 Std. 49 Min.",
    image: "/movies/mission_impossible__the_final_reckoning_xlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m22",
    title: "Aquaman: Das Verlorene Königreich",
    category: "movies",
    rating: "6.5",
    year: "2023",
    genre: "Action / DC / Superheld",
    duration: "2 Std. 4 Min.",
    image: "/movies/aquaman_and_the_lost_kingdom.jpg",
    quality: "4K UHD",
  },
  {
    id: "m23",
    title: "The Marvels",
    category: "movies",
    rating: "6.0",
    year: "2023",
    genre: "Action / Marvel / Superheld",
    duration: "1 Std. 45 Min.",
    image: "/movies/marvels_xxlg.jpg",
    quality: "4K UHD",
  },
  {
    id: "m24",
    title: "Captain America: Brave New World",
    category: "movies",
    rating: "6.3",
    year: "2025",
    genre: "Action / Marvel / Superheld",
    duration: "1 Std. 58 Min.",
    image: "/movies/captain_america_brave_new_world_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m25",
    title: "Thunderbolts*",
    category: "movies",
    rating: "7.4",
    year: "2025",
    genre: "Action / Marvel / Superheld",
    duration: "2 Std. 7 Min.",
    image: "/movies/thunderbolts_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m26",
    title: "Superman",
    category: "movies",
    rating: "7.5",
    year: "2025",
    genre: "Action / DC / Superheld",
    duration: "2 Std. 9 Min.",
    image: "/movies/superman_ver27_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m27",
    title: "Supergirl: Woman of Tomorrow",
    category: "movies",
    rating: "7.0",
    year: "2026",
    genre: "Action / DC / Superheld",
    duration: "Demnächst",
    image: "/movies/supergirl_xxlg.jpg",
    badge: "Bald",
    quality: "4K UHD",
  },
  {
    id: "m28",
    title: "The Fantastic Four: First Steps",
    category: "movies",
    rating: "7.8",
    year: "2025",
    genre: "Action / Marvel / Abenteuer",
    duration: "2 Std. 5 Min.",
    image: "/movies/fantastic_four_ver4.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m29",
    title: "Sinners",
    category: "movies",
    rating: "7.8",
    year: "2025",
    genre: "Horror / Drama / Thriller",
    duration: "2 Std. 18 Min.",
    image: "/movies/sinners_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m30",
    title: "How to Train Your Dragon",
    category: "movies",
    rating: "8.0",
    year: "2025",
    genre: "Abenteuer / Animation / Familie",
    duration: "1 Std. 55 Min.",
    image: "/movies/how_to_train_your_dragon_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m31",
    title: "Lilo & Stitch",
    category: "movies",
    rating: "7.0",
    year: "2025",
    genre: "Familienfilm / Abenteuer",
    duration: "1 Std. 48 Min.",
    image: "/movies/lilo_and_stitch_xlg.jpg",
    badge: "NEU",
    quality: "1080p Full HD",
  },
  {
    id: "m32",
    title: "Jurassic World: Rebirth",
    category: "movies",
    rating: "7.2",
    year: "2025",
    genre: "Action / Abenteuer / Sci-Fi",
    duration: "2 Std. 9 Min.",
    image: "/movies/jurassic_world_rebirth_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m33",
    title: "Snow White",
    category: "movies",
    rating: "4.3",
    year: "2025",
    genre: "Fantasy / Musical / Familie",
    duration: "1 Std. 49 Min.",
    image: "/movies/snow_white_xxlg.jpg",
    quality: "1080p Full HD",
  },
  {
    id: "m34",
    title: "The Hunger Games: Sunrise on the Reaping",
    category: "movies",
    rating: "7.5",
    year: "2026",
    genre: "Science-Fiction / Action / Drama",
    duration: "2 Std. 40 Min.",
    image: "/movies/hunger_games_sunrise_on_the_reaping_xxlg.jpg",
    badge: "2026",
    quality: "4K UHD",
  },
  {
    id: "m35",
    title: "Project Hail Mary",
    category: "movies",
    rating: "8.3",
    year: "2025",
    genre: "Science-Fiction / Drama",
    duration: "2 Std. 30 Min.",
    image: "/movies/project_hail_mary_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m36",
    title: "Masters of the Universe",
    category: "movies",
    rating: "7.0",
    year: "2026",
    genre: "Action / Fantasy / Abenteuer",
    duration: "Demnächst",
    image: "/movies/masters_of_the_universe_xxlg.jpg",
    badge: "Bald",
    quality: "4K UHD",
  },
  {
    id: "m37",
    title: "The Running Man",
    category: "movies",
    rating: "7.0",
    year: "2025",
    genre: "Action / Sci-Fi / Thriller",
    duration: "2 Std. 20 Min.",
    image: "/movies/running_man_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m38",
    title: "28 Years Later",
    category: "movies",
    rating: "7.8",
    year: "2025",
    genre: "Horror / Science-Fiction",
    duration: "1 Std. 55 Min.",
    image: "/movies/twenty_eight_years_later_ver6_xxlg.jpg",
    badge: "NEU",
    quality: "4K UHD",
  },
  {
    id: "m39",
    title: "Odyssey",
    category: "movies",
    rating: "7.5",
    year: "2026",
    genre: "Science-Fiction / Abenteuer",
    duration: "Demnächst",
    image: "/movies/odyssey_xxlg.jpg",
    badge: "Bald",
    quality: "4K UHD",
  },
];

export const ALL_CHANNELS: ChannelItem[] = [
  // --- GERMANY (DE) ---
  { id: "de1", name: "Sky Sport Bundesliga HD", category: "Sports", country: "DE", logoColor: "from-red-600 to-red-800", logoText: "SkyB" },
  { id: "de2", name: "DAZN 1 Bar HD", category: "Sports", country: "DE", logoColor: "from-amber-500 to-black", logoText: "DAZN1" },
  { id: "de3", name: "DAZN 2 Bar HD", category: "Sports", country: "DE", logoColor: "from-amber-600 to-zinc-900", logoText: "DAZN2" },
  { id: "de4", name: "Sky Sport Premier League HD", category: "Sports", country: "DE", logoColor: "from-red-600 to-neutral-900", logoText: "SkyPL" },
  { id: "de5", name: "Sky Sport F1 HD", category: "Sports", country: "DE", logoColor: "from-red-500 to-neutral-950", logoText: "SkyF1" },
  { id: "de6", name: "ZDF HD", category: "Local", country: "DE", logoColor: "from-orange-500 to-neutral-800", logoText: "ZDF" },
  { id: "de7", name: "Das Erste HD (ARD)", category: "Local", country: "DE", logoColor: "from-blue-600 to-neutral-900", logoText: "ARD" },
  { id: "de8", name: "ProSieben HD", category: "Entertainment", country: "DE", logoColor: "from-red-600 to-red-900", logoText: "Pro7" },
  { id: "de9", name: "RTL UHD", category: "Entertainment", country: "DE", logoColor: "from-red-500 via-yellow-400 to-blue-500", logoText: "RTL" },
  { id: "de10", name: "Sat.1 HD", category: "Entertainment", country: "DE", logoColor: "from-blue-500 to-pink-500", logoText: "SAT1" },
  { id: "de11", name: "WELT HD", category: "News", country: "DE", logoColor: "from-[#0F1E36] to-neutral-900", logoText: "WELT" },
  { id: "de12", name: "n-tv HD", category: "News", country: "DE", logoColor: "from-red-600 to-slate-905", logoText: "n-tv" },
  { id: "de13", name: "KiKa HD", category: "Kids", country: "DE", logoColor: "from-green-400 to-teal-500", logoText: "KiKa" },
  { id: "de14", name: "Sky Cinema Premieren HD", category: "Movies", country: "DE", logoColor: "from-sky-700 to-indigo-950", logoText: "SkyM" },
  { id: "de15", name: "ServusTV Deutschland", category: "Local", country: "DE", logoColor: "from-blue-700 to-cyan-800", logoText: "Servus" },
  { id: "de16", name: "Super RTL HD", category: "Kids", country: "DE", logoColor: "from-orange-500 to-orange-700", logoText: "SRTL" },
  { id: "de17", name: "Eurosport 1 Deutschland", category: "Sports", country: "DE", logoColor: "from-blue-800 to-red-600", logoText: "EuroS" },
  { id: "de18", name: "WDR Fernsehen Köln", category: "Local", country: "DE", logoColor: "from-blue-500 to-sky-700", logoText: "WDR" },

  // --- UNITED STATES (US) ---
  { id: "us1", name: "HBO Premium East HD", category: "Movies", country: "US", logoColor: "from-slate-800 to-black", logoText: "HBO" },
  { id: "us2", name: "HBO Comedy HD", category: "Movies", country: "US", logoColor: "from-slate-700 to-slate-900", logoText: "HBO.C" },
  { id: "us3", name: "Showtime East HD", category: "Movies", country: "US", logoColor: "from-red-700 to-black", logoText: "SHOW" },
  { id: "us4", name: "Starz Kids & Family HD", category: "Kids", country: "US", logoColor: "from-indigo-600 to-indigo-900", logoText: "STARZ" },
  { id: "us5", name: "Cinemax East HD", category: "Movies", country: "US", logoColor: "from-neutral-800 to-neutral-950", logoText: "MAX" },
  { id: "us6", name: "ESPN UHD", category: "Sports", country: "US", logoColor: "from-red-600 to-red-700", logoText: "ESPN" },
  { id: "us7", name: "ESPN 2 HD", category: "Sports", country: "US", logoColor: "from-red-600 to-zinc-900", logoText: "ESPN2" },
  { id: "us8", name: "Fox Sports 1 (FS1) HD", category: "Sports", country: "US", logoColor: "from-blue-800 to-neutral-900", logoText: "FS1" },
  { id: "us9", name: "Fox Sports 2 (FS2) HD", category: "Sports", country: "US", logoColor: "from-blue-700 to-slate-900", logoText: "FS2" },
  { id: "us10", name: "CBS Sports Network HD", category: "Sports", country: "US", logoColor: "from-blue-900 to-blue-950", logoText: "CBSSN" },
  { id: "us11", name: "Tennis Channel HD", category: "Sports", country: "US", logoColor: "from-green-600 to-emerald-900", logoText: "TENNIS" },
  { id: "us12", name: "CNN International HD", category: "News", country: "US", logoColor: "from-red-700 to-stone-900", logoText: "CNN" },
  { id: "us13", name: "MSNBC Live HD", category: "News", country: "US", logoColor: "from-blue-700 to-slate-800", logoText: "MSNBC" },
  { id: "us14", name: "FOX News Channel HD", category: "News", country: "US", logoColor: "from-blue-900 to-orange-600", logoText: "FOXN" },
  { id: "us15", name: "ABC Network Local HD", category: "Local", country: "US", logoColor: "from-neutral-900 to-black", logoText: "ABC" },
  { id: "us16", name: "CBS East HD", category: "Local", country: "US", logoColor: "from-sky-600 to-neutral-900", logoText: "CBS" },
  { id: "us17", name: "NBC East HD", category: "Local", country: "US", logoColor: "from-purple-600 to-blue-900", logoText: "NBC" },
  { id: "us18", name: "FOX East HD", category: "Local", country: "US", logoColor: "from-blue-900 to-black", logoText: "FOX" },
  { id: "us19", name: "AMC Marvel Premium", category: "Entertainment", country: "US", logoColor: "from-zinc-700 to-black", logoText: "AMC" },
  { id: "us20", name: "FX Network HD", category: "Entertainment", country: "US", logoColor: "from-teal-900 to-black", logoText: "FX" },

  // --- UNITED KINGDOM (UK) ---
  { id: "uk1", name: "BBC One HD", category: "Local", country: "UK", logoColor: "from-red-600 to-red-700", logoText: "BBC1" },
  { id: "uk2", name: "BBC Two HD", category: "Local", country: "UK", logoColor: "from-teal-600 to-neutral-900", logoText: "BBC2" },
  { id: "uk3", name: "ITV1 HD", category: "Local", country: "UK", logoColor: "from-blue-500 to-indigo-700", logoText: "ITV1" },
  { id: "uk4", name: "Channel 4 HD", category: "Local", country: "UK", logoColor: "from-pink-600 to-neutral-800", logoText: "CH4" },
  { id: "uk5", name: "Sky Atlantic HD", category: "Entertainment", country: "UK", logoColor: "from-sky-800 to-slate-900", logoText: "SkyAt" },
  { id: "uk6", name: "Sky Max HD", category: "Entertainment", country: "UK", logoColor: "from-orange-600 to-neutral-900", logoText: "SkyMax" },
  { id: "uk7", name: "Sky Cinema Premiere HD", category: "Movies", country: "UK", logoColor: "from-rose-600 to-purple-900", logoText: "SkyCP" },
  { id: "uk8", name: "Sky Cinema Action HD", category: "Movies", country: "UK", logoColor: "from-red-700 to-neutral-950", logoText: "SkyCA" },
  { id: "uk9", name: "Sky Sports Main Event Ultra HD", category: "Sports", country: "UK", logoColor: "from-red-600 to-black", logoText: "SkyS.ME" },
  { id: "uk10", name: "Sky Sports Premier League HD", category: "Sports", country: "UK", logoColor: "from-red-600 to-neutral-900", logoText: "SkyS.PL" },
  { id: "uk11", name: "Sky Sports Football HD", category: "Sports", country: "UK", logoColor: "from-emerald-600 to-black", logoText: "SkyS.FB" },
  { id: "uk12", name: "Sky Sports F1 HD", category: "Sports", country: "UK", logoColor: "from-cyan-700 to-blue-900", logoText: "SkyS.F1" },
  { id: "uk13", name: "TNT Sports 1 Ultra HD", category: "Sports", country: "UK", logoColor: "from-purple-700 to-black", logoText: "TNT1" },
  { id: "uk14", name: "TNT Sports 2 HD", category: "Sports", country: "UK", logoColor: "from-purple-600 to-zinc-900", logoText: "TNT2" },
  { id: "uk15", name: "Sky News HD", category: "News", country: "UK", logoColor: "from-red-600 to-blue-800", logoText: "SkyN" },

  // --- FRANCE (FR) ---
  { id: "fr1", name: "TF1 HD France", category: "Local", country: "FR", logoColor: "from-blue-600 to-blue-800", logoText: "TF1" },
  { id: "fr2", name: "France 2 HD", category: "Local", country: "FR", logoColor: "from-red-600 to-neutral-900", logoText: "FR2" },
  { id: "fr3", name: "France 3 HD", category: "Local", country: "FR", logoColor: "from-blue-500 to-blue-700", logoText: "FR3" },
  { id: "fr4", name: "Canal+ France HD", category: "Entertainment", country: "FR", logoColor: "from-neutral-800 to-black", logoText: "C+" },
  { id: "fr5", name: "Canal+ Sport France HD", category: "Sports", country: "FR", logoColor: "from-zinc-700 to-zinc-950", logoText: "C+.S" },
  { id: "fr6", name: "M6 HD France", category: "Entertainment", country: "FR", logoColor: "from-yellow-500 to-orange-600", logoText: "M6" },
  { id: "fr7", name: "beIN Sports 1 France HD", category: "Sports", country: "FR", logoColor: "from-purple-800 to-neutral-900", logoText: "beIN1" },
  { id: "fr8", name: "beIN Sports 2 France HD", category: "Sports", country: "FR", logoColor: "from-purple-700 to-indigo-950", logoText: "beIN2" },
  { id: "fr9", name: "beIN Sports 3 France HD", category: "Sports", country: "FR", logoColor: "from-purple-600 to-black", logoText: "beIN3" },
  { id: "fr10", name: "RMC Sport 1 HD", category: "Sports", country: "FR", logoColor: "from-red-700 to-yellow-600", logoText: "RMC1" },

  // --- ESPAÑA (ES) ---
  { id: "es1", name: "La 1 HD España", category: "Local", country: "ES", logoColor: "from-blue-500 to-[#102C57]", logoText: "La1" },
  { id: "es2", name: "Antena 3 HD", category: "Entertainment", country: "ES", logoColor: "from-orange-500 to-orange-700", logoText: "A3" },
  { id: "es3", name: "Telecinco HD", category: "Entertainment", country: "ES", logoColor: "from-blue-600 to-indigo-900", logoText: "T5" },
  { id: "es4", name: "Movistar+ El Partidazo HD", category: "Sports", country: "ES", logoColor: "from-cyan-600 to-black", logoText: "M.Part" },
  { id: "es5", name: "Movistar+ LaLiga HD", category: "Sports", country: "ES", logoColor: "from-teal-600 to-slate-900", logoText: "M.Liga" },
  { id: "es6", name: "Movistar+ Liga de Campeones HD", category: "Sports", country: "ES", logoColor: "from-blue-800 to-cyan-900", logoText: "M.LCh" },
  { id: "es7", name: "DAZN LaLiga 1 HD", category: "Sports", country: "ES", logoColor: "from-amber-500 to-neutral-950", logoText: "DAZN.L" },

  // --- ITALIA (IT) ---
  { id: "it1", name: "Rai 1 HD Italia", category: "Local", country: "IT", logoColor: "from-blue-700 to-blue-900", logoText: "Rai1" },
  { id: "it2", name: "Canale 5 HD", category: "Entertainment", country: "IT", logoColor: "from-orange-500 to-blue-950", logoText: "C5" },
  { id: "it3", name: "Italia 1 HD", category: "Entertainment", country: "IT", logoColor: "from-blue-500 to-blue-700", logoText: "I1" },
  { id: "it4", name: "Sky Sport Uno Italia HD", category: "Sports", country: "IT", logoColor: "from-red-600 to-slate-900", logoText: "SkyS.U" },
  { id: "it5", name: "Sky Sport Calcio Italia HD", category: "Sports", country: "IT", logoColor: "from-emerald-700 to-black", logoText: "SkyS.C" },
  { id: "it6", name: "DAZN 1 Italia HD", category: "Sports", country: "IT", logoColor: "from-amber-600 to-black", logoText: "DAZN.I" },

  // --- TÜRKIYE (TR) ---
  { id: "tr1", name: "TRT 1 Ultra HD Türkiye", category: "Local", country: "TR", logoColor: "from-red-700 to-neutral-900", logoText: "TRT1" },
  { id: "tr2", name: "beIN Sports 1 TR HD", category: "Sports", country: "TR", logoColor: "from-[#F36C21] to-black", logoText: "beIN1.T" },
  { id: "tr3", name: "beIN Sports 2 TR HD", category: "Sports", country: "TR", logoColor: "from-[#F36C21] to-zinc-900", logoText: "beIN2.T" },
  { id: "tr4", name: "ATV HD Türkiye", category: "Entertainment", country: "TR", logoColor: "from-orange-600 to-red-800", logoText: "ATV" },
  { id: "tr5", name: "Show TV HD", category: "Entertainment", country: "TR", logoColor: "from-purple-500 to-[#F20F79]", logoText: "SHOW" },
  { id: "tr6", name: "Kanal D HD", category: "Entertainment", country: "TR", logoColor: "from-blue-700 to-cyan-600", logoText: "KanalD" },
  { id: "tr7", name: "TV8 TR HD", category: "Entertainment", country: "TR", logoColor: "from-red-600 to-yellow-500", logoText: "TV8" },

  // --- ARABIC (AR) ---
  { id: "ar1", name: "beIN Sports 1 Arabic HD", category: "Sports", country: "AR", logoColor: "from-purple-800 to-black", logoText: "beIN.A1" },
  { id: "ar2", name: "beIN Sports Premium 1 HD", category: "Sports", country: "AR", logoColor: "from-purple-750 to-indigo-950", logoText: "beIN.P1" },
  { id: "ar3", name: "SSC Sport 1 KSA HD", category: "Sports", country: "AR", logoColor: "from-green-700 to-zinc-950", logoText: "SSC1" },
  { id: "ar4", name: "SSC Sport 5 KSA Ultimate", category: "Sports", country: "AR", logoColor: "from-green-600 to-neutral-900", logoText: "SSC5" },
  { id: "ar5", name: "MBC 1 HD Arabic", category: "Entertainment", country: "AR", logoColor: "from-[#11698E] to-[#19456B]", logoText: "MBC1" },
  { id: "ar6", name: "MBC Max Movies HD", category: "Movies", country: "AR", logoColor: "from-purple-600 to-slate-900", logoText: "MBC.M" },
  { id: "ar7", name: "Al Jazeera Arabic News HD", category: "News", country: "AR", logoColor: "from-[#8B7E66] to-black", logoText: "AJA" },
  { id: "ar8", name: "Al Arabiya News HD", category: "News", country: "AR", logoColor: "from-blue-600 to-purple-800", logoText: "Arabiya" }
];

const COMMON_FEATURES = [
  "59.000+ Live-Sender",
  "200.000+ Filme & Serien",
  "Netflix · HBO · Disney+ & mehr",
  "HD | FHD | 4K Qualität",
  "Anti-Freeze-Technologie",
  "Schnelle und stabile Server",
  "Premium-Filme, Serien & Live-TV",
  "PPV / EPG verfügbar",
  "Erweiterte Kindersicherung",
  "Priorisierter Kundensupport",
  "Weltweiter Zugang (keine IP-Sperre)",
  "Regelmäßige Updates"
];

export const SUBSCRIPTION_PLANS: PricingPlan[] = [
  // 1 Device plans
  {
    id: "p1",
    durationMonths: 3,
    name: "Starter",
    price: 34.99,
    originalPrice: 49.99,
    popular: false,
    savings: "30 % sparen",
    devices: 1,
    features: COMMON_FEATURES
  },
  {
    id: "p2",
    durationMonths: 6,
    name: "Standard",
    price: 49.99,
    originalPrice: 74.99,
    popular: false,
    savings: "33 % sparen",
    devices: 1,
    features: COMMON_FEATURES
  },
  {
    id: "p3",
    durationMonths: 12,
    name: "Premium",
    price: 69.99,
    originalPrice: 119.99,
    popular: true,
    savings: "42 % sparen",
    devices: 1,
    features: COMMON_FEATURES
  },
  {
    id: "p4",
    durationMonths: 24,
    name: "Ultra",
    price: 124.99,
    originalPrice: 219.99,
    popular: false,
    savings: "43 % sparen",
    devices: 1,
    features: COMMON_FEATURES
  },
  // 2 Device plans
  {
    id: "p5",
    durationMonths: 3,
    name: "Duo Starter",
    price: 59.99,
    originalPrice: 89.99,
    popular: false,
    savings: "33 % sparen",
    devices: 2,
    features: ["2 Simultane Verbindungen", ...COMMON_FEATURES]
  },
  {
    id: "p6",
    durationMonths: 6,
    name: "Duo Standard",
    price: 89.99,
    originalPrice: 134.99,
    popular: false,
    savings: "33 % sparen",
    devices: 2,
    features: ["2 Simultane Verbindungen", ...COMMON_FEATURES]
  },
  {
    id: "p7",
    durationMonths: 12,
    name: "Duo Premium",
    price: 129.99,
    originalPrice: 219.99,
    popular: true,
    savings: "41 % sparen",
    devices: 2,
    features: ["2 Simultane Verbindungen", ...COMMON_FEATURES]
  },
  {
    id: "p8",
    durationMonths: 24,
    name: "Duo Ultra",
    price: 239.99,
    originalPrice: 409.99,
    popular: false,
    savings: "41 % sparen",
    devices: 2,
    features: ["2 Simultane Verbindungen", ...COMMON_FEATURES]
  }
];

export const REVIEWS: TestimonialItem[] = [
  {
    id: "r1",
    name: "Tara T.",
    role: "Sport-Enthusiastin, Frankfurt",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    text: "Die Sportsender sind absolut spitze! Ich habe das gesamte Champions-League-Spiel in unkomprimiertem 4K ganz ohne Pufferung gesehen. Ein absoluter Game-Changer.",
    highlight: "Absolut kein Puffer-Ruckeln bei Live-Spielen in 4K",
    ratingValue: 5,
  },
  {
    id: "r2",
    name: "Roland V.",
    role: "Filmliebhaber, München",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    text: "Die Filmauswahl ist gigantisch! Ich habe brandneue Kinostarts sowie europäische Independent-Filme in echtem 4K UHD gefunden. Untertitel sind perfekt auf Deutsch konfigurierbar.",
    highlight: "Die riesige Kinobibliothek rettet meine Wochenenden!",
    ratingValue: 5,
  },
  {
    id: "r3",
    name: "Sabine S.",
    role: "Familienmutter, Berlin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    text: "Unsere Kinder schauen am liebsten Kindersendungen auf Deutsch und ich liebe englische Shows. Wir nutzen das Abonnement auf zwei Geräten gleichzeitig im Haus. Großartiger Support und sofortige Freischaltung.",
    highlight: "Die Einrichtung dauerte nur 2 Minuten, absolut empfehlenswert!",
    ratingValue: 5,
  },
  {
    id: "r4",
    name: "Sandro W.",
    role: "IT-Systemadministrator, Stuttgart",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    text: "Als Softwareentwickler habe ich die Bitrate und Server-Anbindung getestet. Extrem niedriger Ping, hervorragende Kompressionsraten bei fast verlustfreier Bildqualität. Perfekt auf Fire TV und Smart TV.",
    highlight: "Optimale Streams, ausgiebig auf Smart TV und Firestick getestet",
    ratingValue: 5,
  },
  {
    id: "r5",
    name: "Markus D.",
    role: "Heimkino-Fan, Köln",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    text: "Als deutscher Fußballfan im Ausland oder zu Hause will man alles reibungslos haben. IPTV Professional liefert alle Streams in erstklassiger Bildqualität und ganz ohne VPN-Gesperre.",
    highlight: "Alle meine Heimatsender ganz ohne Ländersperren!",
    ratingValue: 5,
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Bieten Sie eine sofortige Einrichtung nach dem Kauf an?",
    answer: "Ja, absolut! Sobald Sie Ihre Zahlung abgeschlossen haben, generiert unser automatisiertes Onboarding-System Ihre aktiven Zugangsdaten und sendet Ihnen innerhalb von 2 bis 5 Minuten eine detaillierte E-Mail mit der Installationsanleitung."
  },
  {
    id: "f2",
    question: "Welche Hardware- und Software-Apps werden unterstützt?",
    answer: "Unser System läuft auf fast jedem Gerät. Die Unterstützung ist direkt integriert für Smart-TVs (Samsung, LG, Sony, Philips), Android Boxen, Amazon Fire TV Stick, Apple TV, iPads, iPhones, MAG-Boxen, Formuler und Anwendungen wie IPTV Smarters, Tivimate, GSE sowie Standard-M3U-Wiedergabelisten."
  },
  {
    id: "f3",
    question: "Wie schnell muss meine Internetverbindung sein?",
    answer: "Für Standard-Auflösung (SD) benötigen Sie mindestens 8 Mbit/s. Für Full HD (1080p) ist eine stabile Geschwindigkeit von 15 Mbit/s erforderlich und für erstklassige 4K UHD-Streams empfehlen wir 25 Mbit/s oder mehr, idealerweise über eine kabelgebundene LAN-Verbindung."
  },
  {
    id: "f4",
    question: "Kann ich das Abonnement auf mehreren Geräten gleichzeitig nutzen?",
    answer: "Standardmäßig unterstützen die Classic- und Standard-Tarife 1 gleichzeitige Verbindung. Wenn Sie sich für unser 12-Monats-Paket (Super-Sparjahr) entscheiden, sind 2 gleichzeitige Verbindungen (+1 GRATIS) enthalten, sodass Sie problemlos auf verschiedenen Bildschirmen streamen können."
  },
  {
    id: "f5",
    question: "Gibt es Verträge oder versteckte Einrichtungsgebühren?",
    answer: "Nein, es gibt keine laufenden Verträge, keine Einrichtungsgebühren und kein automatisches Abonnement mit Abbuchung. Sie zahlen nur einmalig für den gewählten Zeitraum (3, 6 oder 12 Monate) und verlängern manuell, wenn Sie fortfahren möchten."
  },
  {
    id: "f6",
    question: "Wo kann ich seriös IPTV kaufen?",
    answer: "IPTV kaufen Sie sicher bei TV Professional – einem verifizierten Anbieter mit über 45.000 aktiven Kunden in Deutschland. Der Kauf erfolgt schnell per WhatsApp, Zahlung per PayPal, Kreditkarte, SEPA oder Klarna, und die Freischaltung erfolgt innerhalb weniger Minuten."
  }
];
