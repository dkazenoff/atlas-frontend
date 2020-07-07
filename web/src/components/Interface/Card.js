import React, { useEffect } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Router, Switch, Route, useHistory } from "react-router-dom";
// import { useWeb3Context } from 'web3-react'
import getWeb3 from './getWeb3';
import Web3 from "web3"
import ABI from './ABI'


export default function Card1({ data }) {
    let contractobj = 0;
    let web3obj = 0;
    // const context = useWeb3Context()

    // useEffect(() => {
    //     context.setFirstValidConnector(['MetaMask'])
    // }, [])

    const history = useHistory();
    const routeChangeB = () => {
        let path = "/borrow";
        // if (contractobj != 0 && web3obj != 0) {
        //     data.contract = contractobj;
        //     data.web3obj = web3obj;
        // }
        history.push(path, { data });   //merge the objects together.
    }
    // async function LoadWeb3() {
    //     // Load WEB3
    //     // Check wether it's already injected by something else (like Metamask or Parity Chrome plugin)
    //     if (typeof web3 !== 'undefined') {
    //         web3 = new Web3(web3.currentProvider);

    //         // Or connect to a node
    //     } else {
    //         web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    //     }

    //     // Check the connection
    //     if (!web3.isConnected()) {
    //         console.error("Not connected");

    //     }

    //     return web3.eth.accounts[3];
    // }
    async function Lend() {
        // await window.ethereum.enable();
        console.log("waiting.....")
        window.confirm(`Are you sure you want to lend ${data.loan_value / data.max_lenders} ETH for a ${data.rate}% return?`);
        const web3 = await getWeb3();
        if (!web3) { console.error("Error retrieving getWeb3!"); return; }
        console.log("WEB3:", web3)
        web3obj = web3;
        // web3.eth.defaultAccount = web3.eth.accounts[4]
        web3.eth.defaultAccount = window.web3.eth.defaultAccount
        let LoanContract = new web3.eth.Contract(ABI)
        LoanContract.options.address = '0x5A319dd81d6F2E12d04Cdd5CB3b84FFB5ceA73D6';
        console.log("LOANContract:", LoanContract)
        try {
            await LoanContract.methods.addLender('0xB56f6eb0Cbf0fed21f9A27bd4d4660C0BE9E92db').send({ 'from': '0xB56f6eb0Cbf0fed21f9A27bd4d4660C0BE9E92db', 'value': web3.utils.toBN(5e+18) });
            data.current_lenders++;
        }
        catch (err) {
            console.log("Error Caught:", err)
        }
        contractobj = LoanContract;
        // console.log("afterwards")
        //Check that contract wasn't already created...
        // contract = new web3.eth.Contract(data.abi, data.contract_addr)
        //data.loan_value / data.max_lenders ->converted toBN e+18
        // let account = await LoadWeb3();
        // await contract.addLender(account, { 'value': web3.utils.toBN(5e+18) });
    }
    return (
        <Card className="h-100 shadow-sm bg-white rounded mt-4">
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.loan_value} ETH @ {data.rate} % </Card.Title>

                    {/* <Card.Subtitle className="card-subtitle mb-2 text-muted">{data.contract_addr}</Card.Subtitle> */}
                    {/* {/* <Badge pill className="mb-1" variant="warning">{data.price}</Badge> */}
                </div>
                <Card.Text className="text-secondary">{data.contract_addr}...</Card.Text>
                <Card.Text className="text-secondary">Period: {data.period} Months</Card.Text>
                <Card.Text className="text-secondary">Payout: {data.payout} ETH  </Card.Text>
                <Card.Text className="text-secondary">Lenders: {data.current_lenders} / {data.max_lenders} </Card.Text>
                <Card.Text className="text-secondary">Borrower: {data.borrower}</Card.Text>
                <Card.Text className="text-secondary">Funding: {data.funding} / {data.loan_value}</Card.Text>
                <Button onClick={() => Lend()}
                    className="mt-auto font-weight-bold"
                    variant="success"
                    block>
                    Invest
                </Button>
                {/* <Link to="/borrow"> */}
                <Button type="submit"
                    className="mt-auto font-weight-bold"
                    variant="primary"
                    block onClick={routeChangeB}>
                    Borrow
                </Button>
                {/* </Link> */}

            </Card.Body>

        </Card>

    )
}