// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://spojt.vercel.app";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Spojt — The new Atomic UI Registry",
    description:
      "A high-contrast, minimalist foundation for building and distributing design systems. Engineered for technical speed and architectural clarity.",
    image: "/images/og/home.jpg",
    canonical: "https://spojt.vercel.app",
    robots: "index,follow",
    alternates: [{ href: "https://spojt.vercel.app", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "SAAS",
  name: "Spojt",
  description: meta.home.description,
};

export { meta, schema, baseURL };
