import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://blockchain-courses-server-asifahmedsahil12-gmailcom.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="border ">
        {categories.map((category) => (
          <div className=" p-4 ">
            <Link
              className="d-flex p-4 fs-5 text-center text-decoration-none border bg-dark text-white"
              key={category.id}
              to={`/courses/${category.id}`}
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
