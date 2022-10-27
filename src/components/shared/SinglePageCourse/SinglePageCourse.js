import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MDBBtn } from "mdb-react-ui-kit";
import ReactToPdf from "react-to-pdf";
const SinglePageCourse = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse);
  const { _id, title, image_url, details } = singleCourse;
  return (
    <ReactToPdf x={1} y={1} scale={0.4}>
            {({ toPdf, targetRef }) => (
              <div ref={targetRef}>
              <Card className="container p-4">
              <Card.Title className="text-center fs-1 p-4">{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                  
                  <Card.Text>{details}</Card.Text>
        
                  <Link to={`/checkout/${_id}`}>
                    {" "}
                    <MDBBtn size="lg" >Get Premium</MDBBtn>
                    
                  </Link>
                  <MDBBtn size="lg" onClick={toPdf} >Download Pdf</MDBBtn>
                </Card.Body>
              </Card>
            </div>
)}
        </ReactToPdf>
    
  );
};

export default SinglePageCourse;
