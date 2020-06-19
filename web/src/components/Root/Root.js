import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Prelim from "./Preliminary";
import Home from "./Home";
import ContractEngine from "./Home/ContractEngine";
import Borrower from "./BorrowCreds";


const Root = () => {
    return (
        <div>
            <div>
                {/* <Link to="/home">Home</Link>
                <Link to="/">Pre-Check</Link> */}
            </div>
            <Switch>
                <Route component={ContractEngine} path="/home" />
                <Route exact component={Prelim} path="/" />
                <Route component={Borrower} path="/borrow" />

            </Switch>
        </div>
    )
};

export default Root;