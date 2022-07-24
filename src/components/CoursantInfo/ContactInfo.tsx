import React from "react";
import './ContactInfo.css';
import {Envelope, Phone} from "@styled-icons/boxicons-solid";
import {Github} from "@styled-icons/boxicons-logos";
import {Button} from "../Button/Button";
import {CvAvatar} from "../Avatar/CvAvatar";

export const ContactInfo = () => {
    return <>
        <div className="contactInfo">
            <CvAvatar githubUsername="nestjs"/>
            <p className="fullName">Jan Kowalski</p>
            <p className="github">
                <Github size={22}/>jankowalski
            </p>
            <p className="phone">
                <Phone size={22} className="PhoneIcon"/>+48 123 456 789
            </p>
            <p className="email">
                <Envelope size={22} className="EnvelopeIcon"/>jankowalski@gmail.com
            </p>
            <p className="about">O mnie</p>
            <p className="Bio">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                duo</p>
            <Button text="Brak zainteresowania"/>
            <Button text="Zatrudniony"/>
        </div>
    </>
}
