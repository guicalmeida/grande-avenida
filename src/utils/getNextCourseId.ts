import { Course } from "@/models/course.model";
import dayjs from "dayjs";

export const getNextCourseId = (courses: Course[]) => {
    let closest: Course | undefined = undefined;

    courses.forEach((course) => {
      const isBeforeToday = dayjs(course.inicio).isBefore(dayjs());
      if (!closest && isBeforeToday) {
        closest = course;
      } else if (
        isBeforeToday &&
        dayjs(course.inicio).isAfter(dayjs(closest?.inicio))
      ) {
        closest = course;
      }
    });
      return closest?.['id'];
  };