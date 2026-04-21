import React, { useState } from "react";
import fontlogo from "../assets/fontlogo.png";
import logo from "../assets/logo.png";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
          "Password must be 8+ chars, include A-Z, a-z, number & symbol"
        )
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Login Successful 🚀");
    },
  });

  return (
    <div className="login-page">
      <div  className="logo-container">
        <img
          src={fontlogo}
          style={{ width: "150px" }}
          alt="logo"
          className="top-logo"
        />
        <img
          src={logo}
          alt="logo"
          className="small-logo"
        />
      </div>

      {/* LEFT */}
      <div className="login-left">
        <h2>Welcome Back</h2>
        <p>Please enter your details</p>

        <form onSubmit={formik.handleSubmit}>

          {/* EMAIL */}
          <div className="input-box">

            <FaRegUserCircle className="input-icon" />
            <input
              type="text"
              name="email"
              placeholder="Email or phone"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}

          {/* PASSWORD */}
          <div className="password-box">

            <MdLockOutline className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>

          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}

          <div className="login-options">
            <span>Remember me</span>
            <span className="forgot">Forgot Password?</span>
          </div>

          <button type="submit" className="signin">
            Sign in
          </button>
        </form>

        <button
          type="button"
          className="google"
          onClick={() => alert("Google login")}
        >
          <FcGoogle className="googleLogo" />Continue with Google
        </button>

        <p className="signup">
          Don't have an account?{" "}
          <span onClick={() => alert("Go to Signup")}>Sign Up</span>
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="login-right">
        <img src="https://my.fundedfirm.com/login-bg.webp" alt="info"/>
      </div>

    </div>
  );
};

export default Login;