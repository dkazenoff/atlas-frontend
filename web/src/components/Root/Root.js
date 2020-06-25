import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Prelim from "./Preliminary";
import Home from "./Home";
import ContractEngine from "./Home/ContractEngine";
import Borrower from "./BorrowCreds";

// import { Web3Provider, Connectors } from 'web3-react';



const Root = () => {
    // const { InjectedConnector } = Connectors
    // const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })
    // const connectors = { MetaMask }
    return (



        <Switch>
            {/* <Web3Provider
                connectors={MetaMask}
                libraryName={'web3'} > */}

            <Route component={ContractEngine} path="/home" />
            <Route exact component={Prelim} path="/" />
            <Route component={Borrower} path="/borrow" />
            {/* <Route component={Borrower} path="/b-home" /> */}
            {/* </Web3Provider> */}

        </Switch>


    )
};

export default Root;