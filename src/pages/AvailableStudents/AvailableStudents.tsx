import React from "react";
import './AvailableStudents.css';
import {Menu} from "../../components/Menu/Menu";
import {Tools} from "../../components/Tools/Tools";
import {Student} from "../../components/Student/Student";


export const AvailableStudents = () => {
    return (
        <section>
            <Menu/>

            <div className="AvailableStudents">
                <Tools/>
                <hr/>
                <div className="students">
                    <Student/>
                </div>
            </div>
        </section>
    )
}