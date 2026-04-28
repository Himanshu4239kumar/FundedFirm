import React from 'react'
import Navbar from "./Navbar";
import backgroung from "../assets/background.mp4";

import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="page-bg">
            <video autoPlay loop muted playsInline className="global-video">
                <source src={backgroung} type="video/mp4" />
            </video>
            <div className="content">
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='navbar-fixed-top' ><Navbar /></div>


                            <div className="hero">
                                <video autoPlay loop muted playsInline className="video-bg">
                                    <source src="https://www.fundedfirm.com/video/banner.mp4" type="video/mp4" />
                                </video>
                                <div className="overlay">
                                    <h1>FundedFirm: Most Trusted Firm</h1>

                                    <p>
                                        Get Funded Up to $100K & Withdraw Your Profits in 24 Hours.$20  <br />
                                        Million Paid Out to Real Traders.
                                    </p>

                                    <div className="buttons">
                                        <button className="buy">Buy Challenge</button>
                                        <button className="telegram">Telegram</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="highlights-wrapper highlights-section">



                    {/* ROW 1 → BOX */}
                    <Row className="justify-content-center">
                        <Col xs="auto" className="d-flex justify-content-center">




                            <div className="highlights-box">
                                <div className="item">Zero Payout Denial</div>

                                <div className="divider d-none d-md-block"></div>

                                <div className="item">$20M+ Payouts</div>

                                <div className="divider d-none d-md-block"></div>

                                <div className="item">On-demand<br />withdrawals</div>
                            </div>



                            <div className='key'>
                                <button className="highlight-btn mt-5">Key Highlights</button>
                            </div>
                            <p className="highlight-text text-center mt-4">
                                We believe those with proven skills deserve better opportunities, rewards, and services.
                                As a leading FundedFirm, we<br /> provide the professional ecosystem you deserve.
                            </p>
                        </Col>
                    </Row>

                    {/* ROW 1 */}
                    <Row className="justify-content-center">
                        <Col md={6} className="feature-box">
                            <div className="plus">+</div>
                            <h3>Safe & Secure</h3>
                            <p>
                                Experience ultra-fast trade execution with low<br />spreads and zero commissions
                                through one of the<br /> best funded trading platforms available today.
                            </p>
                        </Col>

                        <Col md={6} className="feature-box">
                            <div className="plus">+</div>
                            <h3>Trade on MT5</h3>
                            <p>
                                We offer the MT5 platform for a top-tier trading<br /> experience as a leading
                                proprietary trading firm.
                            </p>
                        </Col>
                    </Row>

                    {/* ROW 2 */}
                    <Row className="justify-content-center mt-5">
                        <Col md={6} className="feature-box">
                            <div className="plus">+</div>
                            <h3>News Trading</h3>
                            <p>
                                Capitalize on high-impact news with our news trading<br /> feature, enabling you to seize significant market<br />movements instantly through our trusted funded<br /> trading programs.
                            </p>
                        </Col>

                        <Col md={6} className="feature-box">
                            <div className="plus">+</div>
                            <h3>Fast payouts</h3>
                            <p>
                                Monthly payouts are processed within 24 hours,<br /> ensuring a quick and seamless withdrawal<br /> experience
                            </p>
                        </Col>
                    </Row>


                </Container>

            </div>
        </div>
    )
}

export default Home
