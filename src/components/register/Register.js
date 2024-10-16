import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./register.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name cannot exceed 20 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Email must be a valid Gmail address"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      formdata.append("password_confirmation", values.password_confirmation);

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/register",
          formdata,
          { headers: { "Content-Type": "'application/json" } }
        );

        if (res.data.status === 200) {
        

          toast.success("User registered in successfully!", { onClose: () => { navigate("/login");}});
        } else {
          toast.error("Failed to register user!");
        }
      } catch (error) {
        toast.error("Something went wrong, try again!");
      }
      setLoading(false);
    },
  });

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      {loading && (
        <div className="loader-overlay d-flex vh-100 align-items-center justify-content-center">
          <div class="loader-container d-flex justify-content-center align-items-center px-5 py-4 bg-light">
            <div class="spinner-border text-success " role="success"></div>
          </div>
        </div>
      )}
      <form className="form w-50" onSubmit={formik.handleSubmit}>
        <div className="reg-input-container">
          <input
            className="form-control p-2"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-danger">{formik.errors.name}</p>
          )}
        </div>

        <div className="reg-input-container">
          <input
            className="form-control p-2"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="reg-input-container">
          <input
            className="form-control p-2"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
        </div>

        <div className="reg-input-container">
          <input
            className="form-control p-2"
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password_confirmation &&
          formik.errors.password_confirmation ? (
            <p className="text-danger">{formik.errors.password_confirmation}</p>
          ) : null}
        </div>

        <button
          disabled={loading}
          className="btn btn-warning w-100 p-2 text-light"
          type="submit"
        >
          REGISTER
        </button>
        <Link to={'/login'}>Already have an account? GOTO LOGIN</Link>
      </form>
    </div>
  );
};

export default Register;
