import React, {useEffect, useState} from "react";
import {getStudent} from "./Cv.utils";
import {useParams} from "react-router-dom";
import {StudentCv} from "./Cv.types";

export const Cv = () => {
    const [student, setStudent] = useState<StudentCv[]>([])
    const {id} = useParams()

    useEffect(() => {
        getStudent(id, setStudent)
    }, [])


    return (
        <>
            <h1>CV</h1>
            {student.map(user => <><div>{user.bio}</div></>)}
        </>
    )
}