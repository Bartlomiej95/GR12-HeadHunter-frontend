import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents";
import {Login} from "../../pages/Login/Login";
import {ToTalk} from "../../pages/ToTalk/ToTalk";
import {Cv} from "../../pages/Cv/Cv";

export const Routing = () => {

    const [login, setLogin] = useState(true)

    return (
        <Routes>
            <Route path='/' element={login ? <AvailableStudents/> : <Login/>}/>
            <Route path='/to-talk' element={<ToTalk/>}/>
            <Route path='/cv/:id' element={<Cv/>}/>
        </Routes>
    )
}
