import { title } from "@/components/primitives";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function ResumePage() {

  const RESUME_DATA = {
    work: [
      {
        company: "Parabol",
        link: "https://parabol.co",
        badges: ["Remote"],
        title: "Senior Full Stack Developer",
        start: "2021",
        end: "2024",
        description:
          "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
      },
      {
        company: "Clevertech",
        link: "https://clevertech.biz",
        badges: ["Remote"],
        title: "Lead Android Developer → Full Stack Developer",
        start: "2015",
        end: "2021",
        description:
          "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
      },
      {
        company: "Jojo Mobile",
        link: "https://bsgroup.eu/",
        badges: [],
        title: "Android Developer → Lead Android Developer",
        start: "2012",
        end: "2015",
        description:
          "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
      }]
  }
  return (
    <>
      <div className="flex items-center justify-between bg-red-600">
        <div className="flex-1 space-y-1.5">
          <div>
            <h1 className="text-4xl">Fidaa Mahboob</h1>
          </div>
          <div>
            <h2>Full Stack Software Engineer</h2>
          </div>
        </div>
      </div>
      <Section>
        <h2 className="text-xl font-bold">About</h2>
        <p className="text-pretty text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Section>
      <Section>
        <h2 className="text-xl font-bold">Skills</h2>
      </Section>
      <Section>
        <h2 className="text-xl font-bold">Experience</h2>
        {RESUME_DATA.work.map((work) => {
          return (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>

                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                {work.description}
              </CardContent>
            </Card>
          );
        })}
      </Section>
      <Section>
        <h2 className="text-xl"><strong>Projects</strong></h2>
      </Section>
    </>
  );
}
