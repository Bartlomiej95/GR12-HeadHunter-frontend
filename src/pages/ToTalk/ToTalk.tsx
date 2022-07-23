import React from "react";
import {Menu} from "../../components/Menu/Menu";
import {Tools} from "../../components/Tools/Tools";
import {Student} from "../../components/Student/Student";
import {Pagination} from "../../components/Pagination/Pagination";

export const ToTalk = () => {
    return(
        <section>
            <Menu/>

            <div className="AvailableStudents">
                <Tools/>
                <hr/>
                <div className="students">
                    <Student/>
                </div>
            </div>
            <Pagination/>
        </section>
    )
}