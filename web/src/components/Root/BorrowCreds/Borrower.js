import React, { useState, Component } from 'react';
import { useInput } from './useInput';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";
import NavComponent from "./../../Interface/Navbar";
import './../../../App.css';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bcontract from './bcontract';
import Jumbotron from 'react-bootstrap/Jumbotron';
//Web3 functions; Initializing contract in the same step
import Web3 from "web3";
import getWeb3 from './../../Interface/getWeb3';
import ABI from './../..//Interface/ABI';


export default function Borrower(props) {
    const { value: fname, bind: bindfname, reset: resetfname } = useInput('');
    const { value: lname, bind: bindlname, reset: resetlname } = useInput('');
    const { value: phone, bind: bindphone, reset: resetphone } = useInput('');
    const { value: email, bind: bindemail, reset: resetemail } = useInput('');
    const { value: dob, bind: binddob, reset: resetdob } = useInput('');
    const { value: ssn, bind: bindssn, reset: resetssn } = useInput('');
    const { value: grossincome, bind: bindgrossincome, reset: resetgrossincome } = useInput('');

    // const [startDate, setStartDate] = useState(new Date());
    const history = useHistory();
    const location = useLocation();
    const contract = location.state.data;        //contract.addr etc.

    const handleSubmit = async (event) => {
        event.preventDefault();
        window.confirm(`Submitting ${fname}'s Credentials for Loan Approval....${dob}`);
        resetfname(); resetlname(); resetphone(); resetemail(); resetdob(); resetssn(); resetgrossincome();
        const credentials = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            dob: dob,
            ssn: ssn,
            grossincome: grossincome
        }
        // await window.ethereum.enable();
        let path = "/home";
        history.push(path);
        if (contract.contract == 0) {
            console.log("contract not initiailized yet")
            alert("Contract has not been initialized By Lender Yet. Please Try Again Later");
            return;
        }
        let uuid = Date.now().toString();
        credentials.uuid = uuid
        let encryptedString = await bcontract.encrypt(credentials);

        const web3 = await getWeb3();
        if (!web3) { console.error("Error retrieving getWeb3!"); return; }
        console.log("WEB3:", web3)
        web3.eth.defaultAccount = window.web3.eth.defaultAccount
        let LoanContract = new web3.eth.Contract(ABI)
        LoanContract.options.address = '0x5A319dd81d6F2E12d04Cdd5CB3b84FFB5ceA73D6';
        console.log("BContractmethods:", LoanContract.methods);
        // contract.web3obj.givenProvider.selectedAddress   -->Does this grab the currently active Metamask Account???
        console.log("BEFORE:\n")
        console.log("NUM LENDERS:");
        try { let num = await LoanContract.methods.num_lenders().call(); console.log(num) } catch (err) { console.log(err) }
        console.log("BorrowerAddr:")
        try { let bor = await LoanContract.methods.borrower().call(); console.log(bor) } catch (err) { console.log(err) }
        console.log("Elibibility:")
        try { let elig = await LoanContract.methods.b_eligible().call(); console.log(elig) } catch (err) { console.log(err) }

        try { await LoanContract.methods.addBorrower(encryptedString, uuid); console.log("CALLED ADDBORROWER") } catch (err) { console.log(err) }

        console.log("AFTER:\n");
        console.log("NUM LENDERS:");
        try { let num = await LoanContract.methods.num_lenders().call(); console.log(num) } catch (err) { console.log(err) }
        console.log("BorrowerAddr:")
        try { let bor = await LoanContract.methods.borrower().call(); console.log(bor) } catch (err) { console.log(err) }
        console.log("Elibibility:")
        try { let elig = await LoanContract.methods.b_eligible().call(); console.log(elig) } catch (err) { console.log(err) }
    }

    // const routeChange = () => {
    //     let path = "/home";
    //     history.push(path);
    // }


    return (
        <div>
            <NavComponent />
            <Jumbotron fluid="true" bg-secondary="true" text-black="true">
                <Container >
                    {/* <div className="container" bg-primary text-white> */}
                    <h1>Contract {contract.id}: Borrow {contract.loan_value} ETH @ {contract.rate}% for {contract.period} months </h1>
                    <h2>Required to fulfill {(contract.payout / contract.period).toFixed(4)} ETH to <a style={{ color: "white", borderBottom: "4px solid white" }} href="https://etherscan.io/address/0x98ad263a95f1ab1abff41f4d44b07c3240251a0a#code" target="_blank">this contract</a> on the 1st of every month</h2>
                    <p>
                        Please input below your credentials to be checked and verified in order for your loan to be approved. In the event you are rejected, you will not be entered into the contract and will owe nothing.
                        </p>
                    {/* </div> */}
                </Container>
            </Jumbotron>
            <Form className="borrower mt-4" onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" {...bindfname} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" {...bindlname} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" {...bindphone} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Annual Gross Income</Form.Label>
                    <Form.Control placeholder="$250,000" {...bindgrossincome} />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Date of Birth</Form.Label> <br />
                    {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                    <Form.Control type="date"{...binddob} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="my_email@mail.com" {...bindemail} />
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
                        <Form.Control placeholder="Enter 9 Digit Social" {...bindssn} />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I agree to fulfill the terms of the loan requirements if approved" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div >
    )
}
