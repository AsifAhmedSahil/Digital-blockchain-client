import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";

const Main = () => {
  return (
    <div>
        <Header/>
      <Container>
        <Row>
            <Col lg="5">Courses side</Col>
            <Col lg="7"><Outlet></Outlet></Col>

        </Row>
      </Container>
    </div>
  );
};

export default Main;
