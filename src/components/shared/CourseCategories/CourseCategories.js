import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div >
      {/* <h3>All Categories: {categories.length}</h3> */}
      <div className="border ">
        { 
          // categories.map(category => <p p key={category.id}>
          //     <Link to={`/courses/${category.id}`}>{category.name}</Link>
          // </p>)
          categories.map((category) => (
            <div className=" p-4 ">
              <Link
                className="d-flex p-4 fs-5 text-center text-decoration-none border bg-dark text-white"
                key={category.id}
                to={`/courses/${category.id}`}
              >
                {category.name}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CourseCategories;
