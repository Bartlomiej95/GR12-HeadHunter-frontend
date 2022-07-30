import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents";
import {Login} from "../../pages/Account/Login";
import {ToTalk} from "../../pages/ToTalk/ToTalk";
import {Cv} from "../../pages/Cv/Cv";
import {Admin} from "../../pages/Account/Admin";
import {RegisterPassword} from "../../pages/Account/Register/RegisterPassword";
import {PassChange} from "../../pages/Account/PassChange/PassChange";
import {Context} from "../../provider/Provider";
import {NoPermission} from "../../pages/Account/NoPermission/NoPermission";

interface LoginProps {
    login: boolean
}


export const Routing = ({login}: LoginProps) => {
    const {role} = useContext(Context);
    let access = false;
    if(role === "admin"){
        access = true
    }
    return (
        <Routes>
            <Route path='/*' element={login ? <AvailableStudents/> : <Login/>}/>
            <Route path='/to-talk' element={login ? <ToTalk/> : <Login/>}/>
            <Route path='/cv/:id' element={login ? <Cv/> : <Login/>}/>
            <Route path='/admin' element={access ? <Admin/> : <NoPermission/>}/>
            <Route path='/passchange' element={<PassChange/>}/>
            <Route path='/register/recruiter/:urlCode' element={<RegisterPassword/>}/>
        </Routes>
    )
}
