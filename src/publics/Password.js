import React, { useState } from "react";
import "./register.css"; 
import fontlogo from "../assets/fontlogo.png";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Password = ({ registerData, goBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(/[@$!%*?&#]/, "Must contain at least one special character"),
      
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match') 
    }),
    onSubmit: (values) => {
      const finalCompleteData = {
        ...registerData, 
        password: values.password 
      };

      console.log("FINAL COMBINED DATA:", finalCompleteData);
      alert("Registration 100% Successful! 🚀 Check console for data.");
    }
  });

  return (

    <Container fluid className="register-page-wrapper">
      <Row>
        <Col md={6} className="register-left">
          <div className="logo-container">
            <img src={fontlogo} alt="logo" className="top-logo" />
            <img src={logo} alt="small-logo" className="small-logo" />
          </div>

          <div className="form-content">
            <h2>Set a password</h2>
            <p>to access your account</p>

            <form onSubmit={formik.handleSubmit}>
              
              <p className="input-label">Password</p>
              <div className="input-box password-field">
                <FaLock className="input-icon" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span
                  className="eye"
                  
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="error-text" >
                  {formik.errors.password}
                </div>
              )}

              <p className="input-label">Confirm password</p>
              <div className="input-box password-field">
                <FaLock className="input-icon" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter confirm password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <span
                  className="eye"
                 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                </span>
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="error-text">
                  {formik.errors.confirmPassword}
                </div>
              )}

              <button type="submit" className="signin" >
                Submit
              </button>

            </form>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <span onClick={goBack}>
                Back to Previous
              </span>
            </div>
            
          </div>
        </Col>

        <Col md={6} className="login-right">
          <img src="https://my.fundedfirm.com/login-bg.webp" alt="bg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Password;