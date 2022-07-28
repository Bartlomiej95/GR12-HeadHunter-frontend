import React from "react";
import './ContactInfo.css';
import {Envelope, Phone} from "@styled-icons/boxicons-solid";
import {Github} from "@styled-icons/boxicons-logos";
import {Button} from "../Button/Button";
import {CvAvatar} from "../Avatar/CvAvatar";
import {users} from "../../temporary/students";
import {useParams} from "react-router-dom";

export const ContactInfo = () => {
    const {id} = useParams();
    //example student
    const student = users[Number(id) - 1];
    const {
        firstName,
        lastName,
        githubUsername,
        tel,
        email,
        bio,
    } = student;

    return <>
        <div className="contactInfo">
            <CvAvatar githubUsername={githubUsername}/>
            <div className="Cv-user">
                <p>{firstName} {lastName}</p>
                <p>
                    <Github size={28}/>{githubUsername}
                </p>
            </div>
            <div className="Cv-contact">
                <p>
                    <Phone size={20} color="#4D4D4D"/><span>{tel}</span>
                </p>
                <p>
                    <Envelope size={20} color="#4D4D4D"/><span>{email}</span>
                </p>
            </div>
            <div className="Cv-about">
                <p>O mnie</p>
                <p>{bio}
                </p>
            </div>
            <div className="Cv-buttons">
                <Button text="Brak zainteresowania"/>
                <Button text="Zatrudniony"/>
            </div>
        </div>
    </>
}
