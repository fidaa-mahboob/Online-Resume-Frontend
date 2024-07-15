export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="sm:text-4xl text-2xl font-bold mb-6">Blog</h1>
          <p className="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
        </div>
      </div>
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-purple-400 print:space-y-6">
        {children}
      </section>
    </section>
  );
}
