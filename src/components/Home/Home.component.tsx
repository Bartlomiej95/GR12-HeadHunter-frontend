import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
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
import {ILoginUser} from "../../pages/Login/Login.types";
import {loginCheck} from "./Home.utils";

export const Home: React.FC<IHomeProps> = ({setLogin, login}) => {

    const [activePage, setActivePage] = useState<IActivePage>({
        availableStudent: true,
        toTalk: false,
    })

    const [user, setUser] = useState<ILoginUser>({
        firstName: '',
        lastName: ''
    })

    const [roleUser, setRoleUser] = useState('')

    useEffect(() => {
        loginCheck(user, setUser, setRoleUser)
    }, [])



    return (
        <HomeWrap>
            <Header firstName={user.firstName} lastName={user.lastName} setLogin={setLogin}/>
            <Routes>
                <Route path="/*" element={login ? roleUser === 'recruiter' ? <><Menu setActivePage={setActivePage}
                                                                                     activePage={activePage}/><AvailableStudents
                    activePage={activePage}/></> : roleUser === 'student' ?
                    <Navigate to="/student-panel" replace/> : roleUser === 'admin' ?
                        <Navigate to="/admin-panel" replace/> : <><Menu setActivePage={setActivePage}
                                                                        activePage={activePage}/><AvailableStudents
                            activePage={activePage}/></> : <Login setLogin={setLogin}/>}/>
                <Route path="/to-talk" element={login ? roleUser === 'recruiter' ? <><Menu setActivePage={setActivePage}
                                                                                           activePage={activePage}/><ToTalk
                    activePage={activePage}/></> : <AccessDenied/> : <Login setLogin={setLogin}/>}/>
                <Route path="/cv/:id" element={login ? roleUser === 'recruiter' ? <Cv/> : <AccessDenied/> :
                    <Login setLogin={setLogin}/>}/>
                <Route path="/admin-panel" element={login ? roleUser === 'admin' ? <AdminPanel/> : <AccessDenied/> :
                    <Login setLogin={setLogin}/>}/>
                <Route path="/student-panel"
                       element={login ? roleUser === 'student' ? <StudentPanel/> : <AccessDenied/> :
                           <Login setLogin={setLogin}/>}/>
                <Route path="/change-email"
                       element={login ? <ChangeEmail/> : <Login setLogin={setLogin}/>}/>
                <Route path="/change-password"
                       element={login ? <ChangePassword/> : <Login setLogin={setLogin}/>}/>
            </Routes>
        </HomeWrap>
    )
}