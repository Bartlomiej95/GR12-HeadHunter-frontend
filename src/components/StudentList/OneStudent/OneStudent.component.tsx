import React, {useState} from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {Buttons, DownChevron, StudentName, StudentNameContent, StudentWrap} from "./OneStudent.styles";
import {IOneStudent} from "./OneStudent.types";
import {handleAddToTalkStudent, handleHireStudent, handleRemoveStudentFromTalk, toggle} from "./OneStudent.utils";
import {NavLink} from "react-router-dom";
import {LabelInfo} from "../../common/LabelInfo/LabelInfo.component";
import {getStudents} from "../../../pages/AvailableStudents/AvailableStudents.utils";
import {getStudentsToTalk} from "../../../pages/ToTalk/ToTalk.utils";

export const OneStudent = ({firstName, lastName, index, show, setShow, active, id, setFreeStudents}: IOneStudent) => {

    const [labelActive, setLabelActive] = useState(false);


    if(labelActive) {
        setTimeout(() => {
            setLabelActive(false)
            if(active.availableStudent) {
                getStudents(setFreeStudents)
            }
            if(active.toTalk) {
                getStudentsToTalk(setFreeStudents)
            }
        }, 1500)
    }

    return (
        <StudentWrap>
            <LabelInfo labelActive={labelActive}/>
            <StudentName onClick={() => toggle(index, show, setShow)}>
                <StudentNameContent>{firstName} {lastName}.</StudentNameContent>
            </StudentName>
            <Buttons>
                {active.availableStudent ? <>
                    <Button text={pl.studentReservation} handleClick={() => {
                        handleAddToTalkStudent(id)
                        setLabelActive(true);
                    }} id={id}/>
                    <DownChevron size={30} onClick={() => toggle(index, show, setShow)} style={show === index ? {
                        transform: 'rotateX(180deg)',
                        transition: '0.4s'
                    } : {
                        transition: '0.4s',
                        transform: 'rotateX(0deg'
                    }}/></> : <>
                    <NavLink to={`/cv/${id}`}><Button text={pl.studentToTalkShowCv} handleClick={()=>{}}  id={''}/></NavLink>
                    <Button text={pl.studentToTalkCancel} handleClick={() => {
                        handleRemoveStudentFromTalk(id)
                        setLabelActive(true)
                    }} id={id}/>
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