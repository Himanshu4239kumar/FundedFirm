import React from 'react'
import Navbar from "./Navbar";
import backgroung from "../assets/background.mp4";

import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
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
                <video autoPlay loop muted playsInline className="blackvideo">
                    <source src={backgroung} type="video/mp4" />
                </video>



                {/* ROW 1 → BOX */}
                <Row className="justify-content-center">
                    <Col xs="auto" className="d-flex justify-content-center">




                        <div className="highlights-box">
                            <div className="item">Zero Payout Denial</div>

                            <div className="divider d-none d-md-block"></div>

                            <div className="item">$20M+ Payouts</div>

                            <div className="divider d-none d-md-block"></div>

                            <div className="item">On-demand<br/>withdrawals</div>
                        </div>




                        <button className="highlight-btn mt-5">Key Highlights</button>
                        <p className="highlight-text text-center mt-4">
                            We believe those with proven skills deserve better opportunities, rewards, and services.
                            As a leading FundedFirm, we provide the professional ecosystem you deserve.
                        </p>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Home
