import localFont from "next/font/local";

export const timesNow = localFont({
  src: [
    {
      path: "../public/fonts/AGA_Times_Now_Regular.woff",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-timesNow",
});

export const azeret_mono = localFont({
  src: "../public/fonts/AzeretMono-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-azaretMono",
});
