import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import CourseCategories from '../CourseCategories/CourseCategories';

const Courses = () => {
  
  return (
    <div><Container>
    <Row>
        <Col lg="5"><CourseCategories/></Col>
        <Col lg="7"><Outlet></Outlet></Col>
    </Row>
  </Container></div>
    
  )
}

export default Courses