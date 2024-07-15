import { title } from "@/components/primitives";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function ResumePage() {

  return (
    <>
      <Section>
        <h2 className="text-xl font-extrabold">About</h2>
        <p className="text-pretty text-md text-muted-foreground">{RESUME_DATA.about}</p>
      </Section>
      <Section>
        <h2 className="text-xl font-extrabold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {RESUME_DATA.skills.map((skill) => {
            return <Badge key={skill}>{skill}</Badge>;
          })}
        </div>
      </Section>
      <Section>
        <h2 className="text-xl font-extrabold">Work Experience</h2>
        {RESUME_DATA.work.map((work) => {
          return (
            <Card key={work.company} className="hover:bg-purple-200 border border-muted hover:border-black">
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
      <Section className="print-force-new-page scroll-mb-16">
        <h2 className="text-xl font-extrabold">Projects</h2>
        <div className="-mx-0.5 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            );
          })}
        </div>
      </Section>
      <Section>
        <h2 className="text-xl font-extrabold">Certifications</h2>
        {RESUME_DATA.certications.map((cert) => {
          return (
            <Card key={cert.name} className="hover:bg-purple-200 border border-muted hover:border-black">
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    {cert.cloud}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {cert.start} - {cert.end ?? "Present"}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">
                  <a className="hover:underline" href={cert.link}>{cert.name}</a>
                </h4>
              </CardHeader>
            </Card>
          );
        })}
      </Section>
      <Section>
        <h2 className="text-xl font-extrabold">Education</h2>
        {RESUME_DATA.education.map((education) => {
          return (
            <Card key={education.school} className="hover:bg-purple-200 border border-muted hover:border-black">
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>


                <h4 className="font-mono text-sm leading-none">
                  {education.degree}
                </h4>
              </CardHeader>
            </Card>
          );
        })}
      </Section>
    </>
  );
}
