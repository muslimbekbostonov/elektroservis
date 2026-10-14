import { Link } from "react-router-dom";

function Footer() {
  const linkStyle = "transition-colors duration-200 hover:text-[#35D07F]";

  return (
    <footer className="bg-[#10243A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* Logo va kompaniya haqida */}
          <div>
            <Link
              to="/"
              aria-label="Elektroservis MRG bosh sahifasi"
              className="inline-block"
            >
              <img
                className="h-16 w-auto object-contain"
                src="/src/assets/imags/photo_2026-10-14_15-42-52-removebg-preview.png"
                alt="Elektroservis MRG"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#B8C7D6]">
              Binolar va inshootlar uchun elektr montaj, elektr ta’minoti hamda
              yoritish tizimlari bo‘yicha professional xizmatlar.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#35D07F]" />
              <span className="text-xs font-medium tracking-wide text-[#B8C7D6]">
                SIFAT VA ISHONCHLILIK
              </span>
            </div>
          </div>

          {/* Sahifalar */}
          <div className="md:pl-8">
            <h3 className="mb-5 text-base font-semibold">Sahifalar</h3>

            <ul className="space-y-4 text-sm text-[#B8C7D6]">
              <li>
                <Link to="/" className={linkStyle}>
                  Bosh sahifa
                </Link>
              </li>

              <li>
                <Link to="/about" className={linkStyle}>
                  Biz haqimizda
                </Link>
              </li>

              <li>
                <Link to="/services" className={linkStyle}>
                  Xizmatlar
                </Link>
              </li>

              <li>
                <Link to="/contact" className={linkStyle}>
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="mb-5 text-base font-semibold">
              Biz bilan bog‘laning
            </h3>

            <ul className="space-y-4 text-sm text-[#B8C7D6]">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-white/50">
                  Telefon
                </span>
                <span className="transition-colors hover:text-[#35D07F]">
                  +998 XX XXX XX XX
                </span>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-white/50">
                  Elektron pochta
                </span>
                <span className="transition-colors hover:text-[#35D07F]">
                  info@example.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs leading-6 text-[#8FA3B8]">
            © {new Date().getFullYear()} Elektroservis MRG. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
