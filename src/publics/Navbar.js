import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router';
const Navbar = () => {
    const messages = [
        "Weekly - Biweekly Payouts Launched",
        "100% lifetime payout",
        "30% rule removed",
        "Static based Drawdown Implemented",
        "Get Funded up to $100K",
        "Price Drop"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Container className='menu'>
                <Row>
                    <Col className='header'>
                        <p>🚀 Update 2.0: {messages[index]}</p>
                    </Col>
                </Row>
            </Container>
            <Container className='menu'>
                <Row>
                    <Col>
                        <div className="navbar">
                            <div className="logo">
                                <img src='https://www.fundedfirm.com/_next/static/media/log.fa3e1c39.svg'></img>
                            </div>
                            <div className="nav-links">
                                <Nav defaultActiveKey="/home">
                                    <Nav.Link as={Link} to={'/'}><span className="nav-number">0.1/</span> Home</Nav.Link>
                                    <Nav.Link as={Link} to={'/rules'} ><span className="nav-number">0.2/</span> Trading Rules</Nav.Link>
                                    <Nav.Link as={Link} to={'/insights'} ><span className="nav-number">0.3/</span> Insights </Nav.Link>
                                    <Nav.Link as={Link} to={'/faq'} ><span className="nav-number">0.4/</span> FAQ</Nav.Link>
                                    <Nav.Link as={Link} to={'/contact'} ><span className="nav-number">0.5/</span> Contact Us</Nav.Link>
                                </Nav>
                            </div>
                            <div className="nav-btns">
                                <Button as={Link} to={'/login'} className="login">Login</Button> 
                                <Button as={Link} to={'/register'}  className="funded">Get Funded<span className='arrow'><IoMdArrowForward /></span></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
