import React, {useEffect, useState} from "react";
import {Header} from "../Header/Header.component";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents.component";
import {Menu} from "../Menu/Menu.component";
import {HomeWrap} from "./Home.styles";
import {ToTalk} from "../../pages/ToTalk/ToTalk.component";
import {IActivePage, IHomeProps} from "./Home.types";
import {Cv} from "../../pages/Cv/Cv.component";
import {AdminPanel} from "../../pages/AdminPanel/AdminPanel.component";
import {StudentPanel} from "../../pages/StudentPanel/StudentPanel.component";

export const Home: React.FC<IHomeProps> = ({role, lastName, firstName}) => {

    const [activePage, setActivePage] = useState<IActivePage>({
        availableStudent: true,
        toTalk: false
    })

    return (
        <HomeWrap>
            <Header firstName={firstName} lastName={lastName}/>
            <Routes>
                <Route path="/" element={role === 'recruiter' ? <><Menu setActivePage={setActivePage} activePage={activePage}/><AvailableStudents activePage={activePage}/></> : role === 'student' ? <StudentPanel/> : role === 'admin' ? <AdminPanel/> : null}/>
                <Route path="/to-talk" element={role === 'recruiter' ? <><Menu setActivePage={setActivePage} activePage={activePage}/><ToTalk activePage={activePage}/></>: null}/>
                <Route path="/cv/:id" element={role === 'recruiter' ? <Cv/> : null}/>
            </Routes>
        </HomeWrap>
    )
}