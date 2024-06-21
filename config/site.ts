export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },{
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Blog",
      href: "/blog",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },{
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Blog",
      href: "/blog",
    }
  ],
  links: {
    github: "https://github.com/fidaa-mahboob",
    linkedin: "https://www.linkedin.com/in/fidaa-mahboob/", 
  },
};
