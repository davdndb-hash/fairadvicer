import Image from "next/image";
import type { SVGProps } from "react";

export function Logo({
  className = "",
  light = false,
  variant = "wordmark",
}: {
  className?: string;
  light?: boolean;
  variant?: "wordmark" | "full";
}) {
  const full = variant === "full";
  const src = full
    ? light
      ? "/logo-full-light.webp"
      : "/logo-full.webp"
    : light
      ? "/logo-wordmark-light.webp"
      : "/logo-wordmark.webp";

  return (
    <Image
      src={src}
      alt="FairAdvicer"
      width={full ? 900 : 800}
      height={full ? 153 : 85}
      priority={!full}
      sizes={full ? "260px" : "210px"}
      className={`${full ? "h-auto w-[13.5rem]" : "h-auto w-[10.5rem] sm:w-[11.5rem]"} ${className}`}
    />
  );
}

type IconName =
  | "search"
  | "certificate"
  | "home"
  | "heart"
  | "arrow"
  | "check"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "chat"
  | "shield"
  | "globe"
  | "users"
  | "sparkle"
  | "euro";

const paths: Record<IconName, string> = {
  search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35",
  certificate: "M12 3 4 7v6c0 4.2 3.4 7.4 8 8 4.6-.6 8-3.8 8-8V7l-8-4Zm-3 9 2 2 4-4",
  home: "M4 11 12 4l8 7M6 10v10h12V10",
  heart: "M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "m5 13 4 4L19 7",
  phone: "M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  pin: "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
  clock: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-14v5l3.5 2",
  chat: "M4 5h16v11H9l-5 4V5Z",
  shield: "M12 3 5 6v6c0 4.4 3 8.2 7 9 4-.8 7-4.6 7-9V6l-7-3Z",
  globe: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm-9-9h18M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3Z",
  users: "M9 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-6 9c0-3.3 2.7-6 6-6s6 2.7 6 6M17 8.5a3 3 0 1 0 0-4M21 20a5.4 5.4 0 0 0-3.5-5",
  sparkle: "M12 3.5 13.8 9 19 10.8 13.8 12.6 12 18l-1.8-5.4L5 10.8 10.2 9 12 3.5Z",
  euro: "M17 6.5A6.5 6.5 0 0 0 7.2 12 6.5 6.5 0 0 0 17 17.5M4.5 10.5h7M4.5 13.5h7",
};

export function Icon({
  name,
  className = "h-5 w-5",
  ...rest
}: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}

export type { IconName };
