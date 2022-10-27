import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
const Header = () => {
  const { user,displayName } = useContext(AuthContext);
  console.log(user);
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">Digital Blockchain</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav>
          <Nav>
            {user?.uid ? (
              <>
                <Button href="login" variant="primary" className="mx-4">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button href="login" variant="primary" className="mx-4">
                  Login
                </Button>
                <Button href="register" variant="primary">
                  Sign Up
                </Button>
              </>
            )}

            <Nav.Link eventKey={2} href="#memes">
              {user?.displayName}
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              <CiUser
                data-bs-toggle="tooltip"
                data-bs-title="Hi! I'm tooltip"
                data-bs-placement="bottom"
              />
            </Nav.Link> */}
            <Nav.Link
              type="button"
              class="btn btn-secondary"
              data-mdb-toggle="tooltip"
              data-mdb-placement="bottom"
              title={user?.displayName}
            >
             <CiUser/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
