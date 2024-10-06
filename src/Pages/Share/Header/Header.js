import { faFacebookF, faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../images/logo.png';
import './Header.css';
const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhoneAlt} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const googlePlus = <FontAwesomeIcon icon={faGooglePlusG} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="Main_header">
            <div className='top_bar'>
                <Container>
                    <Row>
                        <Col md='6'>
                            <ul className='support_info'>
                                <li>
                                    <a href="mailto:support@travelagency.com">{mail} support@travelagency.com</a>
                                    </li>
                                <li>।</li>
                                <li><a href="tel:+917 3386831">{phone} +917 3386831</a></li>
                            </ul>
                        </Col>
                        <Col md='6'>
                            <ul className='social_icons'>
                                <li><a target='_blank' href="#">{facebook}</a></li>
                                <li><a target='_blank' href="#">{twitter}</a></li>
                                <li><a target='_blank' href="#">{googlePlus}</a></li>
                                <li><a target='_blank' href="#">{instagram}</a></li>
                                <li><a target='_blank' href="#">{youtube}</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavLink className='navbar-brand' to='/'>
                        <img src={Logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto main_mane"></Nav>
                        <Nav className='main_mane navbar-right'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/shop'>Shop</NavLink>
                            {
                                user.email && <NavLink to='/dashboard'>Dashboard</NavLink>
                            }
                            {
                                !user?.email && <NavLink to='/login'>Login</NavLink>
                            }
                            <ul className='social_icons admin'>
                                {
                                    user?.email && <li>{user?.displayName}</li>
                                }
                                {
                                    user?.photoURL && <li><img src={user?.photoURL} alt="" /></li> 
                                }
                            </ul>
                            {
                                user?.email && <Button onClick={logOut} variant="danger">Logout</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;