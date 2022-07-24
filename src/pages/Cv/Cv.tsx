import React from "react";
import './Cv.css';
import {NavLink} from "react-router-dom";
import {ChevronLeft} from "@styled-icons/boxicons-solid";
import {CoursantInfo} from "../../components/CoursantInfo/CoursantInfo";

export const Cv = () => {
    const refr = () => {
        setTimeout(() => {
            window.location.reload()
        }, 1)
    }
    return <>
        <div className="wrapper">
            <NavLink to="/to-talk" className="goBack" onClick={refr}><ChevronLeft size={30} color="#CFCFCF"/>Wróć</NavLink>
            <CoursantInfo/>
        </div>
    </>
}
