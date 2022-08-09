import React from "react";
import {
    AvatarCv, AvatarImage,
    BioDescription,
    CvBioContent, CvBioWrapper,
    CvButtons, CvContact, CvLabel, CvMail, CvName, CvPhone, EnvelopeIcon, GitHubIcon, GitHubWrapper, PhoneIcon, UserName
} from "./CvBio.styles";
import img from '../../assets/img/megak.png'
import {NavLink} from "react-router-dom";
import {ICvBioProps} from "./CvBio.types";
import {pl} from "../../lang/pl";
import {Button} from "../common/Button/Button.component";

export const CvBio: React.FC<ICvBioProps> = ({firstName, lastName, gh, phone, mail, bio, id}) => {
    return (
        <CvBioWrapper>
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
                <Button text={pl.studentToTalkCancel} handleClick={() => {
                }} id={id}/>
                <Button text={pl.studentToTalkAccept} handleClick={() => {
                }} id={id}/>
            </CvButtons>
        </CvBioWrapper>
    )
}