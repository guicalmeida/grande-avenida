import { Course, availabilityMap } from "@/models/course.model";
import dayjs from "dayjs";

export default function CourseHeader({
  course,
  isNextClass,
}: {
  course: Course;
  isNextClass: boolean;
}) {
  const { titulo, inicio, fim, statusDeInscricao } = course;
  const datesStr = `${dayjs(inicio).format("DD MMM")} - ${dayjs(fim).format(
    "DD MMM"
  )}`;

  const status = availabilityMap(statusDeInscricao, isNextClass);
  return (
    <div>
      <h2 className="font-timesNow text-6xl md:text-[100px] font-normal leading-10 md:leading-[90px] tracking-[-2px] mb-5">
        {titulo}
      </h2>
      <div className="flex gap-7 font-azeret font-medium uppercase text-lg">
        <p className="font-medium text-base md:text-lg leading-[22px] tracking-[-0.36px] uppercase whitespace-pre">
          {status}
        </p>
        <p className="bg-primary px-[18px] py-[10px] md:px-[27px] md:py-[17px] text-sm border-solid border-[0.65px] md:border-2 border-black rounded-[100px] w-[fit-content]">
          {datesStr}
        </p>
      </div>
    </div>
  );
}
