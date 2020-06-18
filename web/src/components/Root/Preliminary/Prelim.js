import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import NavComponent from "./../../Interface/Navbar";
import Jumbotron from 'react-bootstrap/Jumbotron'
export default function Prelim() {
    return (
        <div d-flex mb-2 justify-content-between>
            <NavComponent />
            <Jumbotron fluid>
                <Container>
                    <h1>Making Collateral-Free Crypto Loans Reality</h1>
                    <p>
                        Please input below your known credentials in order to be presented loan categories best suited for you.
                 </p>
                </Container>
            </Jumbotron>
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
