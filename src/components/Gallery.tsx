import gallery_btn from "../../public/gallery_btn.svg";
import Image from "next/image";
import BigSlider from "./BigSlider";
import Title from "./Title";
import { Galeria } from "@/models/home.model";

export default function Gallery({images}: {images: Galeria[]}) {
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
      <BigSlider slides={images} />
    </>
  );
}
