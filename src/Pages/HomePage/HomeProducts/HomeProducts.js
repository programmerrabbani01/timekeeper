import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCart from '../../Share/ProductCart/ProductCart';
import "./HomeProducts.css";

const HomeProducts = () => {
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch('https://arcane-bastion-51676.herokuapp.com/products/limit')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    return (
        <div className="productHome">
            <Container>
                <div className="sectionHeading" >
                    <h3>New Products</h3>
                </div>
                <Row>
                    {
                       product && product.map(products => <ProductCart
                            key={products._id}
                            product={products} >
                        </ProductCart>)
                    }
                </Row>
                <Row>
                    <Col>
                        <Link style={{textDecoration:"none"}} to="/shop">
                            <button style={{margin:"auto", marginTop:"30px"}} className="custombtn">View More</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeProducts;


