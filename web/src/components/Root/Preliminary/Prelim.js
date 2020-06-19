import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import NavComponent from "./../../Interface/Navbar";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Prelim() {
    const [credscore, setCredscore] = useState(0);
    const history = useHistory();
    const routeChange = () => {
        let path = "/home";
        history.push(path);
    }
    return (
        <div d-flex="true" mb-2="true" justify-content-between="true">
            <NavComponent />
            <Jumbotron fluid="true" bg-primary="true" text-white="true">
                <Container >
                    {/* <div className="container" bg-primary text-white> */}
                    <h1>Making Collateral-Free Crypto Loans a Reality</h1>
                    <p>
                        Please input below your Pre-Check credentials in order to be presented loan categories best suited for you.
                        </p>
                    {/* </div> */}
                </Container>
            </Jumbotron>
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>What is your Credit Score?</Form.Label>
                    <Form.Control type="text" placeholder="Enter Credit Score" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Approximate Annual Salary:</Form.Label>
                    <Form.Control type="text" placeholder="$1000000" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I'm Not a Robot" />
                </Form.Group>
                <Button variant="primary" type="submit" className="button-prelim" onClick={routeChange}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
