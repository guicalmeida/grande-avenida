'use client'

import CourseHeader from "@/components/CourseHeader";
import CourseInfo from "@/components/CourseInfo";
import HTMLText from "@/components/HTMLText";
import LinkButton from "@/components/LinkButton";
import Separator from "@/components/Separator";
import Teacher from "@/components/Teacher";
import { Course } from "@/models/course.model";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function CourseRequirements({
    formatoDaAula,
    valor,
  }: {
    formatoDaAula?: string;
    valor?: string;
  }) {
    return (
      <div className="uppercase font-azeret font-medium text-sm md:text-lg leading-6 flex flex-col whitespace-pre md:max-w-[450px]">
        {formatoDaAula && (
          <div>
            <Separator />
            <p className="my-4">{formatoDaAula}</p>
          </div>
        )}
        {valor && (
          <div>
            <Separator />
            <p className="my-4">{valor}</p>
          </div>
        )}
        <Separator />
        <div className="mt-4">
          <LinkButton href={"/"}>Inscreva-se</LinkButton>
        </div>
      </div>
    );
  }
  
  
export default function CourseTemplate({ course }: { course: Course }) {
    const { capa, corpo, formatoDaAula, valor, professores } = course;
    const qParams = useSearchParams()
    const isNext = qParams.get('proximo') === 'true'

  return (
    <div className="flex flex-col">
      <div className="flex grow flex-col md:flex-row">
        <div className="grow md:mr-6 flex flex-col justify-between ">
          <div>
            <span className="uppercase font-azeret font-semibold text-base md:text-2xl leading-6 mb-2 md:mb-4 block">
              Curso
            </span>
            <CourseHeader course={course} />
            <div className="hidden md:block">
              <CourseInfo course={course} isNextClass={isNext} />
            </div>
          </div>
          <div className="hidden md:block">
            <CourseRequirements formatoDaAula={formatoDaAula} valor={valor} />
          </div>
        </div>
        <Image
          className="object-cover md:h-[812px] mt-4 md:mt-0 md:w-[54%] rounded-[60px] h-[400px]"
          src={capa.url}
          alt="imagem"
          width={capa.width}
          height={capa.height}
        />
        <div className="md:hidden block mt-3">
          <CourseInfo course={course} isNextClass={isNext} />
        </div>
      </div>
      <div className="md:w-[54%] flex flex-col ml-auto mt-12">
        <h3 className="font-azeret uppercase font-semibold text-lg mb-9">
          Sobre o curso
        </h3>
        <HTMLText text={corpo.html} />
        <div className="mt-20 flex flex-col gap-8">
          {professores.map((prof) => {
            return <Teacher key={prof.id} teacher={prof} />;
          })}
        </div>
      </div>
      <div className="block md:hidden mt-11">
        <CourseRequirements formatoDaAula={formatoDaAula} valor={valor} />
      </div>
    </div>
  );
}
