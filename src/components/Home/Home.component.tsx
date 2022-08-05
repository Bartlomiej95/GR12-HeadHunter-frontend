import React from "react";
import {Header} from "../Header/Header.component";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents";
import {Menu} from "../Menu/Menu.component";
import { HomeWrap } from "./Home.styles";

export const Home = () => (
    <HomeWrap>
        <Header/>
        <Routes>
            <Route path="/" element={<><Menu/><AvailableStudents/></>}/>
        </Routes>
    </HomeWrap>
)