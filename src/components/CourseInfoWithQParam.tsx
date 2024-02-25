'use client'

import { Course } from "@/models/course.model";
import CourseInfo from "./CourseInfo";
import { useSearchParams } from "next/navigation";

export function CourseInfoWithQParam({course, moreDetails}:{course: Course, moreDetails?: boolean}) {
    const qParams = useSearchParams()
    const isNext = qParams.get('proximo') === 'true'

    return (
        <CourseInfo isNextClass={isNext} course={course} moreDetails={moreDetails}/>
    )
  }