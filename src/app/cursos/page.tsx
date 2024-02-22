import dayjs from "dayjs";
import courses_btn from "../../../public/courses_btn.svg";
import Image from "next/image";
import "dayjs/locale/pt-br";
import CourseHeader from "@/components/CourseHeader";
import { sortCoursesInViewOrder } from "@/utils/getNextCourseId";
import Separator from "@/components/Separator";
import Title from "@/components/Title";
import CourseInfo from "@/components/CourseInfo";
import graphqlClient from "@/services/client";
import cursosQuery from "@/services/cursos";
import { Course } from "@/models/course.model";
dayjs.locale("pt-br");

async function getCursos() {
  const res = await graphqlClient.request<{ cursos: Course[] }>(cursosQuery);

  return res.cursos;
}

export default async function Cursos() {
  const courses = await getCursos();
  const orderedCourses = sortCoursesInViewOrder(courses);

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
      {orderedCourses.map((curso, i) => {
        return (
          <div key={curso.id}>
            <div className="my-5 flex flex-col md:flex-row  md:justify-between md:min-h-[450px]">
              <div className="max-w-[650px] flex flex-col justify-between">
                <CourseHeader course={curso} />
                <div className="hidden md:block md:grow">
                  <CourseInfo
                    course={curso}
                    isNextClass={i === 0}
                    moreDetails
                  ></CourseInfo>
                </div>
              </div>
              <Image
                className="object-cover max-h-[500px] w-[100%] h-[100%] max-w-[560px] rounded-[60px] mb-5 md:mb-0"
                src={curso.capa.url}
                alt="imagem"
                width={curso.capa.width}
                height={curso.capa.height}
              />
              <div className="md:hidden block">
                <CourseInfo
                  course={curso}
                  isNextClass={i === 0}
                  moreDetails
                ></CourseInfo>
              </div>
            </div>
            {i !== courses.length - 1 && <Separator />}
          </div>
        );
      })}
    </main>
  );
}
