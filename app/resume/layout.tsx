export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-8 bg-purple-400 print:space-y-6">  
        {children}
    </section>
  );
}
