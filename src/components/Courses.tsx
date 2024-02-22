"use client";

import Glider from "react-glider";
import slide1 from "../../public/tmp/slide1.webp";
import courses_btn from "../../public/courses_btn.svg";
import Image from "next/image";
import Title from "./Title";
import arrow_left from "../../public/arrow_left.svg";
import useMobileCheck from "@/hooks/useMobileCheck";
import LinkButton from "./LinkButton";

const slides = [
  {
    title: "Vídeo art e a era do conteúdo",
    img: slide1,
    path: "/",
  },
  {
    title: "Trajetos da mente",
    img: slide1,
    path: "/",
  },
  {
    title: "Título do curso",
    img: slide1,
    path: "/",
  },
  {
    title: "Título do curso 2",
    img: slide1,
    path: "/",
  },
];

export default function Courses() {
  const isMobile = useMobileCheck();

  return (
    <div className="relative h-[463px] md:h-auto w-[calc(100vw-12px)] md:w-auto overflow-hidden">
      <div className="flex justify-between mb-3 md:mb-12 items-center">
        <Title heading="h2">Cursos</Title>
        <a href="/" className="hidden md:block">
          <Image
            src={courses_btn}
            alt="Explore nossos cursos atuais e futuros"
          />
        </a>
      </div>
      <div className="md:static absolute w-screen md:w-auto">
        <Glider
          className="h-[408px] md:h-[600px]"
          arrows={{
            prev: "#prevArrow_course",
            next: "#nextArrow_course",
          }}
          hasArrows={!isMobile}
          rewind
          duration={0.3}
          slidesToShow={isMobile ? 1.5 : 2.5}
          slidesToScroll={1}
        >
          {slides.map((slide) => {
            return (
              <div
                key={slide.title}
                className="relative px-11 md:px-[100px] py-11 mr-3 md:mr-5 z-40 h-full"
              >
                <div>
                  <div className="left-0 top-0 object-cover h-[408px] md:h-[600px] w-[247px] md:w-full rounded-[60px] absolute z-[1] bg-gradient-to-b	from-black via-transparent via-50%"></div>
                  <Image
                    className="left-0 top-0 object-cover h-[408px] md:h-[600px] w-full rounded-[60px] absolute z-0 "
                    src={slide.img}
                    alt="imagem"
                  />
                </div>
                <div className="h-[354px] md:h-[516px] flex flex-col items-center justify-between absolute z-10 left-0 m-auto w-3/4 right-0 top-7 md:top-11">
                  <a href={slide.path}>
                    <h3 className="text-center font-timesNow text-4xl  md:text-[90px] md:leading-[80px] font-normal text-[#F8F8F8]">
                      {slide.title}
                    </h3>
                  </a>
                  <LinkButton href={slide.path}>
                    saiba mais
                  </LinkButton>
                </div>
              </div>
            );
          })}
        </Glider>
        <button
          id="prevArrow_course"
          aria-label="navegar para a esquerda"
          className="hidden md:block absolute z-10 top-0 bottom-0 left-1"
        >
          <Image
            className="shadow z-10 w-10 h-10 invert object-contain"
            alt="flecha apontada para esquerda"
            src={arrow_left}
          />
        </button>{" "}
        <button
          id="nextArrow_course"
          aria-label="navegar para a direita"
          className="hidden md:block absolute top-0 bottom-0 md:right-1 z-10"
        >
          <Image
            className="shadow w-10 h-10 invert object-contain scale-x-[-1]"
            alt="flecha apontada para direita"
            src={arrow_left}
          />
        </button>
      </div>
    </div>
  );
}
