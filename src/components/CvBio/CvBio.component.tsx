import React, {EventHandler, useState} from "react";
import {
    AvatarCv, AvatarImage,
    BioDescription,
    CvBioContent, CvBioWrapper,
    CvButtons, CvContact, CvLabel, CvMail, CvName, CvPhone, EnvelopeIcon, GitHubIcon, GitHubWrapper, PhoneIcon, UserName
} from "./CvBio.styles";
import img from '../../assets/img/megak.png'
import {NavLink, useNavigate,} from "react-router-dom";
import {ICvBioProps} from "./CvBio.types";
import {pl} from "../../lang/pl";
import {LabelInfo} from "../common/LabelInfo/LabelInfo.component";
import {handleHireStudent, handleRemoveStudentFromTalk} from "../StudentList/OneStudent/OneStudent.utils";
import {Button} from "../common/Button/Button.component";
import {delayAndGo} from "./CvBio.utils";

export const CvBio: React.FC<ICvBioProps> = ({firstName, lastName, gh, phone, mail, bio, id}) => {

    const [message, setMessage] = useState('')
    const [labelActive, setLabelActive] = useState(false);

    const history = useNavigate();


    return (
        <CvBioWrapper>
            <LabelInfo labelActive={labelActive} message={message}/>
            <AvatarCv>
                <AvatarImage src={img} alt="Logo"/>
            </AvatarCv>
            <CvName>
                <UserName>{firstName} {lastName}</UserName>
                <GitHubWrapper><GitHubIcon size={22}/><NavLink to="http://github.com">{gh}</NavLink></GitHubWrapper>
            </CvName>
            <CvContact>
                <CvPhone><PhoneIcon size={20}/>+48 {phone}</CvPhone>
                <CvMail><EnvelopeIcon size={20}/>{mail}</CvMail>
            </CvContact>
            <CvBioContent>
                <CvLabel>{pl.cvBioLabel}</CvLabel>
                <BioDescription>{bio}</BioDescription>
            </CvBioContent>
            <CvButtons>
                <NavLink to='/to-talk' onClick={(e) => {
                    setLabelActive(true)
                    setMessage(`Zrezygnowałeś/aś ze studenta ${firstName} ${lastName} !`)
                    delayAndGo(e, '/to-talk', history)
                }}><Button text={pl.studentToTalkCancel} handleClick={() => {
                    handleRemoveStudentFromTalk(id)
                }} id={id}/></NavLink>
                <NavLink to='/to-talk' onClick={(e) => {
                    setLabelActive(true)
                    setMessage(`Gratulacje! Zatrudniłeś/aś ${firstName} ${lastName} !`)
                    delayAndGo(e, '/to-talk', history)
                }}><Button text={pl.studentToTalkAccept} handleClick={() => {
                    handleHireStudent(id)
                }} id={id}/></NavLink>
            </CvButtons>
        </CvBioWrapper>
    )
}