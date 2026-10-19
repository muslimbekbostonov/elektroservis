import { MapPin, Phone, Send, Truck } from "lucide-react";

// ====== ALOQA MA'LUMOTLARI — SHU YERDA O'ZGARTIRING ======
// Bo'sh qoldirilgan havolalar bosilmaydigan holatda ko'rinadi.
const CONTACT = {
  phoneText: "+998 90 304 04 29",
  phoneHref: "tel:+998903040429",
  telegramText: "@Hondamir_mamajonov",
  telegramHref: "https://t.me/Hondamir_mamajonov",
  instagramText: "@elektroservis_mrg",
  instagramHref: "https://www.instagram.com/elektroservis_mrg",
};

// ===== RASM =====
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

const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85";

const heroImage = imageMap["texnik-xizmat"] ?? FALLBACK_HERO;

const hideOnError = (event) => {
  event.currentTarget.style.display = "none";
};

// Instagram ikonkasi (lucide'da brend ikonkalari yo'q)
function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

// ===== ALOQA KANALLARI =====
const channels = [
  {
    icon: Phone,
    label: "Telefon",
    value: CONTACT.phoneText,
    href: CONTACT.phoneHref,
  },
  {
    icon: Send,
    label: "Telegram",
    value: CONTACT.telegramText,
    href: CONTACT.telegramHref,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACT.instagramText,
    href: CONTACT.instagramHref,
    external: true,
  },
];

const steps = [
  {
    title: "Murojaat qilasiz",
    text: "Qo‘ng‘iroq qiling yoki Telegram orqali vazifani qisqacha yozing.",
  },
  {
    title: "Mutaxassis bog‘lanadi",
    text: "Obyekt turi, hajmi va kerakli ishlar aniqlashtiriladi.",
  },
  {
    title: "Obyekt ko‘rigi",
    text: "Qaysi hududda bo‘lishingizdan qat’i nazar, mutaxassis joyga borib, yechim va smeta taklif qiladi.",
  },
];

const pad = (n) => String(n).padStart(2, "0");

function Contact() {
  return (
    <main className="bg-[#F4F7FA] text-[#10243A]">
      {/* ===== 1. HERO ===== */}
      <section className="relative isolate overflow-hidden bg-[#0B1A2B] text-white">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          onError={hideOnError}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Faqat chap tomon qorayadi (matn uchun), o'ng tomonda rasm ochiq ko'rinadi */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1A2B]/90 via-[#0B1A2B]/55 to-transparent"
        />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#35D07F]">
              <span className="h-px w-10 bg-[#35D07F]" aria-hidden="true" />
              Aloqa
            </p>

            <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight sm:mt-6 sm:text-4xl md:text-6xl">
              Biz bilan <span className="text-[#35D07F]">bog‘laning</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#E2EAF2] sm:mt-6 sm:text-lg sm:leading-8">
              Savollaringiz yoki loyihangiz bo‘yicha qulay usulda murojaat
              qiling — mutaxassisimiz sizga kerakli yechimni taklif qiladi.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-[#0B1A2B]/50 py-2 pl-2 pr-4 backdrop-blur-md sm:mt-8 sm:rounded-full sm:pr-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#35D07F] text-[#0B1A2B]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-5">
                O‘zbekistonning istalgan hududida xizmat ko‘rsatamiz
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. ALOQA ===== */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 md:py-16">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {channels.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            const linkProps = item.href
              ? {
                  href: item.href,
                  ...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {};

            return (
              <Wrapper
                key={item.label}
                {...linkProps}
                className="group flex items-center gap-4 rounded-2xl border border-[#DCE5ED] bg-white p-4 transition-colors sm:p-5 duration-300 hover:border-[#2D9CDB]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F4FC] text-[#2D9CDB] transition-colors duration-300 group-hover:bg-[#2D9CDB] group-hover:text-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm text-[#64778A]">
                    {item.label}
                  </span>
                  <span className="block truncate text-lg font-semibold">
                    {item.value}
                  </span>
                </span>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* ===== 3. MUROJAAT JARAYONI + XIZMAT HUDUDI ===== */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-20 md:pb-24">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-5">
          {/* Jarayon */}
          <div className="relative overflow-hidden rounded-3xl bg-[#10243A] p-6 text-white sm:p-8 md:p-10 lg:col-span-2">
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: -90,
                top: -90,
                width: 260,
                height: 260,
                borderRadius: "50%",
                background: "rgba(53,208,127,0.18)",
                filter: "blur(70px)",
                pointerEvents: "none",
              }}
            />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#35D07F]">
                Qanday ishlaydi
              </p>
              <h2 className="mt-4 text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                Murojaatdan keyin nima bo‘ladi?
              </h2>

              <ol className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#35D07F]/50 text-sm font-semibold text-[#35D07F]">
                      {pad(index + 1)}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#B8C7D6]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Xizmat hududi */}
          <div className="relative flex overflow-hidden rounded-3xl border border-[#DCE5ED] bg-white p-6 sm:p-8 md:p-10 lg:col-span-3">
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.6,
                backgroundImage:
                  "radial-gradient(rgba(16,36,58,0.07) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                pointerEvents: "none",
              }}
            />

            <div className="relative flex flex-col justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#35D07F] text-[#0B1A2B]">
                <Truck className="h-7 w-7" aria-hidden="true" />
              </span>

              <h2 className="mt-5 text-xl font-bold leading-tight sm:mt-6 sm:text-2xl md:text-3xl">
                Istalgan hududga borib,{" "}
                <span className="text-[#2D9CDB]">ishni joyida bitkazamiz</span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#64778A]">
                Obyektingiz qayerda joylashganidan qat’i nazar — shahar
                markazidami yoki chekka tumandami — jamoamiz o‘sha yerga borib,
                ishni boshidan oxirigacha bajaradi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
