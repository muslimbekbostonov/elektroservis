import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Cable,
  Clock,
  CloudLightning,
  Cpu,
  Factory,
  House,
  LayoutGrid,
  Lightbulb,
  PlugZap,
  RefreshCw,
  Ruler,
  ShieldCheck,
  Sun,
  UtilityPole,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

// `image` — rasm fayli nomi (kengaytmasiz). Rasmlar: src/assets/services/ papkasida.
// Masalan: image: "quyosh-panellari"  →  src/assets/services/quyosh-panellari.jpg
// Fayl bo‘lmasa, o‘rniga ikonkali fon ko‘rinadi.
const services = [
  {
    title: "Quyosh panellarini o‘rnatish",
    description: "Quyosh elektr stansiyalarini o‘rnatish va ishga tushirish.",
    icon: Sun,
    image: "quyosh-panellari",
  },
  {
    title: "Elektromobillar uchun zaryadlash stansiyalari",
    description: "Zaryadlash qurilmalarini o‘rnatish va ulash.",
    icon: PlugZap,
    image: "zaryadlash",
  },
  {
    title: "Elektromontaj ishlari",
    description: "Elektr uskunalari va tizimlarini o‘rnatish.",
    icon: Wrench,
    image: "elektromontaj",
  },
  {
    title: "Transformator podstansiyalari",
    description: "Podstansiyalarni o‘rnatish, ulash va ishga tushirish.",
    icon: Cpu,
    image: "podstansiya",
  },
  {
    title: "Yerga ulash (zazemleniya)",
    description: "Himoya yerga ulash va elektr xavfsizligi tizimlari.",
    icon: ShieldCheck,
    image: "yerga-ulash",
  },
  {
    title: "Ichki elektr montaji",
    description: "Bino va inshootlarning ichki elektr tarmoqlarini o‘rnatish.",
    icon: House,
    image: "ichki-montaj",
  },
  {
    title: "Tashqi elektr montaji",
    description: "Tashqi elektr tarmoqlari va kabel liniyalarini yotqizish.",
    icon: UtilityPole,
    image: "tashqi-montaj",
  },
  {
    title: "Sanoat elektr ta’minoti",
    description:
      "Korxona va yirik tashkilotlar uchun elektr ta’minoti tizimlarini qurish va montaj qilish.",
    icon: Factory,
    image: "sanoat",
  },
  {
    title: "Kabel liniyalari",
    description: "Kuch kabellarini yotqizish, ulash va montaj qilish.",
    icon: Cable,
    image: "kabel",
  },
  {
    title: "Yoritish tizimlari",
    description: "Ichki va tashqi yoritish uskunalarini o‘rnatish.",
    icon: Lightbulb,
    image: "yoritish",
  },
  {
    title: "Chaqmoqdan himoya tizimlari",
    description:
      "Binolarni chaqmoq urishidan himoyalash tizimlarini o‘rnatish.",
    icon: CloudLightning,
    image: "chaqmoq",
  },
  {
    title: "Elektr taqsimlash qurilmalari",
    description:
      "Elektr shitlari, taqsimlash panellari va avtomatlarni o‘rnatish.",
    icon: LayoutGrid,
    image: "taqsimlash",
  },
  {
    title: "Elektr uskunalariga texnik xizmat ko‘rsatish",
    description: "Diagnostika, nosozliklarni aniqlash va ta’mirlash.",
    icon: Activity,
    image: "texnik-xizmat",
  },
  {
    title: "Elektr tarmoqlarini modernizatsiya qilish",
    description: "Mavjud elektr tizimlarini yangilash va quvvatini oshirish.",
    icon: RefreshCw,
    image: "modernizatsiya",
  },
  {
    title: "Loyiha va texnik yechimlar",
    description:
      "Elektr ta’minoti tizimlarini loyihalash va texnik hisob-kitoblar.",
    icon: Ruler,
    image: "loyiha",
  },
];

// src/assets/services/ ichidagi barcha rasmlarni avtomatik topadi
const imageFiles = import.meta.glob(
  "../assets/services/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" },
);

const imageMap = Object.fromEntries(
  Object.entries(imageFiles).map(([path, url]) => [
    path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, ""),
    url,
  ]),
);

const slides = services.map((service) => ({
  ...service,
  imageUrl: imageMap[service.image] ?? null,
}));

const stats = [
  {
    value: "15+",
    label: "Yillik tajriba",
    icon: Clock,
    card: "border-[#DCE5ED] bg-white text-[#10243A]",
    iconBox: "bg-[#E5F4FC] text-[#2D9CDB]",
    labelColor: "text-[#64778A]",
  },
  {
    value: "250+",
    label: "Mijozlar bilan hamkorlik",
    icon: Users,
    card: "border-[#10243A] bg-[#10243A] text-white",
    iconBox: "bg-[#35D07F]/15 text-[#35D07F]",
    labelColor: "text-[#B8C7D6]",
  },
];

const arrowButton =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#35D07F] hover:bg-[#35D07F] hover:text-[#10243A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D07F]";

const pad = (n) => String(n).padStart(2, "0");

function Hero() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="relative overflow-hidden bg-[#F4F7FA]">
      {/* Fon bezaklari */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16,36,58,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-[#35D07F]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2D9CDB]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
        {/* ===== CHAP TOMON ===== */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#35D07F]/30 bg-[#35D07F]/10 px-3 py-1 text-xs font-medium text-[#178A4C] md:text-sm">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Elektroservis MRG
          </div>

          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#10243A] md:text-5xl">
            Elektr tizimlarida{" "}
            <span className="text-[#2D9CDB]">yangi standart</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-[#526A80]">
            Binolar va inshootlar uchun elektr montaj, elektr ta’minoti va
            yoritish tizimlari bo‘yicha professional yechimlar.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl border p-4 ${stat.card}`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.iconBox}`}
                >
                  <stat.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>

                <p className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p className={`mt-1 text-sm ${stat.labelColor}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== O‘NG TOMON: SLAYDER ===== */}
        <div
          className="overflow-hidden rounded-2xl bg-[#10243A] shadow-xl shadow-[#10243A]/15"
          role="region"
          aria-roledescription="slayder"
          aria-label="Xizmat turlari"
        >
          {/* Yuqori qism: faqat rasm */}
          <div className="relative h-[240px] md:h-[340px]">
            {slides.map((service, index) => (
              <div
                key={service.title}
                aria-hidden={index !== current}
                className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                {service.imageUrl ? (
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1B3A5C] to-[#10243A]">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#35D07F]">
                      <service.icon className="h-10 w-10" aria-hidden="true" />
                    </span>
                  </div>
                )}
              </div>
            ))}

            <span className="absolute right-3 top-3 rounded-full bg-[#10243A]/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {pad(current + 1)} / {pad(total)}
            </span>
          </div>

          {/* Pastki qism: to‘q fon, tavsif va strelkalar */}
          <div className="border-t-2 border-[#35D07F] px-5 py-5 md:px-6">
            <div className="grid">
              {slides.map((service, index) => (
                <div
                  key={service.title}
                  aria-hidden={index !== current}
                  className={`col-start-1 row-start-1 flex items-start gap-3.5 transition-opacity duration-500 motion-reduce:transition-none ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#35D07F]/15 text-[#35D07F]">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div>
                    <h2 className="text-base font-semibold leading-snug text-white md:text-lg">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-[#B8C7D6]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4">
              {/* Progress */}
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#35D07F] transition-all duration-500 motion-reduce:transition-none"
                  style={{ width: `${((current + 1) / total) * 100}%` }}
                />
              </div>

              {/* Strelkalar */}
              <div className="flex gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
