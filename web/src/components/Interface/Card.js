import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Card1({ data }) {
    function Borrow() {

    }
    function Lend() {

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
                    block >
                    Invest
                </Button>
                {/* <Link to="/Prelim"> */}
                <Button onClick={() => Borrow()}
                    className="mt-auto font-weight-bold"
                    variant="primary"
                    block >
                    Borrow
                </Button>
                {/* </Link> */}

            </Card.Body>

        </Card>

    )
}