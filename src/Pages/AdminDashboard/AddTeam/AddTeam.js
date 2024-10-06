import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddTeam = () => {

    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto]  = useState(null);
    
     const onHandelForm = (e) => {
         e.preventDefault();
         const formData = new FormData();
         formData.append('name', name);
         formData.append('email', email);
         formData.append('photo', photo);

         fetch('http://localhost:5000/team', {
             method: "POST",
             body:formData
            })
             .then(res => res.json())
             .then(data => {
                 if (data.insertedId) {
                     alert('Temp Member added SuccessFully');
                 }
                 console.log(data);
            })
     }
    return (   
        <div>
            <Container fixed>
                <h2>Add A Team Member</h2>
                <br />
                <Form onSubmit={onHandelForm} >
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Doctor Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control
                            onChange={(e) => setPhoto(e.target.files[0])}
                            type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
            </Container>
        </div>
    );
};

export default AddTeam;