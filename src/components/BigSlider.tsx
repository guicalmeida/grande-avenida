"use client";

import Glider from "react-glider";
import Image from "next/image";
import arrow_left from "../../public/arrow_left.svg";
import { useEffect, useRef, useState } from "react";
import { Carrossel } from "@/models/home.model";

export default function BigSlider({ slides }: { slides: Carrossel[] }) {
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
            const {descricao,id,imagem,url} = slide
            const ParentTag = (
              url ? "a" : "div"
            ) as keyof JSX.IntrinsicElements;
            return (
              <ParentTag key={id} href={url}>
                <Image
                  className="object-cover w-[100%] mx-auto h-[552px] md:h-[720px] rounded-[60px]"
                  alt={descricao}
                  src={imagem?.url}
                  width={imagem?.width}
                  height={imagem?.height}
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
