import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseCategories from '../CourseCategories/CourseCategories';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
  const course = useLoaderData()
  console.log(course);
  
  return (
    <div><Container>
    <Row>
        <Col lg="4"><CourseCategories/></Col>
        <Col lg="8"><CourseDetails/></Col>
    </Row>
  </Container></div>
    
  )
}

export default Courses