function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Forma hozircha namuna. Xabar yuborish funksiyasi keyin ulanadi.");
  }

  return (
    <main className="bg-[#F4F7FA] text-[#10243A]">
      {/* Sarlavha */}
      <section className="bg-[#10243A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#65C3F0]">
            Aloqa
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Keling, bog‘lanamiz
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#C1D0DF]">
            Savollaringiz yoki loyihangiz bo‘yicha bizga murojaat qoldiring.
          </p>
        </div>
      </section>

      {/* Aloqa ma’lumotlari va forma */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">Biz bilan bog‘laning</h2>

          <p className="mt-4 leading-7 text-[#64778A]">
            Sizga kerakli xizmatni aniqlash va loyiha haqida batafsil
            suhbatlashish uchun murojaat qiling.
          </p>

          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-[#2D9CDB] pl-4">
              <h3 className="font-semibold">Telefon</h3>
              <p className="mt-1 text-[#64778A]">Telefon raqami kiritiladi</p>
            </div>

            <div className="border-l-2 border-[#2D9CDB] pl-4">
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-[#64778A]">Email manzili kiritiladi</p>
            </div>

            <div className="border-l-2 border-[#2D9CDB] pl-4">
              <h3 className="font-semibold">Manzil</h3>
              <p className="mt-1 text-[#64778A]">
                Kompaniya manzili kiritiladi
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#DCE5ED] bg-white p-6 shadow-sm md:p-10 lg:col-span-3">
          <h2 className="text-2xl font-bold">Xabar yuborish</h2>

          <p className="mt-2 text-sm text-[#64778A]">
            Quyidagi maydonlarni to‘ldiring.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Ismingiz
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ismingizni kiriting"
                required
                className="w-full rounded-lg border border-[#DCE5ED] bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/15"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Telefon raqami
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+998 ..."
                  required
                  className="w-full rounded-lg border border-[#DCE5ED] bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full rounded-lg border border-[#DCE5ED] bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/15"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Xabaringiz
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Loyihangiz yoki savolingiz haqida yozing..."
                required
                className="w-full resize-y rounded-lg border border-[#DCE5ED] bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#2D9CDB] focus:ring-2 focus:ring-[#2D9CDB]/15"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2D9CDB] px-6 py-3 font-semibold text-white transition hover:bg-[#2186C0] sm:w-auto"
            >
              Xabar yuborish
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
