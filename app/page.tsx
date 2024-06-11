import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ResumeButton } from "@/components/resumeButton";
import { Counter } from "@/components/counter";



export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col justify-between max-w-lg text-center">
        <h2 className={title()}> Hi!👋</h2>
        <h2 className={title()}>My name is&nbsp;</h2>
        <h2 className={title({ color: "violet" })}>Fidaa Mahboob&nbsp;</h2>
      </div>
      <div className="flex flex-col items-center pt-4 pb-4">
        <p className="text-3xl">I'm a</p>
        <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-3xl font-bold">
          Software Engineer
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <ResumeButton></ResumeButton>
      </div>
      
    </section>
  );
}
