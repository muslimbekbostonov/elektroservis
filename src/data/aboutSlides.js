import {
  Activity,
  BadgeCheck,
  Cable,
  CloudLightning,
  Cpu,
  Factory,
  Handshake,
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

// ===== "KOMPANIYA HAQIDA" BO'LIMI MA'LUMOTLARI (AboutChaild) =====
// Har bir slaydning matni va rasmi shu yerda birga turadi.
// Rasmni almashtirish: `image` ga boshqa havola yozing yoki o'z faylingizni import qiling:
//   import quyoshImg from "../assets/services/quyosh-panellari.jpg";
//   ... image: quyoshImg,
// Rasm ochilmasa, uning o'rnida ikonka ko'rinadi.

// Wikimedia Commons rasmi (ochiq litsenziyali) — fayl nomi bo'yicha
const wiki = (fileName) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1400`;

export const ABOUT_SLIDES = [
  {
    title: "Quyosh panellarini o‘rnatish",
    description: "Quyosh elektr stansiyalarini o‘rnatish va ishga tushirish.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Elektromobillar uchun zaryadlash stansiyalari",
    description: "Zaryadlash qurilmalarini o‘rnatish va ulash.",
    icon: PlugZap,
    image:
      "https://images.pexels.com/photos/24376862/pexels-photo-24376862/free-photo-of-electric-car-while-charging.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Elektromontaj ishlari",
    description: "Elektr uskunalari va tizimlarini o‘rnatish.",
    icon: Wrench,
    image: wiki("Electrician Working.jpg"),
  },
  {
    title: "Transformator podstansiyalari",
    description: "Podstansiyalarni o‘rnatish, ulash va ishga tushirish.",
    icon: Cpu,
    image: wiki("Transformer 110 kV 20 kV.jpg"),
  },
  {
    title: "Yerga ulash (zazemleniya)",
    description: "Himoya yerga ulash va elektr xavfsizligi tizimlari.",
    icon: ShieldCheck,
    image: wiki("HomeEarthRodAustralia1.jpg"),
  },
  {
    title: "Ichki elektr montaji",
    description: "Bino va inshootlarning ichki elektr tarmoqlarini o‘rnatish.",
    icon: House,
    image: wiki("Electrical-wiring-rough-in.jpg"),
  },
  {
    title: "Tashqi elektr montaji",
    description: "Tashqi elektr tarmoqlari va kabel liniyalarini yotqizish.",
    icon: UtilityPole,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Sanoat elektr ta’minoti",
    description:
      "Korxona va yirik tashkilotlar uchun elektr ta’minoti tizimlarini qurish va montaj qilish.",
    icon: Factory,
    image: wiki("Electrical switchgear.JPG"),
  },
  {
    title: "Kabel liniyalari",
    description: "Kuch kabellarini yotqizish, ulash va montaj qilish.",
    icon: Cable,
    image: wiki("ABB High Voltage Cables.jpg"),
  },
  {
    title: "Yoritish tizimlari",
    description: "Ichki va tashqi yoritish uskunalarini o‘rnatish.",
    icon: Lightbulb,
    image: wiki("LED streetlight.JPG"),
  },
  {
    title: "Chaqmoqdan himoya tizimlari",
    description:
      "Binolarni chaqmoq urishidan himoyalash tizimlarini o‘rnatish.",
    icon: CloudLightning,
    image: wiki(
      "Lightning protection system for building with pavilion roof.jpg",
    ),
  },
  {
    title: "Elektr taqsimlash qurilmalari",
    description:
      "Elektr shitlari, taqsimlash panellari va avtomatlarni o‘rnatish.",
    icon: LayoutGrid,
    image: wiki("Eaton circuit breaker panel open.JPG"),
  },
  {
    title: "Elektr uskunalariga texnik xizmat ko‘rsatish",
    description: "Diagnostika, nosozliklarni aniqlash va ta’mirlash.",
    icon: Activity,
    image:
      "https://images.pexels.com/photos/17842843/pexels-photo-17842843/free-photo-of-a-man-maintaining-an-inverter.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Elektr tarmoqlarini modernizatsiya qilish",
    description: "Mavjud elektr tizimlarini yangilash va quvvatini oshirish.",
    icon: RefreshCw,
    image: wiki(
      "Installation of cables in the switchgear room of a power sub-station in Queens. (CS179, 09-17-2018) (43916808045).jpg",
    ),
  },
  {
    title: "Loyiha va texnik yechimlar",
    description:
      "Elektr ta’minoti tizimlarini loyihalash va texnik hisob-kitoblar.",
    icon: Ruler,
    image: wiki("PV-system-schematics-residential-Eng.png"),
  },
];

export const ABOUT_POINTS = [
  {
    icon: ShieldCheck,
    title: "Xavfsizlik birinchi o‘rinda",
    text: "Barcha ishlar texnik me’yorlar va xavfsizlik talablari asosida bajariladi.",
  },
  {
    icon: BadgeCheck,
    title: "Sifatli materiallar",
    text: "Ishonchli ishlab chiqaruvchilarning sertifikatlangan uskunalari.",
  },
  {
    icon: Handshake,
    title: "Boshidan oxirigacha",
    text: "Loyihalash, montaj, ishga tushirish va texnik xizmat — bir joyda.",
  },
];
