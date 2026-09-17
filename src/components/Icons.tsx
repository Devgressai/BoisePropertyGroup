/**
 * Line icons, inline.
 *
 * No icon dependency: the set is small and a package would ship hundreds of
 * glyphs to render nine. All share one grammar — 24px box, 1.75 stroke, round
 * caps and joins, `currentColor` — so a chip sets the colour and the icon
 * inherits it. That consistency is most of what makes a line set look drawn
 * rather than collected.
 *
 * Every icon is decorative: the text beside it carries the meaning, so each is
 * marked aria-hidden and contributes nothing to the accessibility tree.
 */
type IconProps = { className?: string };

function Svg({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconHouse(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </Svg>
  );
}

export function IconKeys(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="8" cy="8" r="4.25" />
      <path d="M11 11l8.5 8.5" />
      <path d="M17 17l2-2" />
      <path d="M14.5 14.5 16 13" />
    </Svg>
  );
}

export function IconLand(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 18.5 9 6l4.5 8.5L16 10l5 8.5z" />
      <path d="M3 21h18" />
    </Svg>
  );
}

export function IconBuilding(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 21V5.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V21" />
      <path d="M13 10h6a1 1 0 0 1 1 1v10" />
      <path d="M3 21h18" />
      <path d="M7 8.5h2M7 12h2M7 15.5h2M16 13.5h1M16 17h1" />
    </Svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

export function IconMath(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8.5 12.5h1.5M8.5 16.5h1.5M14 12.5h1.5M14 16.5h1.5" />
    </Svg>
  );
}

export function IconCalendar(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="m9 15.5 2 2 4-4" />
    </Svg>
  );
}

export function IconWallet(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h12.5a1.5 1.5 0 0 1 1.5 1.5V9" />
      <rect x="3.5" y="8.5" width="17" height="11.5" rx="2" />
      <path d="M20.5 12.5H16a2 2 0 0 0 0 4h4.5" />
    </Svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 21s7-3.2 7-9V5.8l-7-2.8-7 2.8V12c0 5.8 7 9 7 9z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function IconScale(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M4 8h16" />
      <path d="M7.5 8 5 13.5h5z" />
      <path d="M16.5 8 14 13.5h5z" />
    </Svg>
  );
}

export function IconSun(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </Svg>
  );
}

export function IconOffice(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5.5 21V4.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V21" />
      <path d="M3 21h18" />
      <path d="M9 7.5h2M13 7.5h2M9 11h2M13 11h2M9 14.5h2M13 14.5h2" />
      <path d="M10.5 21v-3h3v3" />
    </Svg>
  );
}

export function IconWarehouse(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 21V9.5L12 5l9 4.5V21" />
      <path d="M3 21h18" />
      <path d="M7.5 21v-7h9v7" />
      <path d="M7.5 17.5h9" />
    </Svg>
  );
}
