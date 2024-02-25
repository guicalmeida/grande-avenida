import type { Metadata } from "next";
import "glider-js/glider.min.css";
import "./globals.css";
import { azeret_mono, timesNow } from "../fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: { template: "%s | A Grande Avenida", default: "A Grande Avenida" },
  description:
    "A Grande Avenida é uma sala para experimentar, em pequenas instalações, temas e conceitos trabalhados nos cursos curtos que o espaço promove em anarqueologia das mídias, arte-mídia e cultura do conteúdo.",
  keywords: ["artes", "aulas", "cursos", "instalações"],
  openGraph: {
    siteName: "A Grande Avenida",
    images: {
      url: "https://media.graphassets.com/mTLd1KjcSvSAyyPvaq50",
      width: 120,
      height: 38,
    },
    locale: "pt_BR",
    type: "website",
    url: "https://www.agrandeavenida.com/",
  },
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
