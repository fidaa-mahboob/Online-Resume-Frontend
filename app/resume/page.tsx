import { title } from "@/components/primitives";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function ResumePage() {

  return (
    <>
      <div className="flex items-center justify-between bg-red-600">
        <div className="flex-1 space-y-1.5">
          <div>
            <h1 className="text-4xl">{RESUME_DATA.name}</h1>
          </div>
          <div>
            <h2>{RESUME_DATA.title}</h2>
          </div>
        </div>
      </div>
      <Section>
        <h2 className="text-xl font-bold">About</h2>
        <p className="text-pretty text-sm text-muted-foreground">{RESUME_DATA.about}</p>
      </Section>
      <Section>
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {RESUME_DATA.skills.map((skill) => {
            return <Badge key={skill}>{skill}</Badge>;
          })}
        </div>
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
