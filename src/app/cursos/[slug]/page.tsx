import CourseTemplate from "@/templates/Course";
import { getCurso, getCursos } from "@/services/cursos";

export async function generateStaticParams() {
  const courses = await getCursos();

  return courses?.map((curso) => {
    return {
      slug: curso.slug,
    };
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const curso = await getCurso(params.slug);

  return (
    <main className="container mx-auto px-5 my-[72px]">
      <CourseTemplate course={curso} />
    </main>
  );
}
