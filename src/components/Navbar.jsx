import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Check, Languages } from "lucide-react";

const LOGO_SRC =
  "/src/assets/imags/photo_2026-10-14_15-42-52-removebg-preview.png";

const languages = [
  { code: "UZ", label: "O‘zbek" },
  { code: "RU", label: "Русский" },
  { code: "ENG", label: "English" },
];

const navItems = [
  { to: "/", label: "Bosh sahifa", end: true },
  { to: "/about", label: "Biz haqimizda" },
  { to: "/services", label: "Xizmatlar" },
  { to: "/contact", label: "Aloqa" },
];

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("UZ");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languageRef = useRef(null);

  // Escape bilan yopish
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mobil menyu ochiqligida sahifa scrollini to‘xtatish
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  // Til menyusidan tashqariga bosilganda yopish
  useEffect(() => {
    function handleOutsideClick(event) {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  function handleLanguageChange(code) {
    setSelectedLanguage(code);
    setIsLanguageOpen(false);
    // Keyingi bosqichda tanlangan tilni tarjimalar tizimiga ulaymiz.
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
  }

  const linkStyle = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-[15px] font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-[#35D07F] after:transition-transform after:duration-200 ${
      isActive
        ? "text-white after:scale-x-100"
        : "text-white/75 after:scale-x-0 hover:text-white hover:after:scale-x-100"
    }`;

  return (
    <>
      {/* ASOSIY NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10243A]">
        <nav className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* LOGO (chapda) */}
          <NavLink
            to="/"
            aria-label="Elektroservis MRG bosh sahifasi"
            onClick={closeMobileMenu}
            className="block shrink-0"
          >
            <img
              src={LOGO_SRC}
              alt="Elektroservis MRG"
              className="block h-12 w-auto object-contain sm:h-14 lg:h-16"
            />
          </NavLink>

          {/* O‘NG TOMON: havolalar + til + mobil tugma */}
          <div className="flex items-center gap-2 lg:gap-10">
            {/* DESKTOP HAVOLALAR */}
            <div className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={linkStyle}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* TIL TANLASH */}
              <div ref={languageRef} className="relative">
                <button
                  type="button"
                  aria-label="Tilni almashtirish"
                  aria-haspopup="listbox"
                  aria-expanded={isLanguageOpen}
                  onClick={() => {
                    setIsLanguageOpen((prev) => !prev);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D07F] ${
                    isLanguageOpen
                      ? "bg-white/10 text-[#35D07F]"
                      : "text-white hover:bg-white/10 hover:text-[#35D07F]"
                  }`}
                >
                  <Languages className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* TIL DROPDOWN */}
                <div
                  role="listbox"
                  aria-label="Tillar"
                  aria-hidden={!isLanguageOpen}
                  className={`absolute right-0 top-full z-[70] mt-3 w-44 origin-top-right rounded-2xl bg-white p-1.5 shadow-xl shadow-black/25 transition-[opacity,transform,visibility] duration-150 ease-out ${
                    isLanguageOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-1 scale-95 opacity-0"
                  }`}
                >
                  {languages.map((language) => {
                    const isSelected = selectedLanguage === language.code;

                    return (
                      <button
                        key={language.code}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        tabIndex={isLanguageOpen ? 0 : -1}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors duration-100 ${
                          isSelected
                            ? "bg-[#F1F5F9] font-medium text-[#10243A]"
                            : "text-[#10243A]/85 hover:bg-[#F1F5F9]"
                        }`}
                      >
                        {language.label}

                        {isSelected && (
                          <Check
                            className="h-4 w-4 text-[#35D07F]"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MOBIL HAMBURGER */}
              <button
                type="button"
                aria-label={
                  isMobileMenuOpen ? "Menyuni yopish" : "Menyuni ochish"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => {
                  setIsMobileMenuOpen((prev) => !prev);
                  setIsLanguageOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 hover:text-[#35D07F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35D07F] lg:hidden"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span
                    className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 ${
                      isMobileMenuOpen
                        ? "translate-y-0 rotate-45"
                        : "-translate-y-1.5 rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-opacity duration-150 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 ${
                      isMobileMenuOpen
                        ? "translate-y-0 -rotate-45"
                        : "translate-y-1.5 rotate-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBIL TO‘LIQ EKRAN MENYUSI */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          tabIndex={isMobileMenuOpen ? 0 : -1}
          aria-label="Menyuni yopish"
          onClick={closeMobileMenu}
          className={`absolute inset-0 h-full w-full bg-black/40 transition-opacity duration-200 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          id="mobile-navigation"
          className={`absolute inset-0 flex flex-col bg-[#10243A] px-6 pb-8 pt-[100px] transition-[opacity,transform] duration-200 ease-out sm:px-10 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-white/[0.07] py-5 text-xl font-medium transition-colors duration-150 sm:text-2xl ${
                    isActive
                      ? "text-[#35D07F]"
                      : "text-white/85 hover:text-[#35D07F]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBIL TIL TANLASH */}
          <div className="mt-auto pt-8">
            <div className="grid grid-cols-3 gap-2">
              {languages.map((language) => {
                const isSelected = selectedLanguage === language.code;

                return (
                  <button
                    key={language.code}
                    type="button"
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`rounded-full border py-3 text-sm font-medium transition-colors duration-150 ${
                      isSelected
                        ? "border-[#35D07F] bg-[#35D07F]/10 text-[#35D07F]"
                        : "border-white/15 text-white/75 hover:border-[#35D07F]/60 hover:text-[#35D07F]"
                    }`}
                  >
                    {language.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
