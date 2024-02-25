"use client";

import Glider from "react-glider";
import Image from "next/image";
import Title from "./Title";
import arrow_left from "../../public/arrow_left.svg";
import useMobileCheck from "@/hooks/useMobileCheck";
import LinkButton from "./LinkButton";
import { HomeCourse } from "@/models/home.model";
import Link from "next/link";

export default function HomeCoursesSection({
  courses,
}: {
  courses: HomeCourse[];
}) {
  const isMobile = useMobileCheck();

  return (
    <div className="relative h-[463px] md:h-[768px] w-[calc(100vw-12px)] md:w-auto overflow-hidden">
      <div className="flex justify-between mb-3 md:mb-12 items-center">
        <Link href="/cursos">
          <Title heading="h2">Cursos</Title>
        </Link>
      </div>
      <div className="md:static absolute w-screen md:w-auto md:h-[600px]">
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
          {courses.map((slide) => {
            const { capa, slug, titulo } = slide;

            return (
              <div
                key={titulo}
                className="px-11 md:px-10 py-11 mr-3 md:mr-5 z-40 md:min-h-[600px] w-full min-h-[408px] rounded-[60px] bg-cover flex flex-col items-center justify-between"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url(${capa.url})`,
                }}
              >
                <Link href={`cursos/${slug}`}>
                  <h3 className="text-center font-timesNow text-4xl  md:text-[90px] md:leading-[80px] font-normal text-[#F8F8F8]">
                    {titulo}
                  </h3>
                </Link>
                <LinkButton href={`cursos/${slug}`}>saiba mais</LinkButton>
              </div>
            );
          })}
        </Glider>
        <button
          id="prevArrow_course"
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
          id="nextArrow_course"
          aria-label="navegar para a direita"
          className="hidden md:block absolute md:h-[600px] bottom-0 md:right-1 z-10"
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
