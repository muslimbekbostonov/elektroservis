import { Link, NavLink } from "react-router-dom";
import { Phone, Send } from "lucide-react";
// import { Mail } from "lucide-react"; // EMAIL — vaqtincha olib turilgan

// Logo import qilinadi — shunda build'dan keyin ham to'g'ri yo'l bilan chiqadi
import logo from "../assets/imags/photo_2026-10-14_15-42-52-removebg-preview.png";

// ====== MA'LUMOTLARNI SHU YERDA O'ZGARTIRING ======
// Bo'sh qoldirilgan qiymatlar "#" havolasi bilan ko'rinadi.
const CONTACT = {
  phoneText: "+998 90 304 04 29",
  phoneHref: "tel:+998903040429",
  // EMAIL — vaqtincha olib turilgan
  // emailText: "info@example.com",
  // emailHref: "mailto:info@example.com",
  instagramHref: "https://www.instagram.com/elektroservis_mrg",
  telegramHref: "https://t.me/elektroservismrg",
};

const features = [
  "Binolar va sanoat obyektlari uchun kompleks elektr yechimlari.",
  "Quyosh elektr stansiyalari va zaryadlash infratuzilmasi.",
  "Har bir loyihada aniqlik, sifat va xavfsizlik.",
];

const pages = [
  { to: "/", label: "Bosh sahifa", end: true },
  { to: "/about", label: "Biz haqimizda" },
  { to: "/services", label: "Xizmatlar" },
  { to: "/contact", label: "Aloqa" },
];

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

const socials = [
  { label: "Instagram", href: CONTACT.instagramHref, icon: InstagramIcon },
  { label: "Telegram", href: CONTACT.telegramHref, icon: Send },
];

const contacts = [
  {
    label: "Telefon",
    value: CONTACT.phoneText,
    href: CONTACT.phoneHref,
    icon: Phone,
  },
  // EMAIL — vaqtincha olib turilgan
  // {
  //   label: "Elektron pochta",
  //   value: CONTACT.emailText,
  //   href: CONTACT.emailHref,
  //   icon: Mail,
  // },
];

const pageLinkStyle = ({ isActive }) =>
  `inline-block py-1 text-sm transition-colors duration-200 ${
    isActive ? "text-[#35D07F]" : "text-[#B8C7D6] hover:text-white"
  }`;

const headingStyle = "text-sm font-semibold text-white";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#10243A] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 sm:pt-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LOGO VA TAVSIF */}
          <div className="col-span-2 lg:col-span-5">
            <Link
              to="/"
              aria-label="Elektroservis MRG bosh sahifasi"
              className="hidden w-fit sm:block"
            >
              <img
                className="block h-16 w-auto max-w-full shrink-0 object-contain lg:h-[72px]"
                src={logo}
                alt="Elektroservis MRG"
              />
            </Link>

            <ul className="max-w-sm space-y-3 sm:mt-6">
              {features.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-sm leading-6 text-[#B8C7D6]"
                >
                  <span
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#35D07F]"
                    aria-hidden="true"
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* SAHIFALAR */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 lg:col-start-7">
            <h3 className={headingStyle}>Sahifalar</h3>

            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:mt-5 sm:grid-cols-1 sm:gap-y-2">
              {pages.map((page) => (
                <li key={page.to}>
                  <NavLink
                    to={page.to}
                    end={page.end}
                    className={pageLinkStyle}
                  >
                    {page.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ALOQA */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h3 className={headingStyle}>Biz bilan bog‘laning</h3>

            <ul className="mt-5 space-y-4 sm:mt-6">
              {contacts.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href || "#"}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35D07F]/10 text-[#35D07F] ring-1 ring-[#35D07F]/20 transition-colors duration-200 group-hover:bg-[#35D07F] group-hover:text-[#10243A]">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs text-white/50">
                        {item.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-white transition-colors duration-200 group-hover:text-[#35D07F]">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="text-sm text-[#B8C7D6]">
                Bizni kuzatib boring
              </span>

              <div className="flex gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    target={social.href ? "_blank" : undefined}
                    rel={social.href ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#35D07F] hover:bg-[#35D07F] hover:text-[#10243A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D07F]"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12">
          <p className="text-center text-sm leading-6 text-[#C9D6E2]">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Elektroservis MRG.</span>{" "}
            Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
