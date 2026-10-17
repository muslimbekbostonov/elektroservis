import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Cable,
  CloudLightning,
  Cpu,
  Factory,
  House,
  LayoutGrid,
  Lightbulb,
  MessageCircle,
  PlugZap,
  RefreshCw,
  Ruler,
  ShieldCheck,
  Sun,
  UtilityPole,
  Wrench,
} from "lucide-react";

// ===== RASMLAR =====
// Har bir xizmatning rasmi pastdagi ro'yxatda, o'sha xizmatning `image` maydonida turadi.
// Rasmni almashtirish: `image` ga boshqa havola yozing yoki o'z faylingizni import qiling:
//   import quyoshImg from "../assets/services/quyosh-panellari.jpg";
//   ... image: quyoshImg,
// Rasm ochilmasa, kartochkada ikonka ko'rinadi.

// Wikimedia Commons rasmi (ochiq litsenziyali) — fayl nomi bo'yicha
const wiki = (fileName) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1200`;

// Hero fon rasmi
const heroImage =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85";

const hideOnError = (event) => {
  event.currentTarget.style.display = "none";
};

// ===== YO'NALISHLAR (filtr) =====
const categories = [
  { id: "all", label: "Barchasi" },
  { id: "energy", label: "Yangi energetika" },
  { id: "install", label: "Elektromontaj" },
  { id: "supply", label: "Ta’minot va himoya" },
  { id: "service", label: "Xizmat va loyiha" },
];

const categoryLabel = Object.fromEntries(
  categories.map((item) => [item.id, item.label]),
);

// ===== XIZMATLAR =====
const services = [
  {
    title: "Quyosh panellarini o‘rnatish",
    description: "Quyosh elektr stansiyalarini o‘rnatish va ishga tushirish.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    category: "energy",
  },
  {
    title: "Elektromobillar uchun zaryadlash stansiyalari",
    description: "Zaryadlash qurilmalarini o‘rnatish va ulash.",
    icon: PlugZap,
    image:
      "https://images.pexels.com/photos/24376862/pexels-photo-24376862/free-photo-of-electric-car-while-charging.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "energy",
  },
  {
    title: "Elektromontaj ishlari",
    description: "Elektr uskunalari va tizimlarini o‘rnatish.",
    icon: Wrench,
    image: wiki("Electrician Working.jpg"),
    category: "install",
  },
  {
    title: "Ichki elektr montaji",
    description: "Bino va inshootlarning ichki elektr tarmoqlarini o‘rnatish.",
    icon: House,
    image: wiki("Electrical-wiring-rough-in.jpg"),
    category: "install",
  },
  {
    title: "Tashqi elektr montaji",
    description: "Tashqi elektr tarmoqlari va kabel liniyalarini yotqizish.",
    icon: UtilityPole,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    category: "install",
  },
  {
    title: "Kabel liniyalari",
    description: "Kuch kabellarini yotqizish, ulash va montaj qilish.",
    icon: Cable,
    image: wiki("ABB High Voltage Cables.jpg"),
    category: "install",
  },
  {
    title: "Yoritish tizimlari",
    description: "Ichki va tashqi yoritish uskunalarini o‘rnatish.",
    icon: Lightbulb,
    image: wiki("LED streetlight.JPG"),
    category: "install",
  },
  {
    title: "Transformator podstansiyalari",
    description: "Podstansiyalarni o‘rnatish, ulash va ishga tushirish.",
    icon: Cpu,
    image: wiki("Transformer 110 kV 20 kV.jpg"),
    category: "supply",
  },
  {
    title: "Sanoat elektr ta’minoti",
    description:
      "Korxona va yirik tashkilotlar uchun elektr ta’minoti tizimlarini qurish va montaj qilish.",
    icon: Factory,
    image: wiki("Electrical switchgear.JPG"),
    category: "supply",
  },
  {
    title: "Elektr taqsimlash qurilmalari",
    description:
      "Elektr shitlari, taqsimlash panellari va avtomatlarni o‘rnatish.",
    icon: LayoutGrid,
    image: wiki("Eaton circuit breaker panel open.JPG"),
    category: "supply",
  },
  {
    title: "Yerga ulash (zazemleniya)",
    description: "Himoya yerga ulash va elektr xavfsizligi tizimlari.",
    icon: ShieldCheck,
    image: wiki("HomeEarthRodAustralia1.jpg"),
    category: "supply",
  },
  {
    title: "Chaqmoqdan himoya tizimlari",
    description:
      "Binolarni chaqmoq urishidan himoyalash tizimlarini o‘rnatish.",
    icon: CloudLightning,
    image: wiki(
      "Lightning protection system for building with pavilion roof.jpg",
    ),
    category: "supply",
  },
  {
    title: "Elektr uskunalariga texnik xizmat ko‘rsatish",
    description: "Diagnostika, nosozliklarni aniqlash va ta’mirlash.",
    icon: Activity,
    image:
      "https://images.pexels.com/photos/17842843/pexels-photo-17842843/free-photo-of-a-man-maintaining-an-inverter.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "service",
  },
  {
    title: "Elektr tarmoqlarini modernizatsiya qilish",
    description: "Mavjud elektr tizimlarini yangilash va quvvatini oshirish.",
    icon: RefreshCw,
    image: wiki(
      "Installation of cables in the switchgear room of a power sub-station in Queens. (CS179, 09-17-2018) (43916808045).jpg",
    ),
    category: "service",
  },
  {
    title: "Loyiha va texnik yechimlar",
    description:
      "Elektr ta’minoti tizimlarini loyihalash va texnik hisob-kitoblar.",
    icon: Ruler,
    image: wiki("PV-system-schematics-residential-Eng.png"),
    category: "service",
  },
];

const pad = (n) => String(n).padStart(2, "0");

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const countFor = (id) =>
    id === "all"
      ? services.length
      : services.filter((service) => service.category === id).length;

  return (
    <main className="bg-[#F4F7FA] text-[#10243A]">
      {/* ===== 1. HERO ===== */}
      <section className="relative isolate overflow-hidden bg-[#0B1A2B] text-white">
        {/* Fon rasmi */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          onError={hideOnError}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#35D07F]">
              <span className="h-px w-10 bg-[#35D07F]" aria-hidden="true" />
              Xizmatlar
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              Elektr tizimlari uchun{" "}
              <span className="text-[#35D07F]">to‘liq xizmat</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#E2EAF2]">
              Sanoat korxonalari, yirik tashkilotlar va xususiy obyektlar uchun
              elektr ta’minoti, montaj va muhandislik yechimlari — loyihadan
              ishga tushirishgacha.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 2. XIZMATLAR RO'YXATI ===== */}
      <section
        id="xizmatlar"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:py-20"
      >
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Barcha xizmatlarimiz
            </h2>
            <p className="mt-3 text-[#64778A]">
              Yo‘nalishni tanlang yoki to‘liq ro‘yxatni ko‘rib chiqing.
            </p>
          </div>

          {/* Filtr tugmalari */}
          <div
            role="tablist"
            aria-label="Xizmat yo‘nalishlari"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {categories.map((item) => {
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(item.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-[#10243A] bg-[#10243A] text-white"
                      : "border-[#DCE5ED] bg-white text-[#10243A] hover:border-[#2D9CDB] hover:text-[#2D9CDB]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      isActive
                        ? "bg-[#35D07F] text-[#0B1A2B]"
                        : "bg-[#F4F7FA] text-[#64778A]"
                    }`}
                  >
                    {countFor(item.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Kartochkalar */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#DCE5ED] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#2D9CDB] hover:shadow-xl hover:shadow-[#10243A]/10"
            >
              {/* Rasm */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#1B3A5C] to-[#10243A]">
                {/* Zaxira: ikonka (rasm ochilmasa ko'rinadi) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#35D07F]">
                    <service.icon className="h-9 w-9" aria-hidden="true" />
                  </span>
                </div>

                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={hideOnError}
                    className="absolute inset-0 h-full w-full bg-white object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                )}

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#10243A] backdrop-blur-sm">
                  {categoryLabel[service.category]}
                </span>
                <span className="absolute right-4 top-4 text-sm font-semibold text-white/80">
                  {pad(index + 1)}
                </span>
              </div>

              {/* Matn: ikonka chapda, sarlavha va tavsif yonida */}
              <div className="flex flex-1 items-start gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F4FC] text-[#2D9CDB] transition-colors duration-300 group-hover:bg-[#2D9CDB] group-hover:text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-[#2D9CDB]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#64778A]">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== 3. BOG'LANISHGA CHAQIRIQ ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-[#CFE6F5] bg-gradient-to-r from-[#E5F4FC] via-[#EEF8FD] to-[#E9F9F0] px-7 py-10 md:px-12 md:py-12">
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
                <h2 className="text-2xl font-bold md:text-3xl">
                  Loyihangizni muhokama qilamizmi?
                </h2>
                <p className="mt-2 text-[#64778A]">
                  Kerakli xizmat bo‘yicha biz bilan bog‘laning.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#10243A] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#10243A]/15 transition-colors duration-300 hover:bg-[#2D9CDB]"
            >
              Bog‘lanish
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

export default Services;
