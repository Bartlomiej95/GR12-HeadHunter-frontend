import React from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {Buttons, DownChevron, StudentName, StudentNameContent, StudentWrap } from "./OneStudent.styles";
import {IOneStudent} from "./OneStudent.types";

export const OneStudent = ({firstName, lastName}: IOneStudent) => {
    return (
        <StudentWrap>
            <StudentName>
                <StudentNameContent>{firstName} {lastName}.</StudentNameContent>
            </StudentName>
            <Buttons>
                <Button text={pl.studentReservation}/>
                <DownChevron size={30}/>
            </Buttons>
        </StudentWrap>
    )
}