import React, {useEffect, useState} from "react";
import './ContactInfo.css';
import {Envelope, Phone} from "@styled-icons/boxicons-solid";
import {Github} from "@styled-icons/boxicons-logos";
import {Button} from "../Button/Button";
import {CvAvatar} from "../Avatar/CvAvatar";
import {getStudentData} from "../../utils/get-student-data";
import {useParams} from "react-router-dom";

export const ContactInfo = () => {
    const [studentData, setStudentData] = useState({
        tel: '',
        githubUsername: '',
        bio: '',
    });

    // target id from url
    // const {id} = useParams();

    // tmp student id from database to test
    const id = 'c05cf975-3da4-47c9-a11d-be009f000071'

    useEffect(() => {
        (async () => {
            const student = await getStudentData(id);

            setStudentData({
                tel: student.tel,
                githubUsername: student.githubUsername,
                bio: student.bio,
            });
        })()
    }, []);

    // TODO: ask BE for more data from res: firstName, lastName, email
    return <>
        <div className="contactInfo">
            <CvAvatar githubUsername={studentData.githubUsername}/>
            <div className="Cv-user">
                <p>Jan Kowalski</p>
                <p>
                    <Github size={28}/>{studentData.githubUsername}
                </p>
            </div>
            <div className="Cv-contact">
                <p>
                    <Phone size={20} color="#4D4D4D"/><span>{studentData.tel}</span>
                </p>
                <p>
                    <Envelope size={20} color="#4D4D4D"/><span>jankowalski@gmail.com</span>
                </p>
            </div>
            <div className="Cv-about">
                <p>O mnie</p>
                <p>{studentData.bio}</p>
            </div>
            <div className="Cv-buttons">
                <Button text="Brak zainteresowania"/>
                <Button text="Zatrudniony"/>
            </div>
        </div>
    </>
}
