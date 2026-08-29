import type { Metadata, Viewport } from "next";
import { Martian_Mono, Familjen_Grotesk } from "next/font/google";
import { identity, siteUrl, socials } from "./data/content";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

/** Direction contract — emitted into the built markup so the run stays auditable. */
const CONTRACT = `<!--
          IMPECCABLE DIRECTION CONTRACT — surface: portfolio (one page) · mode: Experience
          THESIS: A developer's portfolio built as a machined instrument panel. The left spine is
          the index; inversion is the only accent. Refuses the three-card "featured projects" grid
          and the centred avatar-plus-bio hero.
          OWN-WORLD: #0a0a0a machined ground, #0e0e0e plates, 1px rgba(255,255,255,.10) hairlines,
          pill capsules, huge thin orbital arcs. Martian Mono carries display type and all data;
          Familjen Grotesk carries prose, italic for emphasis. Strictly monochrome — white-on-black
          wipes to black-on-white, and that inversion is the entire accent system.
          STORY: The visitor reads stack and seniority off data rather than adjectives, believes the
          craft because the surface itself is the proof, and leaves by opening a project or copying
          the address.
          FIRST VIEWPORT: left spine of mono station ticks; two-line display "Full-stack / Developer"
          spanning the full measure; italic goal line beneath line one; hairline social capsules
          centred below; orbital arcs bleeding off top-right.
          FORM: spine console — index 3 of 7 ordered structures — fused with the pinned reference's
          section arrangement. Seed key fbc33a51.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review,
          the verdict, DESIGN.md, and every shipping raster carrying its provenance
        
-->`;

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-martian",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-familjen",
  display: "swap",
});

const fullName = `${identity.first} ${identity.last}`;
const title = `${fullName} — Senior Full-stack Developer`;
const description =
  "Portfolio of Ramesh Sharma, a senior full-stack developer working in Laravel, PHP, Vue.js and React.";
const repoLinks = socials.filter((s) => s.icon !== "mail").map((s) => s.href);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${fullName}` },
  description,
  keywords: [
    "Ramesh Sharma",
    "Full-stack Developer",
    "Laravel Developer",
    "PHP Developer",
    "Vue.js Developer",
    "React Developer",
    "Nepal Developer",
  ],
  authors: [{ name: fullName, url: siteUrl }],
  creator: fullName,
  publisher: fullName,
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: fullName,
    type: "profile",
    firstName: identity.first,
    lastName: identity.last,
    locale: "en_US",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: fullName }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/icon.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  url: siteUrl,
  image: `${siteUrl}/portrait.webp`,
  jobTitle: "Senior Full-stack Developer",
  email: `mailto:${identity.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Hetauda", addressCountry: "NP" },
  worksFor: { "@type": "Organization", name: "CyberArrow" },
  knowsAbout: ["Laravel", "PHP", "Vue.js", "React", "MySQL", "Docker"],
  sameAs: repoLinks,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${martian.variable} ${familjen.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="u-noise" aria-hidden />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
