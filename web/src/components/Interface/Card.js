import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Router, Switch, Route, useHistory } from "react-router-dom";
import Web3 from 'web3';
const web3 = new Web3(window.ethereum);


export default function Card1({ data }) {
    const history = useHistory();
    const routeChange = () => {
        let path = "/borrow";
        history.push(path, data);
    }
    async function Lend() {
        await window.ethereum.enable();
        alert(`Are you sure you want to lend ${data.loanvalue / data.max_lenders} for a ${data.rate} return?`);
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
                    block onClick={routeChange}>
                    Borrow
                </Button>
                {/* </Link> */}

            </Card.Body>

        </Card>

    )
}