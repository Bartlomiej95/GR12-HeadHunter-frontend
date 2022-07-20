import React from "react";
import './AvailableStudents.css';
import {Menu} from "../../components/Menu/Menu";
import {Tools} from "../../components/Tools/Tools";

export const AvailableStudents = () => {
    return (
        <section>
            <Menu/>
            <div className="AvailableStudents">

                <Tools/>

            </div>
        </section>
    )
}