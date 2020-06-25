import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default function NavComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Atlas DeFi!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Prelim">Account</Nav.Link>
                    <Nav.Link href="#link">Help</Nav.Link>
                    <NavDropdown title="Filter Contracts" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Highest to Lowest Loan Value</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Highest to Lowest Rates</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Lowest to Highest Loan Value</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Lowest to Highest Rate</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.5">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Create Contracts</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
