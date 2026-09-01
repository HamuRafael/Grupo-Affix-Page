import type { ReactNode } from "react";

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

const paths: Record<string, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8L16.4 9" />
      <path d="m14 6-3.1-3.1a2 2 0 0 0-2.8 0L3.6 7.4a2 2 0 0 0 0 2.8L7 13.6" />
      <path d="m3 6 4 4m14-4-4 4M8 12l2-2a2.8 2.8 0 0 1 4 0l1 1" />
    </>
  ),
  bolt: <path d="M13 2 4.7 13H11l-1 9 8.3-11H12l1-9Z" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
      <path d="m4 7 5-4 6 5 5-4" />
    </>
  ),
  receivable: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18m-5 5h2M7 15h4" />
    </>
  ),
  growth: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 3 3 5-7" />
    </>
  ),
  agro: (
    <>
      <path d="M12 22V8" />
      <path d="M8 12c-3 0-5-2-5-5 3 0 5 2 5 5Zm8-3c3 0 5-2 5-5-3 0-5 2-5 5Zm0 7c3 0 5-2 5-5-3 0-5 2-5 5Z" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M6 21V5h8v16m0-10h4v10M9 8h2m-2 4h2m-2 4h2m8-2h-2m2 3h-2" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-6h6v6" />
    </>
  ),
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L9 11a16 16 0 0 0 4 4l1.3-1.3a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.9.7 2 2 0 0 1 1.7 2Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  creditcard: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  star: <path d="m12 3 2.7 5.6 6.3.9-4.5 4.3 1 6.2-5.5-3-5.5 3 1-6.2L3 9.5l6.3-.9L12 3Z" />,
  autonomy: (
    <>
      <circle cx="10" cy="7" r="4" />
      <path d="M3 21v-1a7 7 0 0 1 9.3-6.6" />
      <circle cx="17.5" cy="16.5" r="4.5" />
      <path d="m15.6 16.5 1.4 1.4 2.4-2.8" />
    </>
  ),
  team: (
    <>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M7 20v-1a5 5 0 0 1 10 0v1" />
      <path d="M17.5 4.6a2.6 2.6 0 1 1-.4 4.5m-10.2 0a2.6 2.6 0 1 1-.4-4.5" />
      <path d="M2.5 18v-.5a3.8 3.8 0 0 1 3.7-3.8m11.6 0a3.8 3.8 0 0 1 3.7 3.8v.5" />
    </>
  ),
  bulb: (
    <>
      <path d="M12 3a6 6 0 0 1 3.7 10.7c-.8.6-1.2 1.4-1.4 2.3h-4.6c-.2-.9-.6-1.7-1.4-2.3A6 6 0 0 1 12 3Z" />
      <path d="M10 19h4m-3.2 2.5h2.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7m0-10v.1M12 17v-4a2 2 0 0 1 4 0v4m-4-7v3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name] ?? paths.check}
    </svg>
  );
}
