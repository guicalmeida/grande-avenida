"use client";

import dayjs from "dayjs";
import classes_btn from "../../../public/classes_btn.svg";
import slide1 from "../../../public/tmp/slide1.webp";
import Image from "next/image";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const slides = [
  {
    title: "Vídeo art e a era do conteúdo",
    img: slide1,
    path: "/",
    startDate: "2024-01-20T01:55:24.000Z",
    endDate: "2024-01-23T01:55:24.000Z",
  },
  {
    title: "Trajetos da mente",
    img: slide1,
    path: "/",
    startDate: "2024-01-20T01:55:24.000Z",
    endDate: "2024-01-23T01:55:24.000Z",
  },
  {
    title: "Título do curso",
    img: slide1,
    path: "/",
    startDate: "2024-01-20T01:55:24.000Z",
    endDate: "2024-02-23T01:55:24.000Z",
  },
  {
    title: "Título do curso 2",
    img: slide1,
    path: "/",
    startDate: "2024-01-20T01:55:24.000Z",
    endDate: "2024-01-23T01:55:24.000Z",
  },
];

export default function Cursos() {
  return (
    <main className="container mx-auto">
      <div className="flex justify-between mb-12 items-center">
        <h1 className="font-timesNow text-[120px] font-normal leading-[120px] tracking-[-2.4px]">
          Cursos
        </h1>
        <a href="/">
          <Image
            src={classes_btn}
            alt="Explore nossos cursos atuais e futuros"
          />
        </a>
      </div>
      <hr role="separator" className="border-dotted border-t-1 border-black" />
      {slides.map((slide, i) => {
        const datesStr = `${dayjs(slide.startDate).format("DD MMM")} - ${dayjs(
          slide.endDate
        ).format("DD MMM")}`;
        return (
          <>
            <div key={slide.title} className="my-5 flex justify-between">
              <div className="max-w-[650px] flex flex-col justify-between">
                <div>
                  <h2 className="font-timesNow text-[100px] font-normal leading-[90px] tracking-[-2px] mb-8">
                    {slide.title}
                  </h2>
                  <div className="flex gap-7 font-azeret font-medium uppercase text-lg">
                    <p className="font-medium text-lg leading-[22px] tracking-[-0.36px] uppercase">
                      Próxima
                      <br />
                      turma
                    </p>
                    <p className="bg-primary px-[27px] py-[17px] text-sm border-solid border-2 border-black rounded-[100px] w-[fit-content]">
                      {datesStr}
                    </p>
                  </div>
                </div>
                <a
                  href={slide.path}
                  className="bg-white px-[30px] py-[20px] font-azeret font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px] w-[fit-content]"
                >
                  <span>saiba mais</span>
                </a>
              </div>
              <Image
                className="object-cover max-h-[500px] h-[100%] max-w-[560px] rounded-[60px]"
                src={slide.img}
                alt="imagem"
              />
            </div>
            {i !== slides.length - 1 && (
              <hr
                role="separator"
                className="border-dotted border-t-1 border-black"
              />
            )}
          </>
        );
      })}
    </main>
  );
}
