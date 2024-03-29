import { Course, availabilityMap } from "@/models/course.model";
import dayjs from "dayjs";
import LinkButton from "./LinkButton";
dayjs.locale("pt-br");

export default function CourseInfo({
  course,
  isNextClass,
  moreDetails,
}: {
  course: Course;
  isNextClass: boolean;
  moreDetails?: boolean;
}) {
  const { statusDeInscricao, inicio, fim, slug } = course;

  const datesStr = `${dayjs(inicio).format("DD MMM")} - ${dayjs(fim).format(
    "DD MMM"
  )}`;

  const isPastCourse = dayjs(fim).isBefore(dayjs());

  const status = availabilityMap(statusDeInscricao, isNextClass);
  return (
    <div className="flex items-center md:justify-between md:flex-col md:gap-7 font-azeret font-medium uppercase text-lg md:grow md:items-start md:h-full">
      <div className="flex md:gap-7 items-center">
        <p className="h-fit mr-4 md:mr-0 font-medium text-xs md:text-lg md:leading-[22px] uppercase whitespace-pre">
          {isPastCourse ? "curso finalizado" : status}
        </p>
        {!isPastCourse && (
          <p className="block bg-primary px-[18px] md:px-[30px] py-3 md:py-[20px] font-azeret font-medium uppercase leading-[9px] md:leading-[14px] text-[9px] md:text-sm border-solid border-[1px] md:border-2 border-black rounded-[100px] w-[fit-content] mr-5">
            {datesStr}
          </p>
        )}
      </div>
      {moreDetails && (
        <LinkButton href={`cursos/${slug}?proximo=${isNextClass}`}>Saiba mais</LinkButton>
      )}
    </div>
  );
}
