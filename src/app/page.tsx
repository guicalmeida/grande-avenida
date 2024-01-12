import Classes from "@/components/Classes";
import Header from "@/components/Header";
import BigSlider, { SlideProps } from "@/components/BigSlider";
import TextIntro from "@/components/TextIntro";
import slide1 from "../../public/tmp/slide1.webp";
import Gallery from "@/components/Gallery";

const homeSlides: SlideProps[] = [
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
  {
    title: "A GRANDE AVENIDA",
    href: "/a",
    imgUrl: slide1,
    imgAltText: "imagem placeholder",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <div className="mt-14">
        <BigSlider slides={homeSlides} />
      </div>
      <div className="mt-11">
        <TextIntro />
      </div>
      <div className="mt-[200px]">
        <Classes />
      </div>
      <div className="mt-[170px]">
        <Gallery />
      </div>
    </main>
  );
}
