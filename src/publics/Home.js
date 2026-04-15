import React from 'react'
import Navbar from "./Navbar";
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Rules from './Rules';
import Insights from './Insights';
import Faq from './Faq';
import Contact from './Contact';
import Login from './Login';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar />

                        <div className="hero">
                            <video autoPlay loop muted playsInline className="video-bg">
                                <source src="https://www.fundedfirm.com/video/banner.mp4" type="video/mp4" />
                            </video>
                            <div className="overlay">
                                <h1>FundedFirm : Trade Forex with #1 Prop firm</h1>

                                <p>
                                    FundedFirm equips bold traders with the resources they deserve.
                                    Get funded trading account and start your journey.
                                </p>

                                <div className="buttons">
                                    <button className="buy">Buy Challenge</button>
                                    <button className="telegram">Telegram</button>
                                </div>
                            </div>
                        </div>
                        <Routes>
                            <Route path='/ ' element={<Home />} />
                            <Route path='/rules' element={<Rules />} />
                            <Route path='/insights' element={<Insights />} />
                            <Route path='/faq' element={<Faq />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
