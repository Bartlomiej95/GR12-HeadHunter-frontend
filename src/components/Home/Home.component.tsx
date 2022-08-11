import React, {useEffect, useState} from "react";
import {Header} from "../Header/Header.component";
import {Navigate, Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents.component";
import {Menu} from "../Menu/Menu.component";
import {HomeWrap} from "./Home.styles";
import {ToTalk} from "../../pages/ToTalk/ToTalk.component";
import {IActivePage, IHomeProps} from "./Home.types";
import {Cv} from "../../pages/Cv/Cv.component";
import {AdminPanel} from "../../pages/AdminPanel/AdminPanel.component";
import {StudentPanel} from "../../pages/StudentPanel/StudentPanel.component";
import {AccessDenied} from "../../pages/AccessDenied/AccessDenied.component";
import {ChangeEmail} from "../../pages/ChangeEmail/ChangeEmail.component";
import {ChangePassword} from "../../pages/ChangePassword/ChangePassword.component";
import {Login} from "../../pages/Login/Login.component";

export const Home: React.FC<IHomeProps> = ({role, lastName, firstName, setLogin, login}) => {

    const [activePage, setActivePage] = useState<IActivePage>({
        availableStudent: true,
        toTalk: false,
    })


    return (
        <HomeWrap>
            <Header firstName={firstName} lastName={lastName} setLogin={setLogin}/>
            <Routes>
                <Route path="/*" element={login ? role === 'recruiter' ? <><Menu setActivePage={setActivePage} activePage={activePage}/><AvailableStudents activePage={activePage}/></> : role === 'student' ? <Navigate to="/student-panel" replace /> : role === 'admin' ? <Navigate to="/admin-panel" replace /> : <><Menu setActivePage={setActivePage} activePage={activePage}/><AvailableStudents activePage={activePage}/></> : <Login setLogin={setLogin} getUsername={()=>{}}/>} />
                <Route path="/to-talk" element={login ? role === 'recruiter' ? <><Menu setActivePage={setActivePage} activePage={activePage}/><ToTalk activePage={activePage}/></>: <AccessDenied/> : <Login setLogin={setLogin} getUsername={()=>{}}/>}/>
                <Route path="/cv/:id" element={login ? role === 'recruiter' ? <Cv/> : <AccessDenied/> : <Login setLogin={setLogin} getUsername={()=>{}}/>}/>
                <Route path="/admin-panel" element={login ? role === 'admin' ? <AdminPanel/> : <AccessDenied/> : <Login setLogin={setLogin} getUsername={()=>{}}/>} />
                <Route path="/student-panel" element={login ? role === 'student' ? <StudentPanel/> : <AccessDenied/> : <Login setLogin={setLogin} getUsername={()=>{}}/>}/>
                <Route path="/change-email" element={login ? <ChangeEmail/> : <Login setLogin={setLogin} getUsername={()=>{}}/>}/>
                <Route path="/change-password" element={login ? <ChangePassword/> : <Login setLogin={setLogin} getUsername={()=>{}}/>}/>
            </Routes>
        </HomeWrap>
    )
}