import React, {useState} from "react";
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
            <Route path='/' element={login ? <AvailableStudents/> : <Login login={login}/>}/>
            <Route path='/to-talk' element={<ToTalk/>}/>
            <Route path='/cv/:id' element={<Cv/>}/>
        </Routes>
    )
}
