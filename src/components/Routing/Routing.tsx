import React from "react";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents";
import {Login} from "../../pages/Login/Login";
import {ToTalk} from "../../pages/ToTalk/ToTalk";
import {Cv} from "../../pages/Cv/Cv";
import {Admin} from "../../pages/Login/Admin";
import {RegisterPassword} from "../../pages/Login/Register/RegisterPassword";

interface LoginProps {
    login: boolean
}

export const Routing = ({login}: LoginProps) => {
    return (
        <Routes>
            <Route path='/*' element={login ? <AvailableStudents/> : <Login/>}/>
            <Route path='/to-talk' element={login ? <ToTalk/> : <Login/>}/>
            <Route path='/cv/:id' element={login ? <Cv/> : <Login/>}/>
            <Route path='/admin' element={login ? <Admin/> : <Login/>}/>
            <Route path='/register/recruiter/:urlCode' element={<RegisterPassword/>}/>
        </Routes>
    )
}
