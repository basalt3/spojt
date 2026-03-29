// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Jacquard_12_Charted } from "next/font/google";
import { Redacted_Script } from "next/font/google";
import { Bitcount_Prop_Single } from "next/font/google";
import { Donegal_One } from "next/font/google";
import { Questrial } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const jacquard = Jacquard_12_Charted({
  variable: "--font-jacquard",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const redacted = Redacted_Script({
  variable: "--font-redacted",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const bitcount = Bitcount_Prop_Single({
  variable: "--font-bitcount",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const donegal = Donegal_One({
  variable: "--font-donegal",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
  jacquard: jacquard,
  redacted: redacted,
  bitcount: bitcount,
  donegal: donegal,
  questrial: questrial,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | mint | rose | dusk | custom
  brand: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "sharp", // rounded | playful | conservative | sharp
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

export { fonts, style, dataStyle };
