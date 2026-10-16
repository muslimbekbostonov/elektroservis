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
  PlugZap,
  RefreshCw,
  Ruler,
  ShieldCheck,
  Sun,
  UtilityPole,
  Wrench,
} from "lucide-react";

// Rasmlar: src/assets/services/ papkasida, nomi quyidagi `image` bilan bir xil bo'lishi kerak
// (kengaytma: jpg, jpeg, png, webp yoki avif). Hero'dagi bilan bir xil nomlar ishlatilgan,
// shuning uchun bitta rasm ikkala joyda ham ishlaydi.
// Rasm topilmasa, o'rniga ikonkali chiroyli fon ko'rinadi.
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

function Services() {
  return (
    <main className="bg-[#F4F7FA] text-[#10243A]">
      {/* SARLAVHA */}
      <section className="relative overflow-hidden bg-[#10243A] text-white">
        {/* Yengil nuqtali to'r va yorug'lik */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(53,208,127,0.18)",
            filter: "blur(90px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Bizning xizmatlar
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C1D0DF]">
            Biz sanoat korxonalari, yirik tashkilotlar va xususiy obyektlar
            uchun zamonaviy elektr ta’minoti, montaj va muhandislik yechimlarini
            taklif etamiz.
          </p>
        </div>
      </section>

      {/* XIZMATLAR RO'YXATI */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const photo = imageMap[service.image];

            return (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#DCE5ED] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#2D9CDB] hover:shadow-xl hover:shadow-[#10243A]/10"
              >
                {/* RASM (topilmasa, ikonkali fon) */}
                <div
                  style={{
                    position: "relative",
                    height: 176,
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, #1B3A5C 0%, #10243A 100%)",
                  }}
                >
                  {photo ? (
                    <>
                      <img
                        src={photo}
                        alt={service.title}
                        loading="lazy"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        className="transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                      <span
                        style={{
                          position: "absolute",
                          left: 14,
                          top: 14,
                          width: 40,
                          height: 40,
                        }}
                        className="flex items-center justify-center rounded-xl bg-white/90 text-[#2D9CDB] shadow-sm backdrop-blur-sm"
                      >
                        <service.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </>
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{ width: 72, height: 72 }}
                        className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#35D07F] transition-transform duration-500 group-hover:scale-110"
                      >
                        <service.icon className="h-8 w-8" aria-hidden="true" />
                      </span>
                    </div>
                  )}
                </div>

                {/* MATN */}
                <div style={{ padding: "20px 22px 24px" }}>
                  <h2 className="text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-[#2D9CDB]">
                    {service.title}
                  </h2>

                  <p
                    style={{ marginTop: 8 }}
                    className="text-sm leading-6 text-[#64778A]"
                  >
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BOG'LANISHGA CHAQIRIQ */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[#E5F4FC] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Loyihangizni muhokama qilamizmi?
            </h2>

            <p className="mt-3 text-[#64778A]">
              Kerakli xizmat bo‘yicha biz bilan bog‘laning.
            </p>
          </div>

          <Link
            to="/contact"
            style={{ gap: 10, padding: "14px 28px" }}
            className="group inline-flex shrink-0 items-center justify-center rounded-xl bg-[#10243A] font-semibold text-white transition-colors duration-300 hover:bg-[#2D9CDB]"
          >
            Bog‘lanish
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
