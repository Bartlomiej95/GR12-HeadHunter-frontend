import React from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {Buttons, DownChevron, StudentName, StudentNameContent, StudentWrap} from "./OneStudent.styles";
import {IOneStudent} from "./OneStudent.types";
import {handleAddToTalkStudent, handleHireStudent, handleRemoveStudentFromTalk, toggle} from "./OneStudent.utils";
import {NavLink} from "react-router-dom";

export const OneStudent = ({firstName, lastName, index, show, setShow, active, id}: IOneStudent) => {
    return (
        <StudentWrap>
            <StudentName onClick={() => toggle(index, show, setShow)}>
                <StudentNameContent>{firstName} {lastName}.</StudentNameContent>
            </StudentName>
            <Buttons>
                {active.availableStudent ? <>
                    <Button text={pl.studentReservation} handleClick={handleAddToTalkStudent} id={id}/>
                    <DownChevron size={30} onClick={() => toggle(index, show, setShow)} style={show === index ? {
                        transform: 'rotateX(180deg)',
                        transition: '0.4s'
                    } : {
                        transition: '0.4s',
                        transform: 'rotateX(0deg'
                    }}/></> : <>
                    <NavLink to={`/cv/${id}`}><Button text={pl.studentToTalkShowCv} handleClick={()=>{}}  id={''}/></NavLink>
                    <Button text={pl.studentToTalkCancel} handleClick={handleRemoveStudentFromTalk} id={id}/>
                    <Button text={pl.studentToTalkAccept} handleClick={handleHireStudent} id={id}/>
                    <DownChevron size={30} onClick={() => toggle(index, show, setShow)} style={show === index ? {
                        transform: 'rotateX(180deg)',
                        transition: '0.4s'
                    } : {
                        transition: '0.4s',
                        transform: 'rotateX(0deg'
                    }}/></>}
                    </Buttons>
        </StudentWrap>
    )
}