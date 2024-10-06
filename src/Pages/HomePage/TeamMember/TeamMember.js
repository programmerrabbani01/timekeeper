import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const TeamMember = () => {
    const [team, setTeam] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTeam(data);
        })
    },[])
    return (
        <div>
            <Container>
                <h2> Our Team Member {team?.length} </h2>
                <Row>
                    {team && team.map(teams => 
                        <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={`data:image/jpeg;base64,${teams.image}`}/>
                                <Card.Body>
                                    
                                <Card.Text>
                                   <h4>{teams.name}</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                </Row>
           </Container>
        </div>
    );
};

export default TeamMember;