function About() {
  return (
    <main className="bg-[#F4F7FA] text-[#10243A]">
      {/* Sahifa sarlavhasi */}
      <section className="border-b border-[#DCE5ED] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2D9CDB]">
            Biz haqimizda
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Elektr tizimlarida sifat va ishonchlilik
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64778A]">
            Elektroservis MRG — binolar va inshootlar uchun elektr montaj hamda
            elektr tizimlari bo‘yicha yechimlarni taqdim etishga yo‘naltirilgan
            kompaniya.
          </p>
        </div>
      </section>

      {/* Kompaniya haqida */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">
            Har bir loyihaga mas’uliyat bilan
          </h2>

          <p className="mt-6 leading-8 text-[#64778A]">
            Elektr tizimlarini o‘rnatishda puxta rejalashtirish, texnik talablar
            va xavfsizlik qoidalariga rioya qilish muhim ahamiyatga ega.
          </p>

          <p className="mt-4 leading-8 text-[#64778A]">
            Bizning maqsadimiz — mijozlarning ehtiyojlariga mos, ishonchli va
            uzoq muddat foydalanishga mo‘ljallangan yechimlarni taklif qilish.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
            alt="Elektr energiyasi infratuzilmasi"
            className="h-[350px] w-full object-cover md:h-[420px]"
          />
        </div>
      </section>

      {/* Tamoyillar */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Bizning tamoyillarimiz</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Xavfsizlik",
                text: "Elektr ishlari va texnik talablarga jiddiy yondashuv.",
              },
              {
                number: "02",
                title: "Sifat",
                text: "Har bir bosqichda aniqlik va puxta bajarilgan ish.",
              },
              {
                number: "03",
                title: "Ishonchlilik",
                text: "Mijoz ehtiyojlari va loyiha talablariga mos yechimlar.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-[#DCE5ED] p-7 transition hover:-translate-y-1 hover:border-[#2D9CDB]"
              >
                <span className="text-sm font-bold text-[#2D9CDB]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[#64778A]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
