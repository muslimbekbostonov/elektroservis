import { Link } from "react-router-dom";
import Map from "../components/Map";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardList,
  Eye,
  Factory,
  Handshake,
  House,
  Landmark,
  Package,
  PencilRuler,
  PlugZap,
  Ruler,
  ShieldCheck,
  Store,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

// ===== RASMLAR =====
// Avval src/assets/services/ papkasidagi o'z rasmlaringiz olinadi (nomlari pastda).
// Topilmasa, internetdagi zaxira rasm ishlatiladi.
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

const FALLBACK_LINES =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85";

const photo = (name, fallback) => imageMap[name] ?? fallback;

const heroImage = photo("elektromontaj", FALLBACK_LINES);

const heroHighlights = [
  {
    icon: PencilRuler,
    title: "Loyihalash",
    text: "Yuklama hisobi, sxemalar va texnik yechimlar.",
  },
  {
    icon: Wrench,
    title: "Montaj",
    text: "Elektr tarmoqlari, quyosh va zaryadlash tizimlari.",
  },
  {
    icon: Activity,
    title: "Xizmat ko‘rsatish",
    text: "Diagnostika, ta’mirlash va modernizatsiya.",
  },
];

// Rasm ochilmasa, o'zini yashiradi (orqadagi gradient ko'rinadi)
const hideOnError = (event) => {
  event.currentTarget.style.display = "none";
};

// ===== MA'LUMOTLAR =====
const directions = [
  {
    icon: Wrench,
    title: "Elektromontaj va elektr ta’minoti",
    text: "Ichki va tashqi tarmoqlar, kabel liniyalari, taqsimlash shitlari, podstansiyalar va yerga ulash tizimlari.",
  },
  {
    icon: Sun,
    title: "Quyosh energetikasi",
    text: "Xonadon, biznes va sanoat obyektlari uchun quyosh elektr stansiyalarini loyihalash va o‘rnatish.",
  },
  {
    icon: PlugZap,
    title: "Zaryadlash infratuzilmasi",
    text: "Elektromobillar uchun zaryadlash stansiyalarini tanlash, tarmoqqa ulash va ishga tushirish.",
  },
  {
    icon: Activity,
    title: "Texnik xizmat va modernizatsiya",
    text: "Mavjud tizimlarni diagnostika qilish, nosozliklarni bartaraf etish va quvvatini oshirish.",
  },
];

const steps = [
  {
    icon: Eye,
    title: "Obyektni ko‘rish",
    text: "Mutaxassis joyga borib, mavjud tarmoq va talablarni o‘rganadi.",
  },
  {
    icon: PencilRuler,
    title: "Loyiha va hisob-kitob",
    text: "Yuklama hisoblanadi, sxema va xarajatlar smetasi tayyorlanadi.",
  },
  {
    icon: Package,
    title: "Uskuna tanlash",
    text: "Loyihaga mos, sertifikatlangan material va jihozlar tanlanadi.",
  },
  {
    icon: Zap,
    title: "Montaj va ishga tushirish",
    text: "Ishlar me’yorlar asosida bajariladi, tizim sinovdan o‘tkaziladi.",
  },
  {
    icon: ClipboardList,
    title: "Topshirish va servis",
    text: "Obyekt hujjatlari bilan topshiriladi, keyin ham xizmat ko‘rsatamiz.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Xavfsizlik",
    text: "Elektr bilan ishlashda kichik xato ham qimmatga tushadi. Shuning uchun har bir ulanish tekshiriladi.",
  },
  {
    icon: Ruler,
    title: "Aniqlik",
    text: "Kabel kesimidan tortib avtomat nominaligacha — hammasi hisob-kitob asosida tanlanadi.",
  },
  {
    icon: Handshake,
    title: "Ochiqlik",
    text: "Smeta, muddat va ish jarayoni haqida mijoz oldindan aniq ma’lumotga ega bo‘ladi.",
  },
  {
    icon: Activity,
    title: "Uzoq muddatlilik",
    text: "Biz bugun ishlaydigan emas, yillar davomida muammosiz ishlaydigan tizim quramiz.",
  },
];

const clients = [
  { icon: Factory, label: "Sanoat korxonalari" },
  { icon: Building2, label: "Tijorat binolari" },
  { icon: Store, label: "Savdo va xizmat obyektlari" },
  { icon: Landmark, label: "Davlat tashkilotlari" },
  { icon: House, label: "Xususiy uylar" },
];

const pad = (n) => String(n).padStart(2, "0");

function About() {
  return (
    <main className="bg-white text-[#10243A]">
      {/* ===== 1. HERO: to'liq kenglikdagi rasm + pastki ma'lumot paneli ===== */}
      <section className="relative isolate overflow-hidden bg-[#0B1A2B] text-white">
        {/* Fon rasmi */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          onError={hideOnError}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Chapdan o'ngga qoraygan qoplama: matn o'qilishi uchun */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1A2B] via-[#0B1A2B]/85 to-[#0B1A2B]/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B1A2B] via-transparent to-transparent"
        />

        <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col justify-between px-5 pt-14 sm:min-h-[560px] sm:px-6 sm:pt-20 md:min-h-[640px] md:pt-28">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#35D07F]">
              <span className="h-px w-10 bg-[#35D07F]" aria-hidden="true" />
              Biz haqimizda
            </p>

            <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight sm:mt-6 sm:text-4xl md:text-6xl">
              Elektr energiyasini xavfsiz va{" "}
              <span className="text-[#35D07F]">ishonchli</span> qilamiz.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#C1D0DF] sm:mt-6 sm:text-lg sm:leading-8">
              Binolar, korxonalar va xususiy uylar uchun elektr tizimlarini
              loyihalaymiz, o‘rnatamiz va ularga xizmat ko‘rsatamiz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#35D07F] px-7 py-3.5 font-semibold text-[#0B1A2B] transition-colors hover:bg-white"
              >
                Xizmatlarimiz
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Bog‘lanish
              </Link>
            </div>
          </div>

          {/* Pastki panel: ishning uch asosiy qismi */}
          <ul className="mt-12 grid border-t border-white/15 sm:mt-16 md:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <li
                key={item.title}
                className={`flex items-start gap-4 py-5 sm:py-7 md:px-8 ${
                  index === 0 ? "md:pl-0" : "md:border-l md:border-white/15"
                } ${index > 0 ? "border-t border-white/15 md:border-t-0" : ""}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#35D07F] ring-1 ring-white/15">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#B8C7D6]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Map />

      {/* ===== 2. KOMPANIYA HAQIDA ===== */}
      <section className="bg-[#F4F7FA]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:py-24">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D9CDB]">
            <span className="h-px w-8 bg-[#2D9CDB]" aria-hidden="true" />
            Kompaniya
          </p>

          <div className="mt-6 max-w-5xl">
            <p className="text-xl font-medium leading-[1.55] text-[#10243A] sm:text-2xl sm:leading-[1.6] md:text-[28px]">
              Elektroservis MRG — elektr montaj va energetika sohasida
              ishlaydigan jamoa. Biz kichik xonadondan tortib yirik sanoat
              obyektigacha bo‘lgan loyihalarda{" "}
              <span className="text-[#2D9CDB]">
                elektr tizimini to‘liq tsikl bo‘yicha
              </span>{" "}
              olib boramiz.
            </p>

            <div className="mt-8 grid gap-6 border-t border-[#DCE5ED] pt-8 sm:mt-10 sm:gap-8 sm:pt-10 md:grid-cols-2">
              <p className="leading-7 text-[#526A80] sm:leading-8">
                Ishimiz obyektni ko‘zdan kechirishdan boshlanadi. Har bir
                binoning yuklamasi, kabel yo‘llari va xavfsizlik talablari
                turlicha — shuning uchun tayyor shablon emas, aynan shu obyektga
                mos yechim tayyorlaymiz.
              </p>

              <p className="leading-7 text-[#526A80] sm:leading-8">
                Quyosh energetikasi va elektromobillarni zaryadlash
                infratuzilmasiga alohida e’tibor qaratamiz. Bu yo‘nalishlar
                mijozlarga elektr xarajatlarini kamaytirish va zamonaviy
                talablarga moslashish imkonini beradi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. YO'NALISHLAR ===== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            Asosiy yo‘nalishlarimiz
          </h2>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-semibold text-[#10243A] transition-colors hover:text-[#2D9CDB]"
          >
            Barcha xizmatlar
            <ArrowUpRight
              className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul className="mt-8 border-t border-[#DCE5ED] sm:mt-12">
          {directions.map((item, index) => (
            <li key={item.title}>
              <Link
                to="/services"
                className="group grid items-center gap-3 border-b border-[#DCE5ED] py-6 transition-colors duration-300 hover:bg-[#F4F7FA] sm:gap-4 sm:py-7 md:grid-cols-12 md:gap-6 md:px-4"
              >
                <span className="text-sm font-semibold text-[#2D9CDB] md:col-span-1">
                  {pad(index + 1)}
                </span>

                <span className="flex items-center gap-4 md:col-span-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F4FC] text-[#2D9CDB] transition-colors duration-300 group-hover:bg-[#2D9CDB] group-hover:text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-lg font-semibold leading-snug sm:text-xl">
                    {item.title}
                  </span>
                </span>

                <span className="leading-7 text-[#64778A] md:col-span-5">
                  {item.text}
                </span>

                <span className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowRight
                    className="h-5 w-5 text-[#9AAABB] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2D9CDB]"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== 4. ISH JARAYONI ===== */}
      <section className="relative overflow-hidden bg-[#10243A] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#35D07F]/10 blur-[110px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#35D07F]">
              Ish jarayoni
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Murojaatdan tayyor obyektgacha
            </h2>
            <p className="mt-4 leading-8 text-[#B8C7D6]">
              Har bir loyiha aniq bosqichlar asosida olib boriladi — mijoz qaysi
              bosqichda nima bo‘layotganini doim biladi.
            </p>
          </div>

          <ol className="relative mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 md:grid-cols-5 md:gap-6">
            {/* Bosqichlarni bog'lovchi chiziq (desktop) */}
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#35D07F]/60 via-white/15 to-white/5 md:block"
            />

            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#35D07F]/50 bg-[#10243A] text-[#35D07F]">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <p className="mt-6 text-xs font-semibold tracking-widest text-white/50">
                  {pad(index + 1)}-BOSQICH
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#B8C7D6]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 5. TAMOYILLAR ===== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2D9CDB]">
              Tamoyillarimiz
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Ishimizga qanday yondashamiz
            </h2>
            <p className="mt-4 leading-8 text-[#64778A]">
              Elektr tizimi ko‘rinmaydi, lekin binoning har bir burchagi unga
              bog‘liq. Shuning uchun quyidagi qoidalardan chetga chiqmaymiz.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {principles.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#DCE5ED] bg-white p-6 transition sm:p-7 duration-300 hover:-translate-y-1 hover:border-[#2D9CDB] hover:shadow-xl hover:shadow-[#10243A]/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#35D07F]/15 text-[#178A4C] transition-colors duration-300 group-hover:bg-[#35D07F] group-hover:text-[#0B1A2B]">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold sm:mt-6">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#64778A]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. MIJOZLAR ===== */}
      <section className="border-y border-[#DCE5ED] bg-[#F4F7FA]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#64778A]">
            Kimlar bilan ishlaymiz
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
            {clients.map((client) => (
              <li
                key={client.label}
                className="flex items-center gap-2.5 rounded-full border border-[#DCE5ED] bg-white py-1.5 pl-1.5 pr-4 text-sm font-medium sm:gap-3 sm:py-2 sm:pl-2 sm:pr-5 sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F4FC] text-[#2D9CDB]">
                  <client.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {client.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 7. CTA ===== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#10243A] px-5 py-10 text-white sm:px-7 sm:py-14 md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#2D9CDB]/25 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#35D07F]/20 blur-[90px]"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Obyektingiz uchun elektr yechimi kerakmi?
              </h2>
              <p className="mt-4 leading-8 text-[#C1D0DF]">
                Vazifani qisqacha yozib qoldiring — mutaxassisimiz siz bilan
                bog‘lanib, keyingi qadamlarni tushuntirib beradi.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#35D07F] px-7 py-3.5 font-semibold text-[#0B1A2B] transition-colors hover:bg-white"
              >
                Bog‘lanish
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Xizmatlar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
