import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "../../pages/Login/Login.component";
import {IRoutingTypes} from "./Routing.types";
import {Home} from "../Home/Home.component";
import {ILoginUser} from "../../pages/Login/Login.types";

export const Routing = ({login, setLogin}: IRoutingTypes) => {
    const [user, setUser] = useState<ILoginUser>({
        role: '',
        firstName: '',
        lastName: ''
    })

    const getUserName = (firstName: string, lastName: string, role: string) => {
        setUser({...user, role: role, firstName: firstName, lastName: lastName})
    }
    return (
        <Routes>
            <Route path="/*" element={login ? <Home role={user.role} firstName={user.firstName} lastName={user.lastName}/> : <Login setLogin={setLogin} getUsername={getUserName}/>}/>
        </Routes>
    )
}