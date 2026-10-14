function Services() {
  const services = [
    {
      number: "01",
      title: "Elektr montaj ishlari",
      description:
        "Binolar va inshootlarda elektr uskunalari hamda elektr tarmoqlarini o‘rnatish.",
    },
    {
      number: "02",
      title: "Elektr ta’minoti tizimlari",
      description:
        "Obyektlarning ehtiyojiga mos elektr ta’minoti tizimlarini tashkil etish.",
    },
    {
      number: "03",
      title: "Elektr taqsimlash panellari",
      description:
        "Elektr taqsimlash panellari va tegishli jihozlarni o‘rnatish ishlari.",
    },
    {
      number: "04",
      title: "Yoritish tizimlari",
      description:
        "Ichki va tashqi yoritish tizimlarini o‘rnatish hamda ulash.",
    },
    {
      number: "05",
      title: "Kabel tortish ishlari",
      description:
        "Loyiha talablariga muvofiq kabel liniyalarini yotqizish va ulash.",
    },
    {
      number: "06",
      title: "Texnik xizmat",
      description:
        "Elektr tizimlarini tekshirish, nosozliklarni aniqlash va texnik xizmat ko‘rsatish.",
    },
  ];

  return (
    <main className="bg-[#F4F7FA] text-[#10243A]">
      {/* Sarlavha */}
      <section className="bg-[#10243A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#65C3F0]">
            Bizning xizmatlarimiz
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Elektr tizimlari uchun kompleks yechimlar
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#C1D0DF]">
            Loyihangiz ehtiyojlariga mos elektr montaj va elektr tizimlari
            bo‘yicha xizmatlar.
          </p>
        </div>
      </section>

      {/* Xizmatlar kartochkalari */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-[#DCE5ED] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#2D9CDB] hover:shadow-xl hover:shadow-[#10243A]/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#E5F4FC] font-bold text-[#2D9CDB]">
                {service.number}
              </span>

              <h2 className="mt-6 text-xl font-bold">{service.title}</h2>

              <p className="mt-4 leading-7 text-[#64778A]">
                {service.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#2D9CDB] transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </section>

      {/* Bog‘lanishga chaqiriq */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[#E5F4FC] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Loyihangizni muhokama qilamizmi?
            </h2>

            <p className="mt-3 text-[#64778A]">
              Kerakli xizmat bo‘yicha biz bilan bog‘laning.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#2D9CDB] px-6 py-3 font-semibold text-white transition hover:bg-[#2186C0]"
          >
            Bog‘lanish
          </a>
        </div>
      </section>
    </main>
  );
}

export default Services;
