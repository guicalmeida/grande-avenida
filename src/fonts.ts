import { Azeret_Mono } from "next/font/google";
import localFont from "next/font/local";

export const timesNow = localFont({
  src: [
    {
      path: "../public/fonts/TimesNow-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNow-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNow-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNow-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNow-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNow-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNow-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNow-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/TimesNow-SemiLightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/TimesNow-SemiLight.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const azeret_mono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
});
