import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "../../pages/Login/Login.component";
import {IRoutingTypes} from "./Routing.types";
import {Home} from "../Home/Home.component";

export const Routing = ({login}: IRoutingTypes) => {
    return (
        <Routes>
            <Route path="/*" element={login ? <Home/> : <Login/>}/>
        </Routes>
    )
}