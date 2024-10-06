import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from "../../../Hooks/useAuth";
import Breadcrumb from '../../Share/Breadcrumb/Breadcrumb';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';
import ProductCart from '../../Share/ProductCart/ProductCart';

const Shop = () => {

    const [product, setProduct] = useState([]);
    const { isLoading } = useAuth();
    
    useEffect(() => {
        fetch('https://arcane-bastion-51676.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    if(isLoading){return(<><br /><br /><br /><LoadingPage></LoadingPage><br /><br /></>)}

    return (
        <div >
            <Breadcrumb>Shop</Breadcrumb>
            <Container>
                <Row>
                    <Col>
                        <h6>Total Product Count: {product.length}</h6>
                    </Col>
                </Row>
                <Row>
                    {
                       product && product.map(products => <ProductCart
                            key={products._id}
                            product={products} >
                        </ProductCart>)
                    }
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default Shop;