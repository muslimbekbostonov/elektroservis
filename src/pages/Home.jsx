import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Clock,
  MapPin,
  MessageCircle,
  Wrench,
  Zap,
} from "lucide-react";
import ChaildServis from "../components/ChaildServis";
import AboutChaild from "../components/AboutChaild";
import Banner from "../components/Banner";
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
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNneK3JLHZVrcB1usiQp_h_QZYLTiTdP-ZQ9Hsa_gdveQzPfacW5FiPpLX&s=10",
    tint: "bg-[#10243A]/15",
  },
  {
    // 3. Kompleks elektromontaj va elektr ta'minoti (yuqori kuchlanish liniyalari)
    src: "https://www.norma.uz/img/89/a3/a6fa97fb171829f39f96f2e34eb9.png",
    tint: "",
  },
];

const HERO_INTERVAL = 6000;

const HERO_TAGS = [
  "Elektr montaj",
  "Elektr ta’minoti",
  "Yoritish tizimlari",
  "Quyosh panellari",
  "Elektromobillar uchun zaryadlash stansiyalari",
];

const HERO_STATS = [
  { value: "15+", label: "Yillik tajriba", icon: Clock },
  { value: "250+", label: "Bitkazilgan obyektlar", icon: Building2 },
  { value: "10+", label: "Xizmat turlari", icon: Wrench },
  { value: "14", label: "Hududning barchasida ishlaymiz", icon: MapPin },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, HERO_INTERVAL);

    return () => clearInterval(timer);
  }, []);

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
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
              {slide.tint && (
                <div className={`absolute inset-0 ${slide.tint}`} />
              )}
            </div>
          ))}
          {/* Faqat telefonda: matn rasm ustida o'qilishi uchun yengil qoraytirish */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#10243A]/45 via-[#10243A]/25 to-[#10243A]/60 sm:hidden" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Kompaniya belgisi: ikonka bilan */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#35D07F]/50 bg-[#10243A]/55 py-1.5 pl-1.5 pr-4 backdrop-blur-sm sm:mb-7">
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

            <h1 className="text-[2.5rem] font-extrabold leading-[1.08] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.6)] sm:text-6xl md:text-7xl lg:text-8xl">
              Elektr tizimlarida
              <span className="block bg-gradient-to-r from-[#35D07F] via-[#65C3F0] to-[#2D9CDB] bg-clip-text pb-2 text-transparent">
                yangi standart.
              </span>
            </h1>

            {/* Xizmatlar — hoverli kapsulalar */}
            <ul className="mt-6 flex max-w-3xl flex-wrap gap-2 sm:mt-9 sm:gap-2.5">
              {HERO_TAGS.map((tag) => (
                <li
                  key={tag}
                  className="cursor-default rounded-full border border-white/30 bg-white/90 px-3.5 py-1.5 text-[13px] font-medium text-[#10243A] shadow-sm shadow-black/10 transition-colors duration-200 hover:bg-white sm:px-4 sm:py-2 sm:text-sm md:text-[15px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Ko‘rsatkichlar: telefonda 2x2, planshetda 2 ustun, desktopda 4 ustun */}
          <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/25 bg-[#10243A]/55 p-4 shadow-lg shadow-black/20 backdrop-blur-md sm:flex-row sm:items-center sm:gap-5 sm:px-5 sm:py-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#35D07F]/20 text-[#35D07F] sm:h-14 sm:w-14">
                  <stat.icon
                    className="h-5 w-5 sm:h-7 sm:w-7"
                    aria-hidden="true"
                  />
                </span>

                <div className="min-w-0">
                  <p className="text-3xl font-semibold leading-none tracking-tight sm:text-4xl md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm leading-5 text-white/90 sm:mt-2 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChaildServis />
      <Banner />
      <AboutChaild />

      {/* YAKUNIY CTA */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[#CFE6F5] bg-gradient-to-r from-[#E5F4FC] via-[#EEF8FD] to-[#E9F9F0] px-5 py-8 sm:px-7 sm:py-10 md:px-12 md:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(16,36,58,0.08) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2D9CDB] shadow-sm sm:flex">
                <MessageCircle className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-bold leading-snug sm:text-2xl md:text-3xl">
                  Loyihangiz uchun yechim izlayapsizmi?
                </h2>
                <p className="mt-2 text-[#64778A]">
                  Biz bilan bog‘laning va loyihangiz haqida batafsil
                  gaplashamiz.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#10243A] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#10243A]/15 transition-colors duration-300 hover:bg-[#2D9CDB] md:w-auto"
            >
              Biz bilan bog‘laning
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
