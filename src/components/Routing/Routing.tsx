import React from "react";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents";
import {Login} from "../../pages/Login/Login";
import {ToTalk} from "../../pages/ToTalk/ToTalk";
import {Cv} from "../../pages/Cv/Cv";

interface LoginProps {
    login: boolean
}

export const Routing = ({login}: LoginProps) => {

    return (
        <Routes>
            <Route path='/' element={login ? <AvailableStudents/> : <Login/>}/>
            <Route path='/to-talk' element={login ? <ToTalk/> : <Login/>}/>
            <Route path='/cv/:id' element={login ? <Cv/> : <Login/>}/>
        </Routes>
    )
}
