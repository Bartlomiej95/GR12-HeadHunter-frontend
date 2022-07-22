import React from "react";
import './Cv.css';
import {NavLink} from "react-router-dom";
import {ChevronLeft} from "@styled-icons/boxicons-solid";
import {CoursantInfo} from "../../components/CoursantInfo/CoursantInfo";

export const Cv = () => {
    return <>
        <div className="wrapper">
            <NavLink to="/" className="goBack"><ChevronLeft size={30} color="#CFCFCF"/>Wróć</NavLink>
            <CoursantInfo/>
        </div>
    </>
}
