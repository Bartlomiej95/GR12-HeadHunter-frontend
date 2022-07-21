import React from "react";
import './AvailableStudents.css';
import {Menu} from "../../components/Menu/Menu";
import {Tools} from "../../components/Tools/Tools";
import {Button} from "../../components/Button/Button";
import {ChevronDown} from "@styled-icons/boxicons-solid";
import {users} from "../../temporary/students";


export const AvailableStudents = () => {
    return (
        <section>
            <Menu/>

            <div className="AvailableStudents">
                <Tools/>
                <hr/>
                <div className="students">
                    {users.map(user => (
                        <div className="oneStudent" key={user.id}>
                            <p>{user.name} {user.lastName}</p>
                            <div>
                                <Button text='Zarezerwuj rozmowę'/>
                                <ChevronDown size={30} color="#666666"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}