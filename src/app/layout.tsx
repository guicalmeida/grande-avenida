import type { Metadata } from "next";
import "glider-js/glider.min.css";
import "./globals.css";
import { azeret_mono, timesNow } from "../fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Grande Avenida",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${timesNow.variable} ${azeret_mono.variable} bg-white`}
    >
      <body className="font-timesNow overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
