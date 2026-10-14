import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      number: "01",
      title: "Elektr montaj",
      description:
        "Binolar va inshootlar uchun elektr montaj va ulash ishlari.",
    },
    {
      number: "02",
      title: "Elektr ta’minoti",
      description:
        "Obyektlar uchun elektr ta’minoti tizimlarini tashkil etish.",
    },
    {
      number: "03",
      title: "Yoritish tizimlari",
      description: "Ichki va tashqi yoritish tizimlarini o‘rnatish.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#10243A]">
      {/* HERO */}
      <section className="relative bg-[#F4F7FA]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          {/* Chap tomon */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#DCE5ED] bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#2D9CDB]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#526A80]">
                ELEKTROSERVIS MRG
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
              Elektr tizimlarida
              <span className="block text-[#2D9CDB]">yangi standart.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#64778A] md:text-lg">
              Zamonaviy binolar va inshootlar uchun elektr montaj, elektr
              ta’minoti va yoritish tizimlari bo‘yicha professional yechimlar.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#2D9CDB] px-6 py-4 font-semibold text-white shadow-lg shadow-[#2D9CDB]/20 transition hover:-translate-y-0.5 hover:bg-[#2186C0]"
              >
                Loyihani muhokama qilish
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center rounded-lg border border-[#CBD7E2] bg-white px-6 py-4 font-semibold transition hover:border-[#2D9CDB] hover:text-[#2D9CDB]"
              >
                Xizmatlarimiz
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-[#DCE5ED] pt-6">
              <div className="flex -space-x-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F4F7FA] bg-[#DCECF6] text-[#10243A]">
                  ✓
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F4F7FA] bg-[#10243A] text-white">
                  ⚡
                </span>
              </div>

              <p className="text-sm leading-6 text-[#64778A]">
                <span className="block font-semibold text-[#10243A]">
                  Sifat va xavfsizlik
                </span>
                Har bir loyihaga mas’uliyatli yondashuv
              </p>
            </div>
          </div>

          {/* O‘ng tomon — katta rasm */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#DCEFFB] blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl bg-[#10243A] shadow-2xl shadow-[#10243A]/15">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85"
                alt="Professional elektr montaj ishlari"
                className="h-[380px] w-full object-cover md:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-sm font-medium text-[#A9DFFF]">
                  ELEKTR MUHANDISLIGI
                </p>

                <h2 className="mt-2 max-w-sm text-2xl font-bold text-white md:text-3xl">
                  Ishonchli tizimlar. Puxta yechimlar.
                </h2>
              </div>
            </div>

            {/* Rasm ustidagi kichik belgi */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-[#DCE5ED] bg-white p-5 shadow-xl sm:block md:-left-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#64778A]">
                Bizning yondashuv
              </p>
              <p className="mt-2 font-bold text-[#10243A]">
                Aniqlik va ishonchlilik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* XIZMATLAR */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D9CDB]">
              Nimalar qilamiz?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Bizning xizmatlarimiz
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-[#2D9CDB] transition hover:text-[#2186C0]"
          >
            Barcha xizmatlar
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2D9CDB] hover:shadow-xl hover:shadow-[#10243A]/5 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F4FC] text-xl text-[#2D9CDB]">
                  ⚡
                </span>

                <span className="text-sm font-semibold text-[#A0AFBD]">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold">{service.title}</h3>

              <p className="mt-3 min-h-[72px] leading-7 text-[#64778A]">
                {service.description}
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2D9CDB]"
              >
                Batafsil
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* KOMPANIYA HAQIDA */}
      <section className="bg-[#10243A] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#65C3F0]">
              Elektroservis MRG
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Har bir detal muhim. Har bir loyiha mas’uliyatdir.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[#C1D0DF]">
              Elektr tizimlarida to‘g‘ri rejalashtirish, sifatli montaj va
              xavfsizlik talablariga rioya qilish muhim. Biz har bir loyihaning
              texnik ehtiyojlariga mos yechimlarni tanlashga intilamiz.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#65C3F0] transition hover:text-white"
            >
              Kompaniya haqida
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* YAKUNIY CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-[#E5F4FC] px-7 py-12 md:px-14 md:py-16">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D9CDB]">
                Keyingi qadam
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                Loyihangiz uchun yechim izlayapsizmi?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#64778A]">
                Biz bilan bog‘laning va loyihangiz haqida batafsil gaplashamiz.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#2D9CDB] px-7 py-4 font-semibold text-white transition hover:bg-[#2186C0]"
            >
              Biz bilan bog‘laning
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
