import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/* Brand marks: exact paths, filled, 24 grid. */
const Brand = ({ d, ...p }: P & { d: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d={d} />
  </svg>
);

/* Drawn marks: one stroke system — 1.6 width, round caps, 24 grid. */
const Line = ({ children, ...p }: P) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
    {...p}
  >
    {children}
  </svg>
);

export const Github = (p: P) => (
  <Brand
    {...p}
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  />
);

export const Linkedin = (p: P) => (
  <Brand
    {...p}
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  />
);

export const ArrowRight = (p: P) => (
  <Line {...p}>
    <path d="M4.5 12h15" />
    <path d="M13.8 6.2 19.5 12l-5.7 5.8" />
  </Line>
);

export const ArrowLeft = (p: P) => (
  <Line {...p}>
    <path d="M19.5 12h-15" />
    <path d="M10.2 6.2 4.5 12l5.7 5.8" />
  </Line>
);

export const ArrowUpRight = (p: P) => (
  <Line {...p}>
    <path d="M6.6 17.4 17.4 6.6" />
    <path d="M8.4 6.6h9v9" />
  </Line>
);

export const Plus = (p: P) => (
  <Line {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Line>
);

export const Minus = (p: P) => (
  <Line {...p}>
    <path d="M5 12h14" />
  </Line>
);

export const Copy = (p: P) => (
  <Line {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.4" />
    <path d="M15 5.6A1.6 1.6 0 0 0 13.4 4H5.6A1.6 1.6 0 0 0 4 5.6v7.8A1.6 1.6 0 0 0 5.6 15" />
  </Line>
);

export const Check = (p: P) => (
  <Line {...p}>
    <path d="M4.8 12.6 9.5 17.3 19.2 7.2" />
  </Line>
);

export const Mail = (p: P) => (
  <Line {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
    <path d="m4.2 8 6.6 5.1a2 2 0 0 0 2.4 0L19.8 8" />
  </Line>
);

export const socialIcons: Record<string, (p: P) => React.JSX.Element> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export const Menu = (p: P) => (
  <Line {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h11" />
  </Line>
);

export const Close = (p: P) => (
  <Line {...p}>
    <path d="M6.2 6.2 17.8 17.8" />
    <path d="M17.8 6.2 6.2 17.8" />
  </Line>
);
