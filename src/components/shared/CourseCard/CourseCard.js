import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { name, image_url, id, details } = course;
  console.log(course);

  return (
    <div className="container mb-4 ">
      <div className="row">
        <div className="col md-3">
          <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{details}</Card.Text>
              <Link to={`/courses/${id}`}>
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
