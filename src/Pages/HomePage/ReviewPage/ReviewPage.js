import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
const ReviewPage = () => {
    const [rvData, setRvData] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bastion-51676.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setRvData(data);
            });
    }, [])
    return (
        <div>
            <Container>
                <h2 style={{ textAlign: "center", textTransform:"uppercase",margin:"20px 0",color:"#000"}}>Customer Review</h2>
                <Row>
                    {rvData && rvData.map(data => 
                    <Col key={data._id} md="4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                        <ReactStars
                                            value={data.review}
                                            count={5}
                                            edit={false}
                                            size={40}
                                            activeColor="red"
                                        />
                                </Card.Subtitle>
                                <Card.Text>
                                    {data.reviewContent}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ReviewPage;