import React, {useState} from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {Buttons, DownChevron, StudentName, StudentNameContent, StudentWrap} from "./OneStudent.styles";
import {IOneStudent} from "./OneStudent.types";
import {toggle} from "./OneStudent.utils";

export const OneStudent = ({firstName, lastName, index, show, setShow}: IOneStudent) => {

    return (
        <StudentWrap>
            <StudentName onClick={() => toggle(index, show, setShow)}>
                <StudentNameContent>{firstName} {lastName}.</StudentNameContent>
            </StudentName>
            <Buttons>
                <Button text={pl.studentReservation}/>
                <DownChevron size={30} onClick={() => toggle(index, show, setShow)} style={show === index ? {
                    transform: 'rotateX(180deg)',
                    transition: '0.4s'
                } : {
                    transition: '0.4s',
                    transform: 'rotateX(0deg'
                }}/>
            </Buttons>
        </StudentWrap>
    )
}