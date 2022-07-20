import React from "react";
import './AvailableStudents.css';
import {Menu} from "../../components/Menu/Menu";
import {Tools} from "../../components/Tools/Tools";
import {Button} from "../../components/Button/Button";

export const AvailableStudents = () => {
    return (
        <section>
            <Menu/>
            <div className="AvailableStudents">

                <Tools/>

                <Button text="Zarezerwuj miejsce"/>

            </div>
        </section>
    )
}