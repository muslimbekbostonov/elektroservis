import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("UZ");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languageRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const languages = ["UZ", "RU", "ENG"];

  const navItems = [
    { to: "/", label: "Bosh sahifa", end: true },
    { to: "/about", label: "Biz haqimizda" },
    { to: "/services", label: "Xizmatlar" },
    { to: "/contact", label: "Aloqa" },
  ];

  // Menyu ochiq bo‘lsa, Escape bilan yopish
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Mobil menyu ochilganda orqa sahifa scrollini to‘xtatish
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

  // Til tanlash
  function handleLanguageChange(language) {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);

    // Keyingi bosqichda tanlangan tilni tarjimalar tizimiga ulaymiz.
  }

  // Havola bosilganda mobil menyuni yopish
  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
  }

  const linkStyle = ({ isActive }) =>
    `whitespace-nowrap py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-[#35D07F]" : "text-white/85 hover:text-[#35D07F]"
    }`;

  return (
    <>
      {/* ASOSIY NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10243A]">
        <nav className="mx-auto grid h-[82px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
          {/* LOGO */}
          <div className="min-w-0 justify-self-start">
            <NavLink
              to="/"
              aria-label="Elektroservis MRG bosh sahifasi"
              onClick={closeMobileMenu}
              className="block"
            >
              <img
                src="/src/assets/imags/photo_2026-10-14_15-42-52-removebg-preview.png"
                alt="Elektroservis MRG"
                className="block h-12 w-auto object-contain sm:h-14 lg:h-16"
              />
            </NavLink>
          </div>

          {/* DESKTOP NAVIGATSIYA */}
          <div className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
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

          {/* O‘NG TOMON: TIL VA MOBIL TUGMA */}
          <div className="flex items-center justify-self-end gap-2 sm:gap-3">
            {/* TIL TANLASH */}
            <div ref={languageRef} className="relative">
              <button
                type="button"
                aria-label="Tilni almashtirish"
                aria-expanded={isLanguageOpen}
                onClick={() => {
                  setIsLanguageOpen((prev) => !prev);
                  setIsMobileMenuOpen(false);
                }}
                className={`group inline-flex h-10 items-center gap-2 rounded-md border px-3 text-xs font-semibold transition-colors duration-150 sm:h-11 sm:px-3.5 sm:text-sm ${
                  isLanguageOpen
                    ? "border-[#35D07F]/60 bg-[#35D07F]/10 text-[#35D07F]"
                    : "border-white/15 text-white hover:border-[#35D07F]/60 hover:text-[#35D07F]"
                }`}
              >
                {selectedLanguage}

                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-150 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    d="m7 10 5 5 5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* TIL DROPDOWN */}
              <div
                className={`absolute right-0 top-full z-[70] mt-2 w-24 origin-top-right rounded-lg border border-white/10 bg-[#10243A] p-1 shadow-xl shadow-black/20 transition-[opacity,transform,visibility] duration-150 ease-out ${
                  isLanguageOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-1 scale-95 opacity-0"
                }`}
                aria-hidden={!isLanguageOpen}
              >
                {languages.map((language) => {
                  const isSelected = selectedLanguage === language;

                  return (
                    <button
                      key={language}
                      type="button"
                      tabIndex={isLanguageOpen ? 0 : -1}
                      onClick={() => handleLanguageChange(language)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm transition-colors duration-100 ${
                        isSelected
                          ? "bg-[#35D07F]/10 font-semibold text-[#35D07F]"
                          : "text-white/80 hover:bg-white/[0.05] hover:text-[#35D07F]"
                      }`}
                    >
                      {language}

                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F]" />
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
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors duration-200 hover:border-[#35D07F]/60 hover:text-[#35D07F] lg:hidden sm:h-11 sm:w-11"
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
        </nav>
      </header>

      {/* MOBIL TO‘LIQ EKRAN MENYUSI */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Orqa fon */}
        <button
          type="button"
          tabIndex={isMobileMenuOpen ? 0 : -1}
          aria-label="Menyuni yopish"
          onClick={closeMobileMenu}
          className={`absolute inset-0 h-full w-full bg-black/40 transition-opacity duration-200 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menyu paneli */}
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className={`absolute inset-0 flex flex-col bg-[#10243A] px-6 pb-8 pt-[100px] transition-[opacity,transform] duration-200 ease-out sm:px-10 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          {/* Menyu sarlavhasi */}
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-white/45">
              ELEKTROSERVIS MRG
            </span>

            <span className="h-1 w-8 rounded-full bg-[#35D07F]" />
          </div>

          {/* Navigatsiya havolalari */}
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `group flex items-center gap-4 border-b border-white/[0.07] py-5 text-xl font-medium transition-colors duration-150 sm:text-2xl ${
                    isActive
                      ? "text-[#35D07F]"
                      : "text-white/85 hover:text-[#35D07F]"
                  }`
                }
              >
                <span className="w-6 text-xs font-normal text-white/30">
                  0{index + 1}
                </span>

                <span>{item.label}</span>

                <svg
                  className="ml-auto h-5 w-5 opacity-0 transition-all duration-150 group-hover:translate-x-1 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            ))}
          </nav>

          {/* MOBIL TIL TANLASH */}
          <div className="mt-auto pt-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
              Til
            </p>

            <div className="grid grid-cols-3 gap-2">
              {languages.map((language) => {
                const isSelected = selectedLanguage === language;

                return (
                  <button
                    key={language}
                    type="button"
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                    onClick={() => handleLanguageChange(language)}
                    className={`rounded-md border py-3 text-sm font-semibold transition-colors duration-150 ${
                      isSelected
                        ? "border-[#35D07F] bg-[#35D07F]/10 text-[#35D07F]"
                        : "border-white/15 text-white/75 hover:border-[#35D07F]/60 hover:text-[#35D07F]"
                    }`}
                  >
                    {language}
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-white/35">Elektroservis MRG</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
