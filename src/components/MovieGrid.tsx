import { useState } from "react";
import { Play, Star, ArrowRight } from "lucide-react";

interface MovieGridProps {
  onPricingClick: () => void;
}

const TMDB = "https://image.tmdb.org/t/p/w300";

interface MovieItem {
  id: string;
  title: string;
  year: string;
  rating: string;
  badge?: string;
  image: string;
  genre: string;
}

// ── Row 1: Hollywood Blockbusters ────────────────────────────────────────────
const BLOCKBUSTERS: MovieItem[] = [
  { id: "b1",  title: "Dune: Part Two",               year: "2024", rating: "8.5", badge: "4K",  image: "/movies/dune_part_two_ver2_xxlg.jpg",                          genre: "Sci-Fi"      },
  { id: "b2",  title: "Oppenheimer",                   year: "2023", rating: "8.8", badge: "4K",  image: "/movies/oppenheimer_xlg.jpg",                                  genre: "Drama"       },
  { id: "b3",  title: "John Wick 4",                   year: "2023", rating: "7.7", badge: "4K",  image: "/movies/john_wick_chapter_four_xxlg.jpg",                      genre: "Action"      },
  { id: "b4",  title: "Thunderbolts",                  year: "2025", rating: "7.6", badge: "NEU", image: "/movies/thunderbolts_xxlg.jpg",                                 genre: "Action"      },
  { id: "b5",  title: "Superman",                      year: "2025", rating: "8.0", badge: "NEU", image: "/movies/superman_ver27_xxlg.jpg",                               genre: "Action"      },
  { id: "b6",  title: "Mission: Impossible",           year: "2025", rating: "8.1", badge: "NEU", image: "/movies/mission_impossible__the_final_reckoning_xlg.jpg",       genre: "Thriller"    },
  { id: "b7",  title: "Sinners",                       year: "2025", rating: "7.9", badge: "NEU", image: "/movies/sinners_xxlg.jpg",                                      genre: "Horror"      },
  { id: "b8",  title: "Captain America",               year: "2025", rating: "7.3", badge: "4K",  image: "/movies/captain_america_brave_new_world_xxlg.jpg",              genre: "Action"      },
  { id: "b9",  title: "Jurassic World: Rebirth",       year: "2025", rating: "7.1", badge: "NEU", image: "/movies/jurassic_world_rebirth_xxlg.jpg",                       genre: "Adventure"   },
  { id: "b10", title: "How to Train Your Dragon",      year: "2025", rating: "7.8", badge: "NEU", image: "/movies/how_to_train_your_dragon_xxlg.jpg",                     genre: "Animation"   },
  { id: "b11", title: "Fantastic Four",                year: "2025", rating: "7.5", badge: "NEU", image: "/movies/fantastic_four_ver4.jpg",                               genre: "Action"      },
  { id: "b12", title: "Hunger Games: Sunrise",         year: "2025", rating: "7.6", badge: "NEU", image: "/movies/hunger_games_sunrise_on_the_reaping_xxlg.jpg",          genre: "Adventure"   },
  { id: "b13", title: "28 Years Later",                year: "2025", rating: "7.4", badge: "NEU", image: "/movies/twenty_eight_years_later_ver6_xxlg.jpg",                genre: "Horror"      },
  { id: "b14", title: "Killers of the Flower Moon",    year: "2023", rating: "7.6", badge: "4K",  image: "/movies/killers_of_the_flower_moon_xxlg.jpg",                   genre: "Drama"       },
  { id: "b15", title: "Masters of the Universe",       year: "2025", rating: "7.2", badge: "NEU", image: "/movies/masters_of_the_universe_xxlg.jpg",                      genre: "Action"      },
  { id: "b16", title: "Lilo & Stitch",                 year: "2025", rating: "7.0", badge: "NEU", image: "/movies/lilo_and_stitch_xlg.jpg",                               genre: "Familie"     },
  { id: "b17", title: "Project Hail Mary",             year: "2025", rating: "8.2", badge: "NEU", image: "/movies/project_hail_mary_xxlg.jpg",                            genre: "Sci-Fi"      },
  { id: "b18", title: "Running Man",                   year: "2025", rating: "7.1", badge: "NEU", image: "/movies/running_man_xxlg.jpg",                                  genre: "Action"      },
  { id: "b19", title: "Avengers: Doomsday",            year: "2026", rating: "9.1", badge: "NEU", image: `${TMDB}/8HkIe2i4ScpCkcX9SzZ9IPasqWV.jpg`,                    genre: "Action"      },
  { id: "b20", title: "Spider-Man: Brand New Day",     year: "2026", rating: "8.7", badge: "NEU", image: `${TMDB}/yyB2VJEW3an2xCdcYCPQhn9QERR.jpg`,                    genre: "Action"      },
  { id: "b21", title: "The Batman Part II",            year: "2026", rating: "8.5", badge: "NEU", image: `${TMDB}/qv4YTyxvaujP79a5XZJ6F4G8Nyi.jpg`,                    genre: "Crime"       },
  { id: "b22", title: "Toy Story 5",                   year: "2026", rating: "8.3", badge: "NEU", image: `${TMDB}/pxG26JdyuiDvJbSoucknaFiLeZD.jpg`,                    genre: "Animation"   },
  { id: "b23", title: "Mandalorian & Grogu",           year: "2026", rating: "8.6", badge: "NEU", image: `${TMDB}/5Vi8dSauVwH1HOsiZceDMbRr1Ca.jpg`,                    genre: "Sci-Fi"      },
  { id: "b24", title: "Fast X: Part 2",                year: "2026", rating: "7.5", badge: "NEU", image: `${TMDB}/zP19YO60jwEsfKd5Qf1UvA5uJu8.jpg`,                    genre: "Action"      },
  { id: "b25", title: "Wicked: Part Two",              year: "2026", rating: "8.4", badge: "NEU", image: `${TMDB}/si9tolnefLSUKaqQEGz1bWArOaL.jpg`,                    genre: "Musical"     },
  { id: "b26", title: "Black Panther 3",               year: "2026", rating: "8.1", badge: "NEU", image: `${TMDB}/sv1xJUazXeYqALzczSZ3O6nkH75.jpg`,                    genre: "Action"      },
  { id: "b27", title: "Gladiator II",                  year: "2024", rating: "7.5", badge: "4K",  image: `${TMDB}/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg`,                    genre: "Action"      },
  { id: "b28", title: "Wicked",                        year: "2024", rating: "7.8", badge: "4K",  image: `${TMDB}/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg`,                    genre: "Musical"     },
];

// ── Row 2: Top International Series ──────────────────────────────────────────
const INTL_SERIES: MovieItem[] = [
  { id: "s1",  title: "House of the Dragon",    year: "2024", rating: "8.4", badge: "4K",  image: `${TMDB}/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg`,  genre: "Fantasy"  },
  { id: "s2",  title: "The Last of Us",         year: "2023", rating: "8.8", badge: "4K",  image: `${TMDB}/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg`,  genre: "Drama"    },
  { id: "s3",  title: "Stranger Things",        year: "2022", rating: "8.7", badge: "HD",  image: `${TMDB}/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg`,  genre: "Sci-Fi"   },
  { id: "s4",  title: "Wednesday",              year: "2022", rating: "8.1", badge: "HD",  image: `${TMDB}/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg`,  genre: "Komödie"  },
  { id: "s5",  title: "Breaking Bad",           year: "2013", rating: "9.5", badge: "4K",  image: `${TMDB}/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg`,  genre: "Thriller" },
  { id: "s6",  title: "Squid Game",             year: "2021", rating: "8.0", badge: "4K",  image: `${TMDB}/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg`,  genre: "Thriller" },
  { id: "s7",  title: "Game of Thrones",        year: "2019", rating: "9.2", badge: "4K",  image: `${TMDB}/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg`,  genre: "Fantasy"  },
  { id: "s8",  title: "Succession",             year: "2023", rating: "8.9", badge: "4K",  image: `${TMDB}/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg`,  genre: "Drama"    },
  { id: "s9",  title: "The Bear",               year: "2024", rating: "8.6", badge: "HD",  image: `${TMDB}/4fVddnbhcmzRZE14NJY03GKS6Fn.jpg`,  genre: "Drama"    },
  { id: "s10", title: "Peaky Blinders",         year: "2022", rating: "8.8", badge: "4K",  image: `${TMDB}/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg`,  genre: "Crime"    },
  { id: "s11", title: "Money Heist",            year: "2021", rating: "8.3", badge: "4K",  image: `${TMDB}/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg`,  genre: "Thriller" },
  { id: "s12", title: "Ozark",                  year: "2022", rating: "8.4", badge: "4K",  image: `${TMDB}/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg`,  genre: "Drama"    },
  { id: "s13", title: "The Crown",              year: "2023", rating: "8.2", badge: "HD",  image: `${TMDB}/1M876KPjulVwppEpldhdc8V4o68.jpg`,  genre: "Drama"    },
  { id: "s14", title: "Ted Lasso",              year: "2023", rating: "8.8", badge: "HD",  image: `${TMDB}/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg`,  genre: "Komödie"  },
  { id: "s15", title: "Severance",              year: "2022", rating: "8.7", badge: "HD",  image: `${TMDB}/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg`,  genre: "Thriller" },
  { id: "s16", title: "Andor",                  year: "2022", rating: "8.4", badge: "4K",  image: `${TMDB}/khZqmwHQicTYoS7Flreb9EddFZC.jpg`,  genre: "Sci-Fi"   },
  { id: "s17", title: "Daredevil: Born Again",  year: "2025", rating: "8.5", badge: "NEU", image: `${TMDB}/AkE7OR1Khpk5OH0d7ZJfcP5Do9b.jpg`,  genre: "Action"   },
  { id: "s18", title: "The Last of Us S2",      year: "2025", rating: "9.0", badge: "NEU", image: `${TMDB}/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg`,  genre: "Drama"    },
  { id: "s19", title: "Alien: Earth",           year: "2025", rating: "7.9", badge: "NEU", image: `${TMDB}/9yBVqNruk6Ykrwc32qskP3eRjV.jpg`,   genre: "Sci-Fi"   },
  { id: "s20", title: "Stranger Things S5",     year: "2025", rating: "9.1", badge: "NEU", image: `${TMDB}/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg`,  genre: "Sci-Fi"   },
  { id: "s21", title: "Squid Game S3",          year: "2025", rating: "8.3", badge: "NEU", image: `${TMDB}/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg`,  genre: "Thriller" },
  { id: "s22", title: "House of Dragon S3",     year: "2026", rating: "8.7", badge: "NEU", image: `${TMDB}/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg`,  genre: "Fantasy"  },
  { id: "s23", title: "White Lotus S3",         year: "2025", rating: "8.5", badge: "NEU", image: `${TMDB}/vYI9YTqYWqbv1QXfkVHW03xqJQQ.jpg`,  genre: "Drama"    },
  { id: "s24", title: "The Penguin",            year: "2024", rating: "8.4", badge: "NEU", image: `${TMDB}/jbNKMPRz2CKFkFHn8RX2AMijl7e.jpg`,  genre: "Crime"    },
  { id: "s25", title: "Andor S2",               year: "2025", rating: "8.8", badge: "NEU", image: `${TMDB}/khZqmwHQicTYoS7Flreb9EddFZC.jpg`,  genre: "Sci-Fi"   },
  { id: "s26", title: "Agatha All Along",       year: "2024", rating: "7.6", badge: "NEU", image: `${TMDB}/2LDfmx1FQcYPLsPOmxUkAJaP7Ew.jpg`,  genre: "Fantasy"  },
];

// ── Row 4: 2026 Most Anticipated ─────────────────────────────────────────────
const HIGHLIGHTS_2026: MovieItem[] = [
  { id: "h1",  title: "Avengers: Doomsday",        year: "2026", rating: "9.1", badge: "NEU", image: `${TMDB}/8HkIe2i4ScpCkcX9SzZ9IPasqWV.jpg`, genre: "Action"    },
  { id: "h2",  title: "Spider-Man: Brand New Day",  year: "2026", rating: "8.7", badge: "NEU", image: `${TMDB}/yyB2VJEW3an2xCdcYCPQhn9QERR.jpg`, genre: "Action"    },
  { id: "h3",  title: "The Batman Part II",         year: "2026", rating: "8.5", badge: "NEU", image: `${TMDB}/qv4YTyxvaujP79a5XZJ6F4G8Nyi.jpg`, genre: "Crime"     },
  { id: "h4",  title: "Mandalorian & Grogu",        year: "2026", rating: "8.6", badge: "NEU", image: `${TMDB}/5Vi8dSauVwH1HOsiZceDMbRr1Ca.jpg`, genre: "Sci-Fi"    },
  { id: "h5",  title: "Toy Story 5",                year: "2026", rating: "8.3", badge: "NEU", image: `${TMDB}/pxG26JdyuiDvJbSoucknaFiLeZD.jpg`, genre: "Animation" },
  { id: "h6",  title: "Wicked: Part Two",           year: "2026", rating: "8.4", badge: "NEU", image: `${TMDB}/si9tolnefLSUKaqQEGz1bWArOaL.jpg`, genre: "Musical"   },
  { id: "h7",  title: "Fast X: Part 2",             year: "2026", rating: "7.5", badge: "NEU", image: `${TMDB}/zP19YO60jwEsfKd5Qf1UvA5uJu8.jpg`, genre: "Action"    },
  { id: "h8",  title: "Black Panther 3",            year: "2026", rating: "8.1", badge: "NEU", image: `${TMDB}/sv1xJUazXeYqALzczSZ3O6nkH75.jpg`, genre: "Action"    },
  { id: "h9",  title: "House of Dragon S3",         year: "2026", rating: "8.7", badge: "NEU", image: `${TMDB}/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg`, genre: "Fantasy"   },
  { id: "h10", title: "Stranger Things S5",         year: "2025", rating: "9.1", badge: "NEU", image: `${TMDB}/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg`, genre: "Sci-Fi"    },
  { id: "h11", title: "Daredevil: Born Again S2",   year: "2026", rating: "8.6", badge: "NEU", image: `${TMDB}/AkE7OR1Khpk5OH0d7ZJfcP5Do9b.jpg`, genre: "Action"    },
  { id: "h12", title: "Squid Game S3",              year: "2025", rating: "8.3", badge: "NEU", image: `${TMDB}/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg`, genre: "Thriller"  },
];

// ── Row 3: Deutsche & Europäische Inhalte (TMDB CDN — verified paths) ─────────
const DE_CONTENT: MovieItem[] = [
  { id: "d1",  title: "Dark",                      year: "2020", rating: "8.8", badge: "4K",  image: `${TMDB}/1DLjjvSWMYo17B7wuz6YikB96hH.jpg`,  genre: "Sci-Fi"   },
  { id: "d2",  title: "Babylon Berlin",             year: "2022", rating: "8.0", badge: "HD",  image: `${TMDB}/jYShWyYllx9DhOS6d92mN2yVsbA.jpg`,  genre: "Krimi"    },
  { id: "d3",  title: "How to Sell Drugs Online",   year: "2021", rating: "7.7", badge: "HD",  image: `${TMDB}/xg7U76h1DNtwa0eBOIbFdiM80DR.jpg`,  genre: "Komödie"  },
  { id: "d4",  title: "Biohackers",                 year: "2021", rating: "7.1", badge: "HD",  image: `${TMDB}/g8HVazVTozhRyc9NcshHokPn3LY.jpg`,  genre: "Sci-Fi"   },
  { id: "d5",  title: "Dogs of Berlin",             year: "2018", rating: "7.3", badge: "HD",  image: `${TMDB}/wOeA0fPtZfNfljUUMFdgl8Lt9La.jpg`,  genre: "Krimi"    },
  { id: "d6",  title: "1899",                       year: "2022", rating: "7.7", badge: "HD",  image: `${TMDB}/gZleGu1MQVBArH2dlpZ9CGi0hhy.jpg`,  genre: "Mystery"  },
  { id: "d7",  title: "The Empress",                year: "2022", rating: "7.4", badge: "HD",  image: `${TMDB}/stcpHqW4U4W3WxklqEEFVhctr4Y.jpg`,  genre: "Drama"    },
  { id: "d8",  title: "Barbaren",                   year: "2022", rating: "7.2", badge: "HD",  image: `${TMDB}/r3cUaeLUGT8c0YIR8qCDDH2iJSU.jpg`,  genre: "Historie" },
  { id: "d9",  title: "Money Heist",                year: "2021", rating: "8.3", badge: "4K",  image: `${TMDB}/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg`,  genre: "Thriller" },
  { id: "d10", title: "Peaky Blinders",             year: "2022", rating: "8.8", badge: "4K",  image: `${TMDB}/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg`,  genre: "Crime"    },
  { id: "d11", title: "Fauda",                      year: "2022", rating: "8.2", badge: "HD",  image: `${TMDB}/qFHzECDLfBHkfNtMpHJPXqSLGFu.jpg`,  genre: "Thriller" },
  { id: "d12", title: "Squid Game S2",              year: "2024", rating: "7.9", badge: "NEU", image: `${TMDB}/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg`,  genre: "Thriller" },
  { id: "d13", title: "Succession",                 year: "2023", rating: "8.9", badge: "4K",  image: `${TMDB}/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg`,  genre: "Drama"    },
  { id: "d14", title: "Breaking Bad",               year: "2013", rating: "9.5", badge: "4K",  image: `${TMDB}/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg`,  genre: "Thriller" },
  { id: "d15", title: "Stranger Things S4",         year: "2022", rating: "8.7", badge: "HD",  image: `${TMDB}/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg`,  genre: "Sci-Fi"   },
  { id: "d16", title: "Wednesday S2",               year: "2025", rating: "8.2", badge: "NEU", image: `${TMDB}/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg`,  genre: "Komödie"  },
];

// ── Poster Card ───────────────────────────────────────────────────────────────
function PosterCard({ m, onClick }: { m: MovieItem; onClick: () => void }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <button
      onClick={onClick}
      className="shrink-0 group relative rounded-xl overflow-hidden cursor-pointer"
      style={{ width: "110px" }}
    >
      <div className="aspect-[2/3] relative overflow-hidden rounded-xl bg-white/5">
        <img
          src={m.image}
          alt={m.title}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imgFailed ? "hidden" : ""}`}
          onError={() => setImgFailed(true)}
        />
        {imgFailed && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3"
            style={{ background: "linear-gradient(145deg, #013d37 0%, #014E45 60%, #016657 100%)" }}
          >
            <span style={{ fontSize: "28px", opacity: 0.25 }}>🎬</span>
            <span className="text-white text-[9px] font-bold text-center leading-tight line-clamp-3">{m.title}</span>
            <span className="text-white/40 text-[7px] font-mono">{m.year}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Hover play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
            <Play className="w-4 h-4 fill-white text-white translate-x-px" />
          </div>
        </div>

        {/* Top badges */}
        <div className="absolute top-1.5 left-1.5 flex flex-col gap-0.5">
          {m.badge && (
            <span className="bg-white text-[#014E45] text-[6px] font-black px-1.5 py-0.5 rounded-full uppercase leading-none">
              {m.badge}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-1.5 right-1.5 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
          <Star className="w-2 h-2 fill-amber-400 text-amber-400" />
          <span className="text-[7px] font-bold text-white font-mono">{m.rating}</span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <p className="text-white text-[9px] font-bold leading-tight line-clamp-2">{m.title}</p>
          <p className="text-white/45 text-[7px] font-mono mt-0.5">{m.year} · {m.genre}</p>
        </div>
      </div>
    </button>
  );
}

// ── Scroll Row ────────────────────────────────────────────────────────────────
function ScrollRow({ items, label, reverse, onClick }: {
  items: MovieItem[];
  label: string;
  reverse?: boolean;
  onClick: () => void;
}) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="mb-5">
      <p className="serif-display italic font-light text-xl text-white/80 mb-2.5 px-1">{label}</p>
      <div className="overflow-hidden -mx-4 md:-mx-6 select-none pointer-events-none">
        <div className={`${reverse ? "animate-scroll-reverse" : "animate-scroll"} flex gap-2.5 px-4`}>
          {tripled.map((m, i) => (
            <div key={`${m.id}-${i}`} className="pointer-events-auto">
              <PosterCard m={m} onClick={onClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function MovieGrid({ onPricingClick }: MovieGridProps) {
  return (
    <section id="movies-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div
        className="rounded-2xl overflow-hidden relative text-white"
        style={{ background: "linear-gradient(145deg, #014E45 0%, #013d37 60%, #012e2a 100%)" }}
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 pt-6 pb-5">

          {/* Header */}
          <div className="flex items-center justify-between mb-6 px-4 md:px-6">
            <div>
              <span className="serif-display italic font-light text-2xl text-white/80 block mb-1">200K+ VOD</span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Filme & Serien.{" "}
                <span className="serif-display italic font-light text-white/85">4K-Qualität.</span>
              </h2>
            </div>
            <button onClick={onPricingClick}
              className="hidden sm:flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[10px] font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap">
              Alles freischalten <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Row 1 — Films (2026 + Blockbusters) */}
          <ScrollRow items={[...HIGHLIGHTS_2026, ...BLOCKBUSTERS]} label="Filme" onClick={onPricingClick} />

          {/* Row 2 — Series (International + German) */}
          <ScrollRow items={[...INTL_SERIES, ...DE_CONTENT]} label="Serien" reverse onClick={onPricingClick} />

          {/* Footer CTA */}
          <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between px-4 md:px-6">
            <p className="text-[9px] font-mono text-white/25">Täglich aktualisiert · 200.000+ Titel verfügbar</p>
            <button onClick={onPricingClick}
              className="flex items-center gap-1.5 bg-white text-[#014E45] text-[10px] font-black px-3.5 py-1.5 rounded-full hover:bg-white/90 transition-all shadow-sm">
              <span>Jetzt IPTV kaufen</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
