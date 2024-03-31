"use client";

import Glider from "react-glider";
import Image from "next/image";
import arrow_left from "../../public/arrow_left.svg";
import { useEffect, useRef, useState } from "react";
import { Carrossel } from "@/models/home.model";
import useMobileCheck from "@/hooks/useMobileCheck";

export default function BigSlider({
  slides,
}: {
  slides: Carrossel[];
}) {
  const dotsEl = useRef<HTMLDivElement>(null);
  const leftArrowEl = useRef<HTMLButtonElement>(null);
  const rightArrowEl = useRef<HTMLButtonElement>(null);
  const [isReady, setIsReady] = useState(false);
  const isMobile = useMobileCheck();

  useEffect(() => {
    if (dotsEl?.current) {
      setIsReady(true);
    }
  }, []);
  return (
    <div className="relative h-[552px] md:h-[720px]">
      <div className="md:static absolute w-[calc(100vw-1.5rem)] md:w-auto">
        {isReady && (
          <Glider
            arrows={{
              prev: leftArrowEl.current,
              next: rightArrowEl.current,
            }}
            hasArrows={!isMobile}
            hasDots
            dots={dotsEl.current}
            rewind
            duration={0.3}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {slides.map((slide) => {
              const { descricao, id, imagem, url } = slide;
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
          ref={leftArrowEl}
          aria-label="navegar para a esquerda"
          className="hidden md:block absolute z-10 md:h-[600px] bottom-0 left-1"
        >
          <Image
            className="shadow z-10 w-10 h-10 invert object-contain"
            alt="flecha apontada para esquerda"
            src={arrow_left}
          />
        </button>{" "}
        <button
          ref={rightArrowEl}
          aria-label="navegar para a direita"
          className="hidden md:block absolute md:h-[600px] bottom-0 md:right-1 z-10"
        >
          <Image
            className="shadow w-10 h-10 invert object-contain scale-x-[-1]"
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
    </div>
  );
}
