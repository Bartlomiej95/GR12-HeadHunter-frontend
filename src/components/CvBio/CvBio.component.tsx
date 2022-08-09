import React, {EventHandler, useEffect, useState} from "react";
import {
    AvatarCv, AvatarImage,
    BackToTalk,
    BioDescription,
    ChevronLeftIcon,
    CvBioContent, CvBioWrapper,
    CvButtons, CvContact, CvLabel, CvMail, CvName, CvPhone, EnvelopeIcon, GitHubIcon, GitHubWrapper, PhoneIcon, UserName
} from "./CvBio.styles";
import img from '../../assets/img/megak.png'
import {NavLink, useNavigate,} from "react-router-dom";
import {ICvBioProps} from "./CvBio.types";
import {pl} from "../../lang/pl";
import {LabelInfo} from "../common/LabelInfo/LabelInfo.component";
import {getUserGH, handleHireStudent, handleRemoveStudentFromTalk} from "../StudentList/OneStudent/OneStudent.utils";
import {Button} from "../common/Button/Button.component";
import {delayAndGo} from "./CvBio.utils";

export const CvBio: React.FC<ICvBioProps> = ({firstName, lastName, gh, phone, mail, bio, id}) => {

    const [message, setMessage] = useState('')
    const [labelActive, setLabelActive] = useState(false);
    const [ghb, setGhb] = useState<any[]>([])

    const history = useNavigate();

    useEffect(() => {
        getUserGH(setGhb, gh)
    }, [])

    return (
        <>
            <LabelInfo labelActive={labelActive} message={message}/>
            <CvBioWrapper>
                <div>
                    <NavLink to='/to-talk'>
                        <BackToTalk>
                            <ChevronLeftIcon size={30}/>Wróć
                        </BackToTalk>
                    </NavLink>

                    <AvatarCv>
                        {ghb.map(img => <AvatarImage src={img.avatar_url} alt="Logo"/>)}
                    </AvatarCv>
                    <CvName>
                        <UserName>{firstName} {lastName}</UserName>
                        <GitHubWrapper><GitHubIcon size={22}/><NavLink
                            to="http://github.com">{gh}</NavLink></GitHubWrapper>
                    </CvName>
                    <CvContact>
                        <CvPhone><PhoneIcon size={20}/>+48 {phone}</CvPhone>
                        <CvMail><EnvelopeIcon size={20}/>{mail}</CvMail>
                    </CvContact>
                    <CvBioContent>
                        <CvLabel>{pl.cvBioLabel}</CvLabel>
                        <BioDescription>{bio}</BioDescription>
                    </CvBioContent>
                </div>
                <CvButtons>
                    <NavLink to='/to-talk' style={{display: 'flex'}} onClick={(e) => {
                        setLabelActive(true)
                        setMessage(`Zrezygnowałeś/aś ze studenta ${firstName} ${lastName} !`)
                        delayAndGo(e, '/to-talk', history)
                    }}><Button big={true} text={pl.studentToTalkCancel} handleClick={() => {
                        handleRemoveStudentFromTalk(id)
                    }} id={id}/></NavLink>
                    <NavLink to='/to-talk' onClick={(e) => {
                        setLabelActive(true)
                        setMessage(`Gratulacje! Zatrudniłeś/aś ${firstName} ${lastName} !`)
                        delayAndGo(e, '/to-talk', history)
                    }}><Button big={true} text={pl.studentToTalkAccept} handleClick={() => {
                        handleHireStudent(id)
                    }} id={id}/></NavLink>
                </CvButtons>
            </CvBioWrapper>
        </>
    )
}