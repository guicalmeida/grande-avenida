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
      <h2 className="font-timesNow text-[100px] font-normal leading-[90px] tracking-[-2px] mb-8">
        {titulo}
      </h2>
      <div className="flex gap-7 font-azeret font-medium uppercase text-lg">
        <p className="font-medium text-lg leading-[22px] tracking-[-0.36px] uppercase">
          {status}
        </p>
        <p className="bg-primary px-[27px] py-[17px] text-sm border-solid border-2 border-black rounded-[100px] w-[fit-content]">
          {datesStr}
        </p>
      </div>
    </div>
  );
}
