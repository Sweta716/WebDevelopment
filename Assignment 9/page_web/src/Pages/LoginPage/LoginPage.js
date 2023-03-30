import React, { useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container, Form, Button } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
      window.location.href = "/home";
    } else {
      console.log(email, password);
      alert("Email/Password is Incorrect! Please try again!");
    }
  };

  return (
    <>
      <MainScreen title="Login" />
      <Container className="login-container">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submitBtn">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
