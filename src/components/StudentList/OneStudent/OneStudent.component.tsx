import React, {useState} from "react";
import {Button} from "../../common/Button/Button.component";
import {pl} from "../../../lang/pl";
import {
    Buttons,
    DownChevron,
    StudentHeader,
    StudentName,
    StudentNameContent,
    StudentReservation,
    StudentWrap
} from "./OneStudent.styles";
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
import {Avatar} from "../../common/Avatar/Avatar.component";

export const OneStudent = ({
                               firstName,
                               lastName,
                               index,
                               show,
                               setShow,
                               active,
                               id,
                               setFreeStudents,
                               reservation,
                               ghUsername
                           }: IOneStudent) => {

    const [labelActive, setLabelActive] = useState(false);
    const [message, setMessage] = useState('')

    handleEvents(labelActive, setLabelActive, active, setFreeStudents)

    return (
        <StudentWrap>
            <LabelInfo labelActive={labelActive}
                       message={message}/>
            <StudentName onClick={() => toggle(index, show, setShow)}>
                {active.availableStudent ? <StudentNameContent>{firstName} {lastName}.</StudentNameContent> :
                    <StudentHeader>
                        <StudentReservation>
                            <p>Rezerwacja do</p>
                            <p>{reservation}</p>
                        </StudentReservation>
                        <Avatar ghUsername={ghUsername}/>
                        <StudentNameContent>{firstName} {lastName}</StudentNameContent>
                    </StudentHeader>}
            </StudentName>
            <Buttons>
                {active.availableStudent ? <>
                    <Button big={false} text={pl.studentReservation} handleClick={() => {
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
                    <NavLink to={`/cv/${id}`}><Button big={false} text={pl.studentToTalkShowCv} handleClick={() => {
                    }} id={''}/></NavLink>
                    <Button big={false} text={pl.studentToTalkCancel} handleClick={() => {
                        handleRemoveStudentFromTalk(id)
                        setLabelActive(true)
                        setMessage(`Zrezygnowałeś/aś ze studenta ${firstName} ${lastName} !`)
                    }} id={id}/>
                    <Button big={false} text={pl.studentToTalkAccept} handleClick={() => {
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