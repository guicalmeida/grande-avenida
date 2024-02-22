import { Course } from "@/models/course.model";

export default function CourseHeader({ course }: { course: Course }) {
  const { titulo } = course;

  return (
    <div>
      <h2 className="font-timesNow text-6xl md:text-[100px] font-normal leading-10 md:leading-[90px] tracking-[-2px] mb-5">
        {titulo}
      </h2>
    </div>
  );
}
