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
            <div className="Cv-user">
                <p>Jan Kowalski</p>
                <p>
                    <Github size={28}/><p>jankowalski</p>
                </p>
            </div>
            <div className="Cv-contact">
                <p>
                    <Phone size={20} color="#4D4D4D"/><span>+48 123 456 789</span>
                </p>
                <p>
                    <Envelope size={20} color="#4D4D4D"/><span>jankowalski@gmail.com</span>
                </p>
            </div>
            <div className="Cv-about">
                <p>O mnie</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                </p>
            </div>
            <div className="Cv-buttons">
                <Button text="Brak zainteresowania"/>
                <Button text="Zatrudniony"/>
            </div>
        </div>
    </>
}
