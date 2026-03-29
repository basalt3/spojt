export interface Library {
  wordmark: string;
  size: "xs" | "s" | "m" | "l" | "xl";
  href: string;
  style?: React.CSSProperties;
}

export const libraries: Library[] = [
  {
    wordmark: "/trademarks/shadcn.png",
    size: "s",
    href: "https://ui.shadcn.com",
  },
  {
    wordmark: "/trademarks/phosphor.png",
    size: "s",
    href: "https://phosphoricons.com",
    style: { marginTop: "1px" },
  },
  {
    wordmark: "/trademarks/jsrepo.png",
    size: "xs",
    href: "https://www.jsrepo.dev",
    style: { marginTop: "3px" },
  },
  {
    wordmark: "/trademarks/wordmark-dark.svg",
    size: "s",
    href: "https://once-ui.com",
  },
  {
    wordmark: "/trademarks/tailwind.png",
    size: "xs",
    href: "https://tailwindcss.com",
    style: { marginTop: "2px" },
  },
];
