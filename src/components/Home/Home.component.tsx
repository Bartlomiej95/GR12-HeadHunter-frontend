import React, {useEffect, useState} from "react";
import {Header} from "../Header/Header.component";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents.component";
import {Menu} from "../Menu/Menu.component";
import {HomeWrap} from "./Home.styles";
import {ToTalk} from "../../pages/ToTalk/ToTalk.component";
import {IActivePage} from "./Home.types";
import {Cv} from "../../pages/Cv/Cv.component";

export const Home = () => {

    const [activePage, setActivePage] = useState<IActivePage>({
        availableStudent: true,
        toTalk: false
    })

    return (
        <HomeWrap>
            <Header/>
            <Routes>
                <Route path="/" element={<><Menu setActivePage={setActivePage} activePage={activePage}/><AvailableStudents activePage={activePage}/></>}/>
                <Route path="/to-talk" element={<><Menu setActivePage={setActivePage} activePage={activePage}/><ToTalk activePage={activePage}/></>}/>
                <Route path="/cv/:id" element={<Cv/>}/>
            </Routes>
        </HomeWrap>
    )
}