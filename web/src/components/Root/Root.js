import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Prelim from "./Preliminary";
import Home from "./Home";
import ContractEngine from "./Home/ContractEngine";


const Root = () => {
    return (
        <div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/">Pre-Check</Link>
            </div>
            <Switch>
                <Route component={ContractEngine} path="/home" />
                {/* <Route component={Home} path="/" /> */}
                <Route component={Prelim} path="/" />

            </Switch>
        </div>
    )
};

export default Root;