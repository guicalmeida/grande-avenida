"use client";

import Glider from "react-glider";
import Image, { StaticImageData } from "next/image";
import arrow_left from "../../public/arrow_left.svg";
import { useEffect, useRef, useState } from "react";

export type SlideProps = {
  title?: string;
  imgUrl: string | StaticImageData;
  imgAltText: string;
  href?: string;
};

export default function BigSlider({ slides }: { slides: SlideProps[] }) {
  const dotsEl = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (dotsEl?.current) {
      setIsReady(true);
    }
  }, []);
  return (
    <div className="relative h-[552px] md:h-[720px]">
      {isReady && (
        <Glider
          arrows={{
            prev: "#prevArrow",
            next: "#nextArrow",
          }}
          hasArrows
          hasDots
          dots={dotsEl.current}
          rewind
          duration={0.3}
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
                  className="object-cover w-[100%] mx-auto h-[552px] md:h-[720px] rounded-[60px]"
                  alt={slide.imgAltText}
                  src={slide.imgUrl}
                  width={1554}
                  height={1085}
                />
              </ParentTag>
            );
          })}
        </Glider>
      )}
      <button
        id="prevArrow"
        aria-label="navegar para a esquerda"
        className="absolute z-10 top-0 bottom-0 left-1"
      >
        <Image
          className="shadow z-10 w-10 h-10  rounded-[60px] invert object-contain"
          alt="flecha apontada para esquerda"
          src={arrow_left}
        />
      </button>{" "}
      <button
        id="nextArrow"
        aria-label="navegar para a direita"
        className="absolute top-0 bottom-0 right-1 z-10"
      >
        <Image
          className="shadow w-10 h-10 rounded-[60px] invert object-contain scale-x-[-1]"
          alt="flecha apontada para direita"
          src={arrow_left}
        />
      </button>
      <div
        className="absolute bottom-[40px] right-0 left-0"
        ref={dotsEl}
        id="dots"
      ></div>
    </div>
  );
}
