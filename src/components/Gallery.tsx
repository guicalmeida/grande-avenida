import slide1 from "../../public/tmp/slide1.webp";
import gallery_btn from "../../public/gallery_btn.svg";
import Image from "next/image";
import BigSlider from "./BigSlider";
import Title from "./Title";

const galeriaProps = [
  {
    imgUrl: slide1,
    imgAltText: "imagem placeholder 1",
  },
  {
    imgUrl: slide1,
    imgAltText: "imagem placeholder 2",
  },
  {
    imgUrl: slide1,
    imgAltText: "imagem placeholder 3",
  },
  {
    imgUrl: slide1,
    imgAltText: "imagem placeholder 4",
  },
];

export default function Gallery() {
  return (
    <>
      <div className="flex justify-between mb-3 md:mb-12 items-center">
        <Title heading='h2'>
          Galeria
        </Title>
        <a href="/" className="hidden md:block">
          <Image
            src={gallery_btn}
            alt="O espaço e o que rola por lá!"
          />
        </a>
      </div>
      <BigSlider slides={galeriaProps} />
    </>
  );
}
