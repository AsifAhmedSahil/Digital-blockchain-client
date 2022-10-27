import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import { CiUser } from "react-icons/ci";
import { MDBSwitch } from "mdb-react-ui-kit";
import { Image } from "react-bootstrap";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/10/01/blockchain-logo-cloud-cryptocurrency-icon-vector-20611001.webp"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
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
                <Button
                  onClick={handleLogout}
                  href="login"
                  variant="light"
                  className="mx-4"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button href="login" variant="primary" className="mx-4 mb-lg-0 mb-sm-3 ">
                  Login
                </Button>
                <Button href="register" variant="primary" >
                  Sign Up
                </Button>
              </>
            )}

            <Nav.Link eventKey={2} href="#memes">
              {user?.displayName}
            </Nav.Link>

            {user?.photoURL ? 
              <Image roundedCircle style={{ width: '40px' }} className="mx-2" src={user?.photoURL}></Image>
            : 
              <Nav.Link
                type="button"
                class="btn btn-secondary"
                data-mdb-toggle="tooltip"
                data-mdb-placement="bottom"
                title={user?.displayName}
              >
                <CiUser />
              </Nav.Link>
            }
            <div className="d-flex align-items-center">
              {" "}
              <MDBSwitch
                id="flexSwitchCheckDefault"
                label="Default switch checkbox input"
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
