import React, {useEffect, useState} from "react";
import './ContactInfo.css';
import {Envelope, Phone} from "@styled-icons/boxicons-solid";
import {Github} from "@styled-icons/boxicons-logos";
import {Button} from "../Button/Button";
import {CvAvatar} from "../Avatar/CvAvatar";
import {StudentCVResponse} from "../../utils/get-one-student-data";

interface Props {
    student: StudentCVResponse;
}

export const ContactInfo = (props: Props) => {
    const {
        id,
        firstName,
        lastName,
        email,
        tel,
        githubUsername,
        bio,
    } = props.student;

    // TODO: fn handleStudentNotInterested
    const handleStudentNotInterested = (id: string): void => {
        console.log(`Not interested student with ID ${id}.`)
    }

    // TODO: fn handleStudentHired
    const handleStudentHired = (id: string): void => {
        console.log(`Student with ID ${id} will be hire.`)
    }

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
                <p>{bio}</p>
            </div>
            <div className="Cv-buttons">
                <Button text="Brak zainteresowania" id={id} click={handleStudentNotInterested}/>
                <Button text="Zatrudniony" id={id} click={handleStudentHired}/>
            </div>
        </div>
    </>
}
