export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto flex flex-col items-center gap-4 py-8 md:py-10 bg-yellow-600">
      <div>
        {children}
      </div>
    </section>
  );
}
