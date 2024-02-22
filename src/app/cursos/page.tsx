"use client";

import dayjs from "dayjs";
import courses_btn from "../../../public/courses_btn.svg";
import Image from "next/image";
import "dayjs/locale/pt-br";
import CourseHeader from "@/components/CourseHeader";
import { coursesMock } from "@/mocks/courses.mock";
import createSlug from "@/utils/createSlug";
import { getNextCourseId } from "@/utils/getNextCourseId";
import Separator from "@/components/Separator";
import LinkButton from "@/components/LinkButton";
import Title from "@/components/Title";
dayjs.locale("pt-br");

export default function Cursos() {
  const nextCourseId = getNextCourseId(coursesMock);
  return (
    <main className="container mx-auto px-5 my-[72px] ">
      <div className="flex justify-between mb-12 items-center">
        <Title heading="h1">
          Cursos
        </Title>
        <a href="/">
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
            <div key={slide.titulo} className="my-5 flex justify-between">
              <div className="max-w-[650px] flex flex-col justify-between">
                <CourseHeader
                  course={slide}
                  isNextClass={nextCourseId === slide.id}
                />
                <LinkButton href={`cursos/${createSlug(slide.titulo)}`}>
                  Saiba mais
                </LinkButton>
              </div>
              <Image
                className="object-cover max-h-[500px] h-[100%] max-w-[560px] rounded-[60px]"
                src={slide.capa.url}
                alt="imagem"
                width={slide.capa.width}
                height={slide.capa.height}
              />
            </div>
            {i !== coursesMock.length - 1 && <Separator />}
          </>
        );
      })}
    </main>
  );
}
