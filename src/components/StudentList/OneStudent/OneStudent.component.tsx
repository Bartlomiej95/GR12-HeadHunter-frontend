import React from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {Buttons, DownChevron, StudentName, StudentNameContent, StudentWrap } from "./OneStudent.styles";

export const OneStudent = () => {
    return (
        <StudentWrap>
            <StudentName>
                <StudentNameContent>{'Jan ' + 'Kowalski'.split('')[0]}.</StudentNameContent>
            </StudentName>
            <Buttons>
                {/*<Button text={pl.studentReservation} click={()=>{}}/>*/}
                <DownChevron size={30}/>
            </Buttons>
        </StudentWrap>
    )
}