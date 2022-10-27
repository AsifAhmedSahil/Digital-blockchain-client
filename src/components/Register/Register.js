import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <Form onSubmit={handleSubmit} className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter Your Photo Url"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
      <p className="small fw-bold mt-2 pt-1 mb-2">
        Already have an account?{" "}
        <a href="/login" className="link-danger">
          Login
        </a>
      </p>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
