import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ABOUT_POINTS, ABOUT_SLIDES } from "../data/aboutSlides";

// Slayd almashish vaqti (ms). Ma'lumotlar va rasmlar: src/data/aboutSlides.js
const SLIDE_INTERVAL = 5000;

const slides = ABOUT_SLIDES;
const points = ABOUT_POINTS;

// Rasm ochilmasa, o'zini yashiradi (ostidagi ikonkali fon ko'rinadi)
const hideOnError = (event) => {
  event.currentTarget.style.display = "none";
};

const arrowButton =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#10243A]/50 text-white backdrop-blur-md transition-colors duration-200 hover:border-[#35D07F] hover:bg-[#35D07F] hover:text-[#0B1A2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D07F]";

const pad = (n) => String(n).padStart(2, "0");

function AboutChaild() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length;

  // Avtomatik almashadi; strelka bosilganda taymer qaytadan boshlanadi
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timer);
  }, [current, isPaused, total]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="relative overflow-hidden bg-[#10243A] text-white">
      {/* Fon: yengil to'r chiziqlar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Fon: yorug'lik dog'lari */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#2D9CDB]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#35D07F]/15 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        {/* ===== CHAP: XIZMATLAR SLAYDERI ===== */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Burchak bezaklari */}
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-28 w-28 rounded-tr-3xl border-r-2 border-t-2 border-[#35D07F]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-28 w-28 rounded-bl-3xl border-b-2 border-l-2 border-[#2D9CDB]/60"
          />

          <div
            role="region"
            aria-roledescription="slayder"
            aria-label="Xizmat turlari"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative h-[360px] overflow-hidden rounded-3xl bg-[#0B1A2B] ring-1 ring-white/10 md:h-[480px]"
          >
            {/* Rasmlar */}
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                aria-hidden={index !== current}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1B3A5C] to-[#0B1A2B] pb-24">
                  <span className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#35D07F]">
                    <slide.icon className="h-12 w-12" aria-hidden="true" />
                  </span>
                </div>

                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={hideOnError}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
            ))}

            {/* Pastki qoplama: matn o'qilishi uchun */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1A2B]/95 via-[#0B1A2B]/25 to-transparent" />

            {/* Hisoblagich */}
            <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#10243A]/60 px-3 py-1 text-xs font-semibold tracking-wider backdrop-blur-md">
              {pad(current + 1)} / {pad(total)}
            </span>

            {/* Pastki qism: xizmat nomi va strelkalar */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="flex items-end justify-between gap-4">
                {/* Sarlavhalar bir joyda ustma-ust turadi, faqat faoli ko'rinadi */}
                <div className="grid min-w-0 flex-1">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.title}
                      aria-hidden={index !== current}
                      className={`col-start-1 row-start-1 flex items-start gap-3 transition-all duration-500 motion-reduce:transition-none ${
                        index === current
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#35D07F] text-[#0B1A2B]">
                        <slide.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug md:text-lg">
                          {slide.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#C1D0DF]">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Oldingi xizmat"
                    className={arrowButton}
                  >
                    <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Keyingi xizmat"
                    className={arrowButton}
                  >
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Progress chizig'i */}
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-[#35D07F] transition-all duration-500 motion-reduce:transition-none"
                  style={{ width: `${((current + 1) / total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== O'NG: MATN ===== */}
        <div>
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#65C3F0]">
            <span className="h-px w-10 bg-[#35D07F]" aria-hidden="true" />
            Elektroservis MRG
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Har bir detal muhim.
            <span className="mt-1 block bg-gradient-to-r from-[#35D07F] to-[#65C3F0] bg-clip-text pb-1 text-transparent">
              Har bir loyiha — mas’uliyat.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[#C1D0DF]">
            Elektr tizimlarida to‘g‘ri rejalashtirish, sifatli montaj va
            xavfsizlik talablariga rioya qilish muhim. Biz har bir loyihaning
            texnik ehtiyojlariga mos yechimlarni tanlashga intilamiz.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li
                key={point.title}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#35D07F]/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35D07F]/15 text-[#35D07F] transition-colors duration-300 group-hover:bg-[#35D07F] group-hover:text-[#0B1A2B]">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#B8C7D6]">
                    {point.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#35D07F] px-7 py-3.5 font-semibold text-[#0B1A2B] transition-colors duration-300 hover:bg-white"
          >
            Kompaniya haqida
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutChaild;
