import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import "./login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../includes/contexts/authContext/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
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
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("email", values.email);
      formdata.append("password", values.password);

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/login",
          formdata
        );

        if (res.status === 200) {
          const { name, email, id, access_token } = res.data;
          authContext.dispatch({
            type: "LOGIN",
            payload: { name, email, id, authToken: access_token },
          });

          toast.success("User logged in successfully!", {onClose: () => {navigate("/")}});
        }
      } catch (error) {
        if (error.status === 401) {
          toast.error("Invalid email or password!");
        }
        else{
          toast.error("Something went wrong, try again!");
        }
      } finally {
        setLoading(false);
      }
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

        <button
          disabled={loading}
          className="btn btn-warning w-100 p-2 text-light"
          type="submit"
        >
          LOGIN
        </button>
        <Link to={"/register"}>GO TO REGISTER</Link>
      </form>
    </div>
  );
};

export default Login;
