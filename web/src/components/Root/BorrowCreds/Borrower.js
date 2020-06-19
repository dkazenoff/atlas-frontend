import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import NavComponent from "./../../Interface/Navbar";
import './../../../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Borrower() {

    const [credscore, setCredscore] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const history = useHistory();
    const routeChange = () => {
        let path = "/home";
        history.push(path);
    }

    return (
        <div>
            <NavComponent />
            <Form className="borrower" mt-4>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Gross Income</Form.Label>
                    <Form.Control placeholder="$250,000" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Date of Birth</Form.Label> <br />
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Email</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Social Security Number</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I agree to fulfil the terms of the loan requirements if approved" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={routeChange}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
