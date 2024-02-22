import { Course } from "@/models/course.model";
import dayjs from "dayjs";

export const getNextCourseId = (courses: Course[]) => {
  let closest: Course | undefined = undefined;

  courses.forEach((course) => {
    const isAfterToday = dayjs(course.inicio).isAfter(dayjs());
    if (!closest && isAfterToday) {
      closest = course;
    } else if (
      isAfterToday &&
      dayjs(course.inicio).isAfter(dayjs(closest?.inicio))
    ) {
      closest = course;
    }
  });
  return closest?.["id"];
};

// this function will sort as the classes should be organized
// in the website: upcoming closest to furthest and then past classes
export function sortCoursesInViewOrder(classArray: Course[]) {
  const today = dayjs();

  const upcomingClasses = [];
  const pastClasses = [];

  for (const course of classArray) {
    const startDate = dayjs(course.inicio);
    if (startDate.isAfter(today)) {
      upcomingClasses.push(course);
    } else {
      pastClasses.push(course);
    }
  }

  upcomingClasses.sort((a, b) => dayjs(a.inicio).diff(dayjs(b.inicio)));
  pastClasses.sort((a, b) => dayjs(b.inicio).diff(dayjs(a.inicio)));

  return upcomingClasses.concat(pastClasses);
}
