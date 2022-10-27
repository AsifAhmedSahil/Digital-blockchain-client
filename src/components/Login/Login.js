import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () =>{
    providerLogin(githubProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => console.error(error));

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
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
        Submit
      </Button>

      <Button
        className="mx-4"
        onClick={handleGoogleSignIn}
        variant="primary"
        type="submit"
      >
        <AiOutlineGooglePlus /> Google
      </Button>
      <Button
        className="mx-4"
        onClick={handleGithubSignIn}
        variant="primary"
        type="submit"
      >
        <AiOutlineGooglePlus /> Github
      </Button>
      <p className="small fw-bold mt-2 pt-1 mb-2">
        Don't have an account?{" "}
        <a href="/register" className="link-danger">
          Register
        </a>
      </p>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Login;
