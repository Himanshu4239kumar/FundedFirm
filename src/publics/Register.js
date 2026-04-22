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
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid").required("Required"),
            phone: Yup.string().min(10).required("Required"),
            agree: Yup.boolean().oneOf([true], "Required")
        }),

        onSubmit: (values) => {
            console.log(values);
            alert("Registered 🚀");
        }
    });

    return (
        <Container fluid>
            <Row>

                {/* LEFT SIDE (FORM) */}
                <Col md={6} className="register-left">

                    <div className="logo-container">
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

                    <h2>Welcome Back</h2>
                    <p>Register now and start your adventure.</p>

                    <form onSubmit={formik.handleSubmit}>

                        {/* NAME ROW */}
                        <div className="input-row">

                            <div className="field">
                                <p className="input-label">Your first name</p>
                                <div className="input-box">
                                    <FaRegUserCircle className="input-icon" />
                                    <input type="text" placeholder="Enter first name" />
                                </div>
                            </div>

                            <div className="field">
                                <p className="input-label">Your last name</p>
                                <div className="input-box">
                                    <FaRegUserCircle className="input-icon" />
                                    <input type="text" placeholder="Enter last name" />
                                </div>
                            </div>

                        </div>

                        {/* EMAIL */}
                        <p className="input-label">Your email</p>
                        <div className="input-box">
                            <MdEmail className="input-icon" />
                            <input type="text" placeholder="Enter email address" />
                        </div>

                        {/* PHONE */}
                        <p className="input-label">Phone number</p>
                        <div className="input-box">
                            <MdPhone className="input-icon" />
                            <input type="text" placeholder="+91 Enter phone number" />
                        </div>

                        {/* CHECKBOX */}
                        <div className="login-options">
                            <label className="agree">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    onChange={formik.handleChange}
                                />
                                I agree to all the <span>Term</span> & <span>Privacy Policies</span>
                            </label>
                        </div>

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
                    <img
                        src="https://my.fundedfirm.com/login-bg.webp"
                        alt="bg"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default Register;