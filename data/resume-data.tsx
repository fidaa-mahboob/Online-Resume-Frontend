
export const RESUME_DATA = {
  name: "Fidaa Mahboob",
  title: "Full Stack Software Engineer",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  skills: ["React", "Javascript", "Java", "Terraform", "AWS", "Typescript", "Python", "HTML", "CSS", "Tailwind CSS", "Docker"],
  education: [
    {
      school: "University of Bradford",
      degree: "BSc (Hons) Biomedical Sciences",
      start: "2013",
      end: "2016",
    },
  ],
  certications: [
    {
      provider: "AWS",
      name: "AWS Solution Architect Associate (SAA-CO3)",
      link: "",
      start: "2024",
      end: "Current"
    },
    {
      provider: "Hashicorp",
      name: "Terraform Associate 003",
      link: "",
      start: "2024",
      end: "Current"
    }
  ],
  work: [
    {
      company: "AWS Cloud Resume Challenge",
      link: "https://cloudresumechallenge.dev/docs/the-challenge/",
      badges: [],
      title: "Participant",
      start: "Jun 2023",
      end: "Current",
      description:
        "A Challenge that involves deploying resume website on AWS infrastructure, used terrform to deploy API backend for visitor counter.",
    },
    {
      company: "Accenture",
      link: "https://www.accenture.com/gb-en",
      badges: ["Remote"],
      title: "Full Stack Engineering Senior Analyst",
      start: "Dec 2022",
      end: "Nov 2023",
      description:
        "Worked as AWS Cloud Engineer on NHS England project involving EC2 to ECS Fargate transition and infrastructure Cost optimisation.",
    },
    {
      company: "Accenture",
      link: "https://www.accenture.com/gb-en",
      badges: ["Remote"],
      title: "Full Stack Engineering Analyst",
      start: "Mar 2022",
      end: "Nov 2022",
      description:
        "Became a Software Engineer after 16 week academy training and working on variety AWS based Accenture client projects using variety of different technologies.",
    }],
  locationLink: "",
  location: "Dewsbury, West Yorkshire, UK",
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
       title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    }]
} as const