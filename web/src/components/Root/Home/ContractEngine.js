import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './../../../App.css';
import Card1 from "../../Interface/Card";
import NavComponent from "../../Interface/Navbar"
import datas from './Data';


export default function ContractEngine() {
    console.log(datas)
    return (
        <div className="App">
            <NavComponent ></NavComponent>
            <Container >
                {/* {ordered && <Confirmation toggle={setOrdered} />} */}


                <Row>
                    {datas.map(data =>
                        (
                            <Col xs={3} className='mb-5' key={`${data.id}`}>
                                <Card1 data={data} />

                            </Col>

                        ))
                    }
                </Row>
                {/* <Card> </Card> */}

            </Container>
        </div>
    )
}