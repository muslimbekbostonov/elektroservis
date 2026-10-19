import { useEffect, useRef, useState } from "react";
import { MapPin, Truck } from "lucide-react";
import { UZ_REGIONS } from "../data/uzbekistanRegions";

// =====================================================================
// MAP — "O'zbekistonning istalgan hududiga borib ishlaymiz" bo'limi.
// Istalgan sahifada chaqiriladi:
//   import Map from "../components/Map";
//   <Map />
// Xarita ma'lumotlari: src/data/uzbekistanRegions.js
// =====================================================================

// Har bir hudud navbat bilan yoritiladi (ms)
const CYCLE_INTERVAL = 1800;

const mapCss = `
@keyframes uzm-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes uzm-fill { from { fill-opacity: 0; } to { fill-opacity: 1; } }
@keyframes uzm-pop { 0% { transform: scale(0); } 70% { transform: scale(1.25); } 100% { transform: scale(1); } }
@keyframes uzm-pulse { 0% { transform: scale(0.6); opacity: 0.8; } 100% { transform: scale(2.8); opacity: 0; } }
.uzm-region { stroke-dasharray: 1; stroke-dashoffset: 1; fill-opacity: 0; transition: fill 0.45s ease; -webkit-tap-highlight-color: transparent; }
.uzm-started .uzm-region { animation: uzm-draw 1.4s ease forwards, uzm-fill 0.8s ease forwards; }
.uzm-dot, .uzm-ring { transform-box: fill-box; transform-origin: center; }
.uzm-dot { transform: scale(0); }
.uzm-started .uzm-dot { animation: uzm-pop 0.5s ease forwards; }
.uzm-ring { opacity: 0; }
.uzm-started .uzm-ring { animation: uzm-pulse 2.4s ease-out infinite; }
/* Telefonda SVG kichrayib, nom o'qib bo'lmas darajada mayda bo'ladi — pastdagi qatorda ko'rinadi */
.uzm-label { display: none; }
@media (min-width: 640px) { .uzm-label { display: inline; } }
@media (prefers-reduced-motion: reduce) {
  .uzm-region, .uzm-started .uzm-region { animation: none; stroke-dashoffset: 0; fill-opacity: 1; }
  .uzm-dot, .uzm-started .uzm-dot { animation: none; transform: none; }
  .uzm-started .uzm-ring { animation: none; opacity: 0; }
}
`;

function UzbekistanSvg() {
  const wrapperRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const total = UZ_REGIONS.length;

  // Xarita ekranga chiqqanda animatsiya boshlanadi
  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Hududlar navbat bilan yoritiladi (sichqoncha ustida bo'lsa to'xtaydi)
  useEffect(() => {
    if (!started || isHovering) return;

    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % total);
    }, CYCLE_INTERVAL);

    return () => clearTimeout(timer);
  }, [started, isHovering, active, total]);

  const activeRegion = UZ_REGIONS[active];

  return (
    <div ref={wrapperRef}>
      <style>{mapCss}</style>

      <svg
        viewBox="0 0 800 500"
        role="img"
        aria-label="O‘zbekiston xaritasi: barcha hududlarda xizmat ko‘rsatiladi"
        className={started ? "uzm-started" : undefined}
        style={{ display: "block", width: "100%", height: "auto" }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setIsHovering(false);
        }}
      >
        {UZ_REGIONS.map((region, index) => {
          const isActive = index === active;

          return (
            <path
              key={region.id}
              d={region.d}
              pathLength="1"
              className="uzm-region"
              fill={isActive ? "#2D9CDB" : "#E5F4FC"}
              stroke={isActive ? "#10243A" : "#2D9CDB"}
              strokeWidth={isActive ? 1.6 : 1.1}
              strokeLinejoin="round"
              style={{
                cursor: "pointer",
                animationDelay: `${index * 0.12}s, ${0.6 + index * 0.12}s`,
              }}
              // Sichqoncha: ustiga kelganda yoritiladi va aylanish to'xtaydi
              onPointerEnter={(event) => {
                if (event.pointerType !== "mouse") return;
                setIsHovering(true);
                setActive(index);
              }}
              // Telefon: bosilganda shu hudud tanlanadi, aylanish davom etadi
              onClick={() => setActive(index)}
            >
              <title>{region.name}</title>
            </path>
          );
        })}

        {UZ_REGIONS.map((region, index) => {
          const isActive = index === active;
          const delay = 1.4 + index * 0.08;

          return (
            <g key={`${region.id}-dot`} style={{ pointerEvents: "none" }}>
              <circle
                className="uzm-ring"
                cx={region.cx}
                cy={region.cy}
                r="6"
                fill="none"
                stroke="#35D07F"
                strokeWidth="2"
                style={{ animationDelay: `${delay + (index % 4) * 0.6}s` }}
              />
              <circle
                className="uzm-dot"
                cx={region.cx}
                cy={region.cy}
                r={isActive ? 7 : 4.5}
                fill={isActive ? "#FFFFFF" : "#35D07F"}
                stroke={isActive ? "#35D07F" : "#FFFFFF"}
                strokeWidth={isActive ? 3 : 1.5}
                style={{ animationDelay: `${delay}s` }}
              />
            </g>
          );
        })}

        {started && (
          <text
            className="uzm-label"
            x={activeRegion.cx}
            y={activeRegion.cy - 20}
            textAnchor="middle"
            fontSize="17"
            fontWeight="700"
            fill="#10243A"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinejoin="round"
            paintOrder="stroke"
            style={{ pointerEvents: "none" }}
          >
            {activeRegion.name}
          </text>
        )}
      </svg>

      {/* Xarita ostidagi holat qatori */}
      <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-[#DCE5ED] bg-[#F8FAFC] px-3 py-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-4">
        <span className="flex min-w-0 items-center gap-2.5 text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#35D07F] text-[#0B1A2B]">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="font-semibold" aria-live="polite">
              {activeRegion.name}
            </span>
            <span className="text-[#64778A]"> — xizmat ko‘rsatamiz</span>
          </span>
        </span>

        <span className="pl-[42px] text-sm font-semibold text-[#2D9CDB] sm:pl-0">
          {total} ta hududning barchasida
        </span>
      </div>
    </div>
  );
}

function Map() {
  return (
    <section className="relative overflow-hidden bg-white text-[#10243A]">
      {/* Yengil nuqtali fon */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          backgroundImage:
            "radial-gradient(rgba(16,36,58,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:gap-12 sm:px-6 sm:py-20 md:py-24 lg:grid-cols-12 lg:gap-14">
        {/* CHAP: matn */}
        <div className="lg:col-span-5">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D9CDB]">
            <span className="h-px w-8 bg-[#2D9CDB]" aria-hidden="true" />
            Xizmat hududi
          </p>

          <h2 className="mt-5 text-[1.75rem] font-bold leading-tight sm:text-3xl md:text-4xl">
            Butun O‘zbekiston bo‘ylab —{" "}
            <span className="text-[#2D9CDB]">Xizmat ko'rsatamiz</span>
          </h2>

          <p className="mt-5 leading-7 text-[#64778A] sm:leading-8">
            Obyektingiz qayerda joylashganidan qat’i nazar — shahar markazidami
            yoki chekka tumandami — jamoamiz o‘sha yerga borib, ishni boshidan
            oxirigacha joyida bitkazadi.
          </p>

          <div className="mt-7 inline-flex items-center gap-4 rounded-2xl bg-[#10243A] py-3 pl-3 pr-6 text-white sm:mt-9">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#35D07F] text-[#0B1A2B]">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-2xl font-bold leading-none">14</span>
              <span className="mt-1 block text-sm text-[#B8C7D6]">
                hududning barchasida ishlaymiz
              </span>
            </span>
          </div>
        </div>

        {/* O'NG: xarita */}
        <div className="-mx-1 rounded-3xl border border-[#DCE5ED] bg-white p-3 shadow-xl shadow-[#10243A]/5 sm:mx-0 sm:p-5 md:p-8 lg:col-span-7">
          <UzbekistanSvg />
        </div>
      </div>
    </section>
  );
}

export default Map;
