import { getCurso, getCursos } from "@/services/cursos";
import CourseHeader from "@/components/CourseHeader";
import { CourseInfoWithQParam } from "@/components/CourseInfoWithQParam";
import HTMLText from "@/components/HTMLText";
import Teacher from "@/components/Teacher";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import stripHTML from "@/utils/stripHTML";
import CourseRequirements from "@/components/CourseRequirements";

export async function generateStaticParams() {
  const courses = await getCursos();

  return courses?.map((curso) => {
    return {
      slug: curso.slug,
    };
  });
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course = await getCurso(params.slug);
  const previousImages = (await parent).openGraph?.images || [];

  const firstParagraph = stripHTML(course.corpo.html)
    .split("\n")
    .filter((val) => val != "" && !!val)[0];

  return {
    title: course.titulo,
    description: firstParagraph,
    openGraph: {
      images: [course.capa.url, ...previousImages],
      type: "article",
      authors: course.professores.map((prof) => prof.nome),
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const course = await getCurso(params.slug);
  const { capa, corpo, professores } = course;

  return (
    <main className="container mx-auto px-5 my-[72px]">
      <div className="flex flex-col">
        <div className="flex grow flex-col md:flex-row md:min-h-[700px]">
          <div className="grow md:mr-6 flex flex-col justify-between ">
            <div>
              <span className="uppercase font-azeret font-semibold text-base md:text-2xl leading-6 mb-2 md:mb-4 block">
                Curso
              </span>
              <CourseHeader course={course} />
              <div className="hidden md:block">
                <CourseInfoWithQParam course={course} />
              </div>
            </div>
            <div className="hidden md:block">
              <CourseRequirements
               curso={course} />
            </div>
          </div>
          <Image
            className="object-cover md:max-h-[100%] mt-4 md:mt-0 md:w-[54%] rounded-[60px] h-[400px] md:max-w-full md:min-w-[54%]"
            src={capa.url}
            alt="imagem"
            width={capa.width}
            height={capa.height}
          />
          <div className="md:hidden block mt-3">
            <CourseInfoWithQParam course={course} />
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
          <CourseRequirements curso={course} />
        </div>
      </div>
    </main>
  );
}
