import { Link } from "react-router-dom";
import { ArrowRight, PlugZap, Sun, Wrench, Zap } from "lucide-react";

// VERSIYA 11 — har bir kartochkada 2 ta rasm: 1-asosiy, 2-hover bo'lganda.
// Rasm tartibi: 1) src/assets/services/ dagi o'z fotongiz (nomlari pastda),
// 2) internetdagi foto (`remote`), 3) ikkalasi ochilmasa, SVG chizma ko'rinadi.
// O'z fotongizni qo'yish: src/assets/services/ papkasiga shu nomlar bilan tashlang
// (jpg, jpeg, png, webp yoki avif):
//   xizmat-montaj-1 / xizmat-montaj-2
//   xizmat-quyosh-1 / xizmat-quyosh-2
//   xizmat-zaryadlash-1 / xizmat-zaryadlash-2
const localFiles = import.meta.glob(
  "../assets/services/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" },
);

const localMap = Object.fromEntries(
  Object.entries(localFiles).map(([path, url]) => [
    path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, ""),
    url,
  ]),
);

/* ---------- SVG tasvirlar (400 x 300) ---------- */

const svgProps = {
  viewBox: "0 0 400 300",
  preserveAspectRatio: "xMidYMid slice",
  style: { display: "block", width: "100%", height: "100%" },
  "aria-hidden": "true",
};

// 1-a. Elektr taqsimlash shiti
function PanelScene() {
  return (
    <svg {...svgProps}>
      <circle cx="200" cy="150" r="120" fill="#2D9CDB" opacity="0.10" />
      <rect
        x="118"
        y="38"
        width="164"
        height="206"
        rx="14"
        fill="#0E1F33"
        stroke="#65C3F0"
        strokeOpacity="0.6"
        strokeWidth="2"
      />
      <rect x="132" y="52" width="136" height="178" rx="8" fill="#132B45" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <g key={`${r}-${c}`}>
            <rect
              x={142 + c * 30}
              y={68 + r * 52}
              width="22"
              height="38"
              rx="4"
              fill="#1E4266"
            />
            <rect
              x={146 + c * 30}
              y={(r + c) % 3 === 0 ? 86 + r * 52 : 72 + r * 52}
              width="14"
              height="16"
              rx="3"
              fill={(r + c) % 3 === 0 ? "#3C5A78" : "#35D07F"}
            />
          </g>
        )),
      )}
      <path
        d="M150 244 C150 272 96 266 54 288"
        stroke="#35D07F"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M200 244 V292"
        stroke="#65C3F0"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M250 244 C250 272 304 266 346 288"
        stroke="#35D07F"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <polygon
        points="330,60 312,92 326,92 318,120 344,84 328,84"
        fill="#F6C94C"
      />
    </svg>
  );
}

// 2-a. Quyosh paneli
function SolarScene() {
  return (
    <svg {...svgProps}>
      <circle cx="312" cy="72" r="52" fill="#F6C94C" opacity="0.14" />
      <circle cx="312" cy="72" r="26" fill="#F6C94C" />
      <g stroke="#F6C94C" strokeWidth="3" strokeLinecap="round">
        <path d="M312 24 V34 M312 110 V120 M264 72 H274 M350 72 H360 M278 38 L285 45 M339 99 L346 106 M346 38 L339 45 M285 99 L278 106" />
      </g>
      <polygon
        points="56,238 148,138 332,138 240,238"
        fill="#1B4B7A"
        stroke="#65C3F0"
        strokeWidth="2"
      />
      <g stroke="#65C3F0" strokeOpacity="0.7" strokeWidth="1.5">
        <path d="M86 205 H266 M117 171 H297" />
        <path d="M101 238 L193 138 M148 238 L240 138 M195 238 L287 138" />
      </g>
      <path d="M150 238 V262 M146 262 H154" stroke="#65C3F0" strokeWidth="4" />
      <rect x="0" y="262" width="400" height="38" fill="#0B1A2B" />
    </svg>
  );
}

// 3-a. Zaryadlash ustuni va avtomobil
function ChargerScene() {
  return (
    <svg {...svgProps}>
      <circle cx="230" cy="150" r="110" fill="#35D07F" opacity="0.08" />
      <rect
        x="262"
        y="62"
        width="62"
        height="190"
        rx="14"
        fill="#0E1F33"
        stroke="#35D07F"
        strokeWidth="2.5"
      />
      <rect
        x="274"
        y="80"
        width="38"
        height="30"
        rx="5"
        fill="#35D07F"
        opacity="0.22"
      />
      <polygon
        points="296,84 284,98 292,98 288,108 302,94 294,94"
        fill="#35D07F"
      />
      <circle cx="293" cy="132" r="5" fill="#65C3F0" />
      <path
        d="M262 160 C226 160 238 196 206 196"
        stroke="#35D07F"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52 236 V206 Q52 190 74 188 L106 160 Q116 152 132 152 H176 Q192 152 200 166 L210 190 Q230 194 230 208 V236 Z"
        fill="#1E4266"
        stroke="#65C3F0"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M114 186 L134 162 H172 L188 186 Z" fill="#0E1F33" />
      <circle cx="206" cy="196" r="5" fill="#35D07F" />
      <g fill="#0B1A2B" stroke="#65C3F0" strokeWidth="2">
        <circle cx="92" cy="238" r="17" />
        <circle cx="192" cy="238" r="17" />
      </g>
      <rect x="0" y="254" width="400" height="46" fill="#0B1A2B" />
    </svg>
  );
}

const services = [
  {
    title: "Elektr montaj ishlari",
    description:
      "Binolar, inshootlar va sanoat obyektlari uchun elektr tarmoqlarini o‘rnatish, ulash va montaj qilish.",
    icon: Wrench,
    Scene: PanelScene,
    images: [
      {
        name: "xizmat-montaj-1",
        remote:
          "https://images.pexels.com/photos/17842843/pexels-photo-17842843/free-photo-of-a-man-maintaining-an-inverter.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
      {
        name: "xizmat-montaj-2",
        remote:
          "https://images.pexels.com/photos/36137497/pexels-photo-36137497/free-photo-of-high-voltage-electrical-substation-equipment.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
    ],
  },
  {
    title: "Quyosh energetikasi",
    description:
      "Quyosh panellarini o‘rnatish va obyektlar uchun zamonaviy quyosh elektr tizimlarini ishga tushirish.",
    icon: Sun,
    Scene: SolarScene,
    images: [
      {
        name: "xizmat-quyosh-1",
        remote:
          "https://images.pexels.com/photos/20844067/pexels-photo-20844067/free-photo-of-solar-panels-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
      {
        name: "xizmat-quyosh-2",
        remote:
          "https://images.pexels.com/photos/9875448/pexels-photo-9875448.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
    ],
  },
  {
    title: "Elektromobil zaryadlash stansiyalari",
    description:
      "Elektromobillar uchun zaryadlash qurilmalarini o‘rnatish, elektr tarmog‘iga ulash va ishga tushirish.",
    icon: PlugZap,
    Scene: ChargerScene,
    images: [
      {
        name: "xizmat-zaryadlash-1",
        remote:
          "https://images.pexels.com/photos/24376862/pexels-photo-24376862/free-photo-of-electric-car-while-charging.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
      {
        name: "xizmat-zaryadlash-2",
        remote:
          "https://images.pexels.com/photos/36405842/pexels-photo-36405842/free-photo-of-charging-electric-vehicle-at-outdoor-station.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
    ],
  },
];

// Balandlik va fon inline berilgan: Tailwind'ga bog'liq emas, doim ko'rinadi.
const imageBoxStyle = {
  position: "relative",
  height: 190,
  overflow: "hidden",
  background: "linear-gradient(135deg, #1B3A5C 0%, #10243A 100%)",
};

const fillStyle = { position: "absolute", inset: 0 };

const photoStyle = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "saturate(1.12) brightness(1.04)",
};

// Foto ochilmasa, o'zini yashiradi (ostidagi chizma ko'rinadi)
const hideOnError = (event) => {
  event.currentTarget.style.display = "none";
};

// Fon animatsiyasi: 1, 2 yoki 3.
//   1 — signal to'lqinlari va yuqoriga ko'tariluvchi uchqunlar
//   2 — oqib turuvchi elektr to'lqinlari
//   3 — suzib yuruvchi chaqmoq belgilari va nafas oluvchi yorug'lik (standart)
const BG_VARIANT = 3;

const bgCss = `
@keyframes cs-float-a { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,40px) scale(1.15); } }
@keyframes cs-float-b { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-70px,-30px) scale(1.2); } }
@keyframes cs-ring { 0% { transform: scale(0.25); opacity: 0.9; } 100% { transform: scale(1); opacity: 0; } }
@keyframes cs-rise { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 0.85; } 85% { opacity: 0.5; } 100% { transform: translateY(-680px); opacity: 0; } }
@keyframes cs-bolt { 0%,100% { transform: translateY(0) rotate(var(--r)); } 50% { transform: translateY(-28px) rotate(calc(var(--r) + 14deg)); } }
@keyframes cs-glow { 0%,100% { opacity: 0.55; transform: translate(-50%,-50%) scale(1); } 50% { opacity: 1; transform: translate(-50%,-50%) scale(1.12); } }
@keyframes cs-wave { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.cs-float-a { animation: cs-float-a 16s ease-in-out infinite; }
.cs-float-b { animation: cs-float-b 20s ease-in-out infinite; }
.cs-ring { animation: cs-ring 9s ease-out infinite; }
.cs-dot { animation: cs-rise linear infinite; }
.cs-wave { animation: cs-wave linear infinite; }
.cs-bolt { animation: cs-bolt ease-in-out infinite; }
.cs-glow { animation: cs-glow 9s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .cs-float-a, .cs-float-b, .cs-ring, .cs-dot, .cs-wave, .cs-bolt, .cs-glow { animation: none; }
  .cs-dot { opacity: 0.4; }
}
`;

/* ---------- Variant 1: to'lqinlar + uchqunlar ---------- */
const sparks = [
  [6, 6, 13, 0, "#2D9CDB"],
  [14, 4, 17, 4, "#35D07F"],
  [23, 5, 15, 8, "#2D9CDB"],
  [34, 4, 19, 2, "#35D07F"],
  [47, 6, 14, 6, "#2D9CDB"],
  [58, 4, 18, 10, "#35D07F"],
  [69, 5, 16, 3, "#2D9CDB"],
  [78, 6, 13, 9, "#35D07F"],
  [88, 4, 17, 1, "#2D9CDB"],
  [95, 5, 15, 7, "#35D07F"],
];

const ringBase = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: "1.5px solid rgba(45,156,219,0.35)",
};

function Rings({ style }) {
  return (
    <div style={{ position: "absolute", width: 560, height: 560, ...style }}>
      {[0, 3, 6].map((delay) => (
        <div
          key={delay}
          className="cs-ring"
          style={{ ...ringBase, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

function VariantRings() {
  return (
    <>
      <Rings style={{ right: -280, top: -280 }} />
      <Rings style={{ left: -300, bottom: -300 }} />
      {sparks.map(([left, size, duration, delay, color]) => (
        <span
          key={left}
          className="cs-dot"
          style={{
            position: "absolute",
            left: `${left}%`,
            bottom: -12,
            width: size,
            height: size,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 12px ${color}`,
            opacity: 0,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </>
  );
}

/* ---------- Variant 2: oqib turuvchi elektr to'lqinlari ---------- */
const WAVE =
  "M0 100 C180 40 360 160 540 100 S900 40 1080 100 S1260 160 1440 100 V200 H0 Z";
const WAVE_LINE =
  "M0 100 C180 40 360 160 540 100 S900 40 1080 100 S1260 160 1440 100";

function Wave({ height, bottom, duration, reverse, fill, stroke }) {
  return (
    <div
      className="cs-wave"
      style={{
        position: "absolute",
        left: 0,
        bottom,
        width: "200%",
        height,
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      <svg
        viewBox="0 0 2880 200"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        {[0, 1440].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            <path d={WAVE} fill={fill} />
            <path d={WAVE_LINE} fill="none" stroke={stroke} strokeWidth="2" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function VariantWaves() {
  return (
    <>
      <Wave
        height={190}
        bottom={-10}
        duration={38}
        fill="rgba(45,156,219,0.07)"
        stroke="rgba(45,156,219,0.25)"
      />
      <Wave
        height={150}
        bottom={-20}
        duration={26}
        reverse
        fill="rgba(53,208,127,0.08)"
        stroke="rgba(53,208,127,0.30)"
      />
      <Wave
        height={110}
        bottom={-30}
        duration={18}
        fill="rgba(16,36,58,0.05)"
        stroke="rgba(16,36,58,0.12)"
      />
    </>
  );
}

/* ---------- Variant 3: chaqmoq belgilari + yorug'lik ---------- */
// [chap %, tepa %, o'lcham, davomiylik, kechikish, burchak, rang]
const bolts = [
  [4, 12, 30, 9, 0, -14, "#2D9CDB"],
  [9, 62, 20, 12, 2, 10, "#35D07F"],
  [3, 86, 26, 10, 5, -8, "#2D9CDB"],
  [93, 10, 24, 11, 1, 12, "#35D07F"],
  [96, 55, 32, 9, 3, -10, "#2D9CDB"],
  [90, 84, 20, 13, 6, 8, "#35D07F"],
  [20, 6, 16, 14, 4, 6, "#2D9CDB"],
  [78, 92, 16, 12, 7, -6, "#2D9CDB"],
];

function VariantBolts() {
  return (
    <>
      {/* Markazdagi nafas oluvchi yorug'lik */}
      <div
        className="cs-glow"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 720,
          height: 420,
          maxWidth: "100%",
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(45,156,219,0.16), rgba(45,156,219,0))",
        }}
      />

      {bolts.map(([left, top, size, duration, delay, rotate, color]) => (
        <span
          key={`${left}-${top}`}
          className="cs-bolt"
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            color,
            opacity: 0.22,
            "--r": `${rotate}deg`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Zap width={size} height={size} strokeWidth={1.6} />
        </span>
      ))}
    </>
  );
}

function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          backgroundImage:
            "radial-gradient(rgba(16,36,58,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div
        className="cs-float-a"
        style={{
          position: "absolute",
          left: -90,
          top: 60,
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "rgba(45,156,219,0.18)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="cs-float-b"
        style={{
          position: "absolute",
          right: -70,
          top: 120,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(53,208,127,0.15)",
          filter: "blur(80px)",
        }}
      />

      {BG_VARIANT === 1 && <VariantRings />}
      {BG_VARIANT === 2 && <VariantWaves />}
      {BG_VARIANT === 3 && <VariantBolts />}
    </div>
  );
}

// Balandlik va fon inline berilgan: Tailwind'ga bog'liq emas, doim ko'rinadi.
function ChaildServis() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F2F7FB 100%)",
      }}
    >
      <style>{bgCss}</style>
      <AnimatedBackground />

      <div
        className="relative mx-auto max-w-7xl"
        style={{ padding: "48px 24px" }}
      >
        {/* SARLAVHA */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#10243A] md:text-4xl">
          Bizning xizmatlarimiz
        </h2>

        {/* KARTOCHKALAR */}
        <div className="grid gap-6 md:grid-cols-3" style={{ marginTop: 32 }}>
          {services.map((service) => {
            const [main, hover] = service.images.map(
              (image) => localMap[image.name] ?? image.remote,
            );

            return (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#DCE5ED] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2D9CDB] hover:shadow-xl hover:shadow-[#10243A]/10"
              >
                {/* RASM */}
                <div style={imageBoxStyle}>
                  <div style={fillStyle}>
                    <service.Scene />
                  </div>

                  <img
                    src={main}
                    alt={service.title}
                    loading="lazy"
                    onError={hideOnError}
                    style={{ ...fillStyle, ...photoStyle }}
                    className="transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />

                  <img
                    src={hover}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    onError={hideOnError}
                    style={{ ...fillStyle, ...photoStyle }}
                    className="opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                  />
                </div>

                {/* MATN: ikonka chapda, sarlavha va tavsif uning yonida */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "20px 22px 24px",
                  }}
                >
                  <span
                    style={{ width: 48, height: 48 }}
                    className="flex shrink-0 items-center justify-center rounded-xl bg-[#E5F4FC] text-[#2D9CDB] transition-colors duration-300 group-hover:bg-[#2D9CDB] group-hover:text-white"
                  >
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <div style={{ minWidth: 0 }}>
                    <h3 className="text-lg font-bold leading-snug text-[#10243A]">
                      {service.title}
                    </h3>

                    <p
                      style={{ marginTop: 6 }}
                      className="text-sm leading-6 text-[#64778A]"
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* TUGMA */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link
            to="/services"
            style={{ gap: 12, padding: "13px 28px" }}
            className="group inline-flex w-full items-center justify-center rounded-xl bg-[#10243A] font-semibold text-white shadow-lg shadow-[#10243A]/20 transition-colors duration-300 hover:bg-[#2D9CDB] sm:w-auto"
          >
            Barcha xizmatlar
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ChaildServis;
