import React from 'react'
import Navbar from "./Navbar";
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
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
            <Container className="highlights-section">
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>

                        {/* BOX */}
                        <div className="highlights-box">

                            <div className="item">Zero Payout Denial</div>

                            <div className="divider d-none d-md-block"></div>

                            <div className="item">$20M+ Payouts</div>

                            <div className="divider d-none d-md-block"></div>

                            <div className="item">On-demand withdrawals</div>

                        </div>

                        {/* BUTTON */}
                        <div className="text-center">
                            <button className="highlight-btn">Key Highlights</button>
                        </div>

                        {/* TEXT */}
                        <p className="highlight-text text-center">
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
