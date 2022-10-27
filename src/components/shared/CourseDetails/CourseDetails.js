import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const CourseDetails = () => {
  const allCourse = useLoaderData();
  console.log(allCourse);

  return (
    <>
      {allCourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </>
  );
};

export default CourseDetails;
