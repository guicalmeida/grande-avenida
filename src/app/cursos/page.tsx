"use client";

import dayjs from "dayjs";
import courses_btn from "../../../public/courses_btn.svg";
import Image from "next/image";
import "dayjs/locale/pt-br";
import CourseHeader from "@/components/CourseHeader";
import { coursesMock } from "@/mocks/courses.mock";
import { getNextCourseId } from "@/utils/getNextCourseId";
import Separator from "@/components/Separator";
import Title from "@/components/Title";
import CourseInfo from "@/components/CourseInfo";
import useMobileCheck from "@/hooks/useMobileCheck";
dayjs.locale("pt-br");

export default function Cursos() {
  const nextCourseId = getNextCourseId(coursesMock);
  const isMobile = useMobileCheck();
  return (
    <main className="container mx-auto px-5 my-[72px] ">
      <div className="flex justify-between mb-11 md:mb-12 items-center">
        <Title heading="h1">Cursos</Title>
        <a href="/" className="hidden md:block">
          <Image
            src={courses_btn}
            alt="Explore nossos cursos atuais e futuros"
          />
        </a>
      </div>
      <Separator />
      {coursesMock.map((slide, i) => {
        return (
          <>
            <div key={slide.titulo} className="my-5 flex flex-col md:flex-row  md:justify-between">
              <div className="max-w-[650px] flex flex-col justify-between">
                <CourseHeader course={slide} />
                {!isMobile && (
                  <CourseInfo
                    course={slide}
                    isNextClass={nextCourseId === slide.id}
                    moreDetails
                  ></CourseInfo>
                )}
              </div>
              <Image
                className="object-cover max-h-[500px] w-[100%] h-[100%] max-w-[560px] rounded-[60px] mb-5 md:mb-0"
                src={slide.capa.url}
                alt="imagem"
                width={slide.capa.width}
                height={slide.capa.height}
              />
              {isMobile && (
                <CourseInfo
                  course={slide}
                  isNextClass={nextCourseId === slide.id}
                  moreDetails
                ></CourseInfo>
              )}
            </div>
            {i !== coursesMock.length - 1 && <Separator />}
          </>
        );
      })}
    </main>
  );
}
