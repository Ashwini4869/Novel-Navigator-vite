import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (event) => {
      event.preventDefault;
      const url = "http://127.0.0.1:5000/register";
      axios
        .post(url, formik.values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(formik.values);

      formik.resetForm();
    },
  });
  return (
    <div>
      <Header />
      <div className="w-50 p-5">
        <h1 className="mb-4">Welcome to Register Page.</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" size="lg">
            Register Now!
          </Button>
        </Form>
        <h3 className="mt-5 mb-4">Already Have an account?</h3>
        <Link to="/login" className="btn btn-info btn-lg text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
