import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Clock, Wrench, Zap } from "lucide-react";
import ChaildServis from "../components/ChaildServis";

// Hero fon rasmlari (har 6 soniyada almashadi).
// Rasm almashtirmoqchi bo'lsangiz, faqat `src` ni o'zgartiring.
// `tint` — rasm juda och bo'lsa, matn o'qilishi uchun yengil qoplama (bo'sh = qoplamasiz).
const HERO_SLIDES = [
  {
    // 1. Quyosh energiyasi tizimlari
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90",
    tint: "",
  },
  {
    // 2. Elektromobillarni zaryadlash infratuzilmasi
    src: "https://images.pexels.com/photos/9799724/pexels-photo-9799724.jpeg?auto=compress&cs=tinysrgb&w=2200",
    tint: "bg-[#10243A]/15",
  },
  {
    // 3. Kompleks elektromontaj va elektr ta'minoti (yuqori kuchlanish liniyalari)
    src: "https://images.pexels.com/photos/28912010/pexels-photo-28912010/free-photo-of-high-voltage-power-lines-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=2200",
    tint: "",
  },
];

const HERO_INTERVAL = 6000;

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, HERO_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const heroTags = [
    "Elektr montaj",
    "Elektr ta’minoti",
    "Yoritish tizimlari",
    "Quyosh panellari",
    "Elektromobillar uchun zaryadlash stansiyalari",
  ];

  return (
    <main className="overflow-hidden bg-white text-[#10243A]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#10243A] text-white">
        {/* Fon rasmlari: ma'lum vaqtda silliq almashadi */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt=""
                className="h-full w-full object-cover"
              />
              {slide.tint && (
                <div className={`absolute inset-0 ${slide.tint}`} />
              )}
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Kompaniya belgisi: ikonka bilan */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#35D07F]/50 bg-[#10243A]/55 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#35D07F] text-[#0B1A2B]">
                <Zap
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">
                Elektroservis MRG
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.6)] md:text-7xl lg:text-8xl">
              Elektr tizimlarida
              <span className="block bg-gradient-to-r from-[#35D07F] via-[#65C3F0] to-[#2D9CDB] bg-clip-text pb-2 text-transparent">
                yangi standart.
              </span>
            </h1>

            {/* Xizmatlar — hoverli kapsulalar */}
            <ul className="mt-9 flex max-w-3xl flex-wrap gap-2.5">
              {heroTags.map((tag) => (
                <li
                  key={tag}
                  className="cursor-default rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-medium text-[#10243A] shadow-sm shadow-black/10 transition-colors duration-200 hover:bg-white md:text-[15px]"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* Ko‘rsatkichlar */}
            <div className="mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
              {[
                { value: "15+", label: "Yillik tajriba", icon: Clock },
                {
                  value: "250+",
                  label: "Bitkazilgan obyektlar",
                  icon: Building2,
                },
                { value: "10+", label: "Xizmat turlari", icon: Wrench },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 rounded-2xl border border-white/25 bg-[#10243A]/55 px-4 py-4 shadow-lg shadow-black/20 backdrop-blur-md"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#35D07F]/20 text-[#35D07F]">
                    <stat.icon className="h-7 w-7" aria-hidden="true" />
                  </span>

                  <div>
                    <p className="text-4xl font-semibold leading-none tracking-tight md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-base text-white/90">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChaildServis />

      {/* KOMPANIYA HAQIDA */}
      <section className="bg-[#10243A] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#65C3F0]">
              Elektroservis MRG
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Har bir detal muhim. Har bir loyiha mas’uliyatdir.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[#C1D0DF]">
              Elektr tizimlarida to‘g‘ri rejalashtirish, sifatli montaj va
              xavfsizlik talablariga rioya qilish muhim. Biz har bir loyihaning
              texnik ehtiyojlariga mos yechimlarni tanlashga intilamiz.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#65C3F0] transition hover:text-white"
            >
              Kompaniya haqida
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* YAKUNIY CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-[#E5F4FC] px-7 py-12 md:px-14 md:py-16">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D9CDB]">
                Keyingi qadam
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                Loyihangiz uchun yechim izlayapsizmi?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#64778A]">
                Biz bilan bog‘laning va loyihangiz haqida batafsil gaplashamiz.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#2D9CDB] px-7 py-4 font-semibold text-white transition hover:bg-[#2186C0]"
            >
              Biz bilan bog‘laning
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
