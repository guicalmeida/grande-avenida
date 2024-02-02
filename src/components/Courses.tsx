"use client";

import Glider from "react-glider";
import slide1 from "../../public/tmp/slide1.webp";
import courses_btn from "../../public/courses_btn.svg";
import Image from "next/image";

export default function Courses() {
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
  return (
    <>
      <div className="flex justify-between mb-12 items-center">
        <h2 className="font-timesNow text-[120px] font-normal leading-[120px] tracking-[-2.4px]">
          Cursos
        </h2>
        <a href="/">
          <Image
            src={courses_btn}
            alt="Explore nossos cursos atuais e futuros"
          />
        </a>
      </div>
      <Glider
        hasArrows
        hasDots
        dots="#dots"
        slidesToShow={2.5}
        slidesToScroll={1}
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.title}
              className="!h-[600px] relative px-[100px] py-11 mr-5"
            >
              <Image
                className="left-0 top-0 object-cover h-[100%] w-[100%] rounded-[60px] absolute -z-10 "
                src={slide.img}
                alt="imagem"
              />
              <div className=" h-[100%] w-[100%] flex flex-col items-center justify-between">
                <a href={slide.path}>
                  <h3
                    style={{ textShadow: "0px 0px 12px #000" }}
                    className="font-timesNow text-[90px] leading-[80px] font-normal text-[#F8F8F8]"
                  >
                    {slide.title}
                  </h3>
                </a>
                <a
                  href={slide.path}
                  className="bg-white px-[30px] py-[20px] font-azeret font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px]"
                >
                  <span>saiba mais</span>
                </a>
              </div>
            </div>
          );
        })}
      </Glider>
    </>
  );
}
