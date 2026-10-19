import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Phone, Wrench, Zap } from "lucide-react";

// Tez havolalar: foydalanuvchi qayerga o'tishi mumkinligini ko'rsatadi
const quickLinks = [
  {
    to: "/",
    icon: Home,
    title: "Bosh sahifa",
    text: "Kompaniya va asosiy xizmatlar",
  },
  {
    to: "/services",
    icon: Wrench,
    title: "Xizmatlar",
    text: "Elektromontaj, quyosh panellari va boshqalar",
  },
  {
    to: "/contact",
    icon: Phone,
    title: "Aloqa",
    text: "Telefon, Telegram va Instagram",
  },
];

function NotFound() {
  // Brauzer tabidagi sarlavha va Google uchun "bu sahifani indekslama" belgisi
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Sahifa topilmadi | Elektroservis MRG";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, []);

  return (
    <main className="relative isolate overflow-hidden bg-[#10243A] text-white">
      {/* Fon: yengil to'r chiziqlar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
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
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#2D9CDB]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full bg-[#35D07F]/15 blur-[100px]"
      />

      <div className="mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[calc(100svh-82px)] sm:px-6 md:py-24">
        <div className="max-w-3xl">
          {/* Belgi */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#35D07F]/50 bg-white/5 py-1.5 pl-1.5 pr-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#35D07F] text-[#0B1A2B]">
              <Zap className="h-4 w-4" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Xato 404
            </span>
          </div>

          {/* Katta 404: o'rtadagi "0" chaqmoq bilan almashtirilgan */}
          <p
            aria-hidden="true"
            className="mt-8 flex items-center text-[6.5rem] font-extrabold leading-none tracking-tight sm:text-[9rem] md:text-[11rem]"
          >
            <span>4</span>
            <span className="mx-1 flex h-[0.78em] w-[0.62em] items-center justify-center rounded-[0.16em] border-[0.06em] border-[#35D07F]/70 text-[#35D07F]">
              <Zap className="h-[0.45em] w-[0.45em]" fill="currentColor" />
            </span>
            <span>4</span>
          </p>

          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Bu sahifada{" "}
            <span className="bg-gradient-to-r from-[#35D07F] to-[#65C3F0] bg-clip-text text-transparent">
              tok yo‘q.
            </span>
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-[#C1D0DF] sm:text-lg sm:leading-8">
            Siz qidirgan sahifa topilmadi: u o‘chirilgan, ko‘chirilgan yoki
            manzil noto‘g‘ri yozilgan bo‘lishi mumkin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#35D07F] px-7 py-3.5 font-semibold text-[#0B1A2B] transition-colors hover:bg-white"
            >
              Bosh sahifaga qaytish
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Biz bilan bog‘lanish
            </Link>
          </div>
        </div>

        {/* Tez havolalar */}
        <ul className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4">
          {quickLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#35D07F]/40 hover:bg-white/[0.06] sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35D07F]/15 text-[#35D07F] transition-colors duration-300 group-hover:bg-[#35D07F] group-hover:text-[#0B1A2B]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{item.title}</span>
                  <span className="mt-0.5 block text-sm leading-5 text-[#B8C7D6]">
                    {item.text}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#35D07F]"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default NotFound;
