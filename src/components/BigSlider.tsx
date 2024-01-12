"use client";

import Glider from "react-glider";
import Image, { StaticImageData } from "next/image";
import { GliderMethods } from "react-glider/dist/types";

export type SlideProps = {
  title?: string;
  imgUrl: string | StaticImageData;
  imgAltText: string;
  href?: string;
};

export default function BigSlider({ slides }: { slides: SlideProps[] }) {
  return (
    <div className="relative">
      <Glider
        hasArrows
        hasDots
        dots="#dots"
        rewind
        duration={0.1}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {slides.map((slide) => {
          const ParentTag = (
            slide.href ? "a" : "div"
          ) as keyof JSX.IntrinsicElements;
          return (
            <ParentTag key={slide.imgAltText} href={slide.href}>
              <Image
                className="object-cover w-[100%] mx-auto h-[720px] rounded-[60px]"
                alt={slide.imgAltText}
                src={slide.imgUrl}
              />
            </ParentTag>
          );
        })}
      </Glider>
      <div className="absolute bottom-[40px] right-0 left-0" id="dots"></div>
    </div>
  );
}
