import React, {useState} from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {Buttons, DownChevron, StudentName, StudentNameContent, StudentWrap} from "./OneStudent.styles";
import {IOneStudent} from "./OneStudent.types";
import {
    handleAddToTalkStudent,
    handleEvents,
    handleHireStudent,
    handleRemoveStudentFromTalk,
    toggle
} from "./OneStudent.utils";
import {NavLink} from "react-router-dom";
import {LabelInfo} from "../../common/LabelInfo/LabelInfo.component";

export const OneStudent = ({firstName, lastName, index, show, setShow, active, id, setFreeStudents}: IOneStudent) => {

    const [labelActive, setLabelActive] = useState(false);
    const [message, setMessage] = useState('')

    handleEvents(labelActive, setLabelActive, active, setFreeStudents)

    return (
        <StudentWrap>
            <LabelInfo labelActive={labelActive}
                       message={message}/>
            <StudentName onClick={() => toggle(index, show, setShow)}>
                <StudentNameContent>{firstName} {lastName}.</StudentNameContent>
            </StudentName>
            <Buttons>
                {active.availableStudent ? <>
                    <Button text={pl.studentReservation} handleClick={() => {
                        handleAddToTalkStudent(id)
                        setLabelActive(true);
                        setMessage(`Dodałeś/aś studenta ${firstName} ${lastName} do rozmowy!`)
                    }} id={id}/>
                    <DownChevron size={30} onClick={() => toggle(index, show, setShow)} style={show === index ? {
                        transform: 'rotateX(180deg)',
                        transition: '0.4s'
                    } : {
                        transition: '0.4s',
                        transform: 'rotateX(0deg'
                    }}/></> : <>
                    <NavLink to={`/cv/${id}`}><Button text={pl.studentToTalkShowCv} handleClick={() => {
                    }} id={''}/></NavLink>
                    <Button text={pl.studentToTalkCancel} handleClick={() => {
                        handleRemoveStudentFromTalk(id)
                        setLabelActive(true)
                        setMessage(`Zrezygnowałeś/aś ze studenta ${firstName} ${lastName} !`)
                    }} id={id}/>
                    <Button text={pl.studentToTalkAccept} handleClick={() => {
                        handleHireStudent(id)
                        setLabelActive(true)
                        setMessage(`Gratulacje! Zatrudniłeś/aś ${firstName} ${lastName}`)
                    }} id={id}/>
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