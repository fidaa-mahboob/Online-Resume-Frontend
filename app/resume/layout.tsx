import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon} from "lucide-react";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <div>
            <h1 className="sm:text-4xl text-2xl font-extrabold mb-6">{RESUME_DATA.name}</h1>
          </div>
          <div>
            <h2 className="sm:text-lg text-base text-center text-gray-200">{RESUME_DATA.title}</h2>
          </div>
          <div>
            <p className="text-pretty text-base text-center text-gray-200">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
          </div>
        </div>
      </div>
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        {children}
      </section>
    </section>
  );
}


