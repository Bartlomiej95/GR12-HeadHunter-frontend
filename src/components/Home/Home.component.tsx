import React from "react";
import {Header} from "../Header/Header.component";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents.component";
import {Menu} from "../Menu/Menu.component";
import { HomeWrap } from "./Home.styles";
import {ToTalk} from "../../pages/ToTalk/ToTalk.component";

export const Home = () => (
    <HomeWrap>
        <Header/>
        <Routes>
            <Route path="/" element={<><Menu/><AvailableStudents/></>}/>
            <Route path="/to-talk" element={<><Menu/><ToTalk/></>}/>
        </Routes>
    </HomeWrap>
)