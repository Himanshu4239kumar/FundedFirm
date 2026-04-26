import React from "react";
import "./login.css"; // Iska CSS niche hai
import fontlogo from "../assets/fontlogo.png";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { useState } from "react";
import { FaRegUserCircle, FaLock } from "react-icons/fa";


import { IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      identifier: "", // Email ya Phone ke liye
      password: "",
      rememberMe: false
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required("Email or Phone number is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Login Data:", values);
      alert("Login Successful! 🚀");
    }
  });

  return (
    <Container fluid className="login-page-wrapper">
      <Row>
        {/* LEFT SIDE (FORM) */}
        <Col md={6} className="login-left-section">
          <div className="logo-container">
            <img src={fontlogo} alt="logo" className="top-logo" />
            <img src={logo} alt="small-logo" className="small-logo" />
          </div>

          <div className="form-content">
            <h2>Welcome Back</h2>
            <p>Welcome back! Please enter your details.</p>

            <form onSubmit={formik.handleSubmit}>
              {/* EMAIL / PHONE */}
              <p className="input-label">Your email / phone</p>
              <div className="input-box">
                <FaRegUserCircle className="input-icon" />
                <input
                  name="identifier"
                  type="text"
                  placeholder="Enter Email or Phone Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.identifier}
                />
              </div>
              {formik.touched.identifier && formik.errors.identifier && (
                <div className="error-text">{formik.errors.identifier}</div>
              )}

              {/* PASSWORD */}
              <p className="input-label">Password</p>
              <div className="input-box password-field">
                <FaLock className="input-icon" />
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                /><span
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="error-text">{formik.errors.password}</div>
              )}

              {/* REMEMBER & FORGOT */}
              <div className="login-options-row">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                  />
                  Remember me
                </label>
                <span className="forgot-pass">Forgot Password?</span>
              </div>

              {/* SIGN IN BUTTON */}
              <button type="submit" className="signin-btn">Sign in</button>

              {/* GOOGLE LOGIN */}
              <button type="button" className="google-btn">
                <FcGoogle size={20} /> Continue with Google
              </button>
            </form>

            <p className="signup-link">
              Don't have an account? <span>Sign Up</span>
            </p>
          </div>
        </Col>

        {/* RIGHT SIDE (IMAGE) */}
        <Col md={6} className="login-right-section">
          <img src="https://my.fundedfirm.com/login-bg.webp" alt="bg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;