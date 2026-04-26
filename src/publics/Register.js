import React from "react";
import "./register.css";
import fontlogo from "../assets/fontlogo.png";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            agree: false
        },
        validationSchema: Yup.object({
            firstName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets are allowed").required("First name is required"),
            lastName: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets are allowed").required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phone: Yup.string()
                .matches(/^[0-9]+$/, "Must be only digits") // Sirf number allow karega
                .min(10, "Must be at least 10 digits")
                .required("Phone number is required"),
            agree: Yup.boolean().oneOf([true], "You must accept terms")
        }),
        onSubmit: (values) => {
            console.log("Form Data Submitted:", values); // Ab console mein dikhega
            alert("Registered 🚀");
        }
    });

    return (
        <Container fluid className="register-page-wrapper">
            <Row>
                {/* LEFT SIDE (FORM) */}
                <Col md={6} className="register-left">
                    <div className="logo-container">
                        <img src={fontlogo} alt="logo" className="top-logo" />
                        <img src={logo} alt="logo" className="small-logo" />
                    </div>

                    <h2>Welcome Back</h2>
                    <p>Register now and start your adventure.</p>

                    <form onSubmit={formik.handleSubmit}>
                        {/* NAME ROW */}
                        <div className="input-row">
                            <div className="field">
                                <p className="input-label">Your first name</p>
                                <div className="input-box">
                                    <FaRegUserCircle className="input-icon" />
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="Enter first name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                    />
                                </div>
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div className="error-text">{formik.errors.firstName}</div>
                                ) : null}
                            </div>

                            <div className="field">
                                <p className="input-label">Your last name</p>
                                <div className="input-box">
                                    <FaRegUserCircle className="input-icon" />
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter last name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                    />
                                </div>
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div className="error-text">{formik.errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>

                        {/* EMAIL */}
                        <p className="input-label">Your email</p>
                        <div className="input-box">
                            <MdEmail className="input-icon" />
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter email address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-text">{formik.errors.email}</div>
                        ) : null}

                        {/* PHONE */}
                        <p className="input-label">Phone number</p>
                        <div className="input-box">
                            <MdPhone className="input-icon" />
                            <input
                                name="phone"
                                type="text"
                                placeholder="+91 Enter phone number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="error-text">{formik.errors.phone}</div>
                        ) : null}

                        {/* CHECKBOX */}
                        <div className="login-options">
                            <label className="agree">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    onChange={formik.handleChange}
                                    checked={formik.values.agree}
                                />
                                I agree to all the <span>Term</span> & <span>Privacy Policies</span>
                            </label>
                        </div>
                        {formik.touched.agree && formik.errors.agree ? (
                            <div className="error-text">{formik.errors.agree}</div>
                        ) : null}

                        {/* BUTTON */}
                        <button type="submit" className="signin">
                            Continue
                        </button>
                    </form>

                    <p className="signup">
                        Already have an account? <span>Sign in</span>
                    </p>
                </Col>

                {/* RIGHT SIDE (IMAGE) */}
                <Col md={6} className="login-right">
                    <img src="https://my.fundedfirm.com/login-bg.webp" alt="bg" />
                </Col>
            </Row>
        </Container>
    );
};

export default Register;