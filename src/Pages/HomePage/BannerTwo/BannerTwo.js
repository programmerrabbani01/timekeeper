import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./BannerTwo.css";

const BannerTwo = () => {
    return (
        <>
            <Container className="bannertwo">
                <Row className=" align-items-center">
                
                    <Col md="6" >
                        <div className="full-banner__content">
                        <h5>special offer</h5>
                        <h4>SUCCULENT GARDEN</h4>
                        <h3>GIFT BOXES</h3>
                            <p>From planter materials to style options, <br /> discover which planter is best for your space.</p>
                            <Link className="theme-button theme-button--outline banner-button" to="/shop">
                                 Explore The Shop
                            </Link>
                        </div>
                    </Col>
                   <Col md="6" >
                        <div className="full-banner__image">
                        <img src="//cdn.shopify.com/s/files/1/0039/3740/2989/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg?v=1559383318" className="img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
           </Container>
        </>
    );
};

export default BannerTwo;


