export interface SocialLink {
  platform: string;
  href: string;
  icon: "github" | "linkedin" | "threads";
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/basalt3/spojt",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    href: "#",
    icon: "linkedin",
  },
  {
    platform: "Threads",
    href: "#",
    icon: "threads",
  },
];
