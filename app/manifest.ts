import type { MetadataRoute } from "next";
import { identity } from "./data/content";

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  const fullName = `${identity.first} ${identity.last}`;
  return {
    name: `${fullName} — Senior Full-stack Developer`,
    short_name: fullName,
    description:
      "Portfolio of Ramesh Sharma, a senior full-stack developer working in Laravel, PHP, Vue.js and React.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
