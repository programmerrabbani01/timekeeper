import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css';

const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhoneAlt} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const Footer = () => {
    return (
        <div className="footer_area">
            <Container>
                <Row>
                    <Col className="logoFooter" md='4'>
                        <Link className="navbar-brand" to="/">
                            <img className="img-fluid" src={logo} alt="" />
                        </Link>
                        <br />
                        <br />
                        <div>
                           <h5>Address</h5>
                           <p> 4710-4890 Breckinridge St, UK Burlington, VT 05401</p>
                        </div>
                        <div>
                           <h5> Need Help?</h5>
                            <p>Call: 1-800-345-6789</p>
                        </div>
                    </Col>
                    <Col md='4'>
                         <div className="head">
                            <h3>Head Office</h3>
                            <p>Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.<br />
                                Dubai - 235689
                            </p>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className="us">
                            <h3>Reach Us</h3>
                            <ul>
                                <li><a href="tel:1234567890">{mail} - 1234567890</a></li>
                                <li><a href="username@gmail.com">{phone} - username@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="">{facebook}</a></li>
                                <li><a href="">{twitter}</a></li>
                                <li><a href="">{youtube}</a></li>
                                <li><a href="">{instagram}</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
