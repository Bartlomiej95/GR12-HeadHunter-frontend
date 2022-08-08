import {Dispatch, SetStateAction} from "react";
import {getStudents} from "../../../pages/AvailableStudents/AvailableStudents.utils";
import {getStudentsToTalk} from "../../../pages/ToTalk/ToTalk.utils";
import {Students} from "../../../pages/AvailableStudents/AvailableStudents.types";

export const toggle = (index: number, show: number | boolean | null, setShow: Dispatch<SetStateAction<number | boolean | null>>) => {
    if (show === index) {
        return setShow(null)
    }
    setShow(index)
}

export const handleAddToTalkStudent = async (id: string) => {
    await fetch(`http://localhost:3001/recruiter/addstudent/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.actionStatus)
        })

}

export const handleRemoveStudentFromTalk = async (id: string) => {
    await fetch(`http://localhost:3001/recruiter/pushback/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.actionStatus)
        })

}

export const handleHireStudent = async (id: string) => {
    await fetch(`http://localhost:3001/recruiter/hirestudent/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.actionStatus)
        })
}

export const handleEvents = (labelActive: boolean, setLabelActive: Dispatch<SetStateAction<boolean>>, active: any, setFreeStudents: Dispatch<SetStateAction<Students[]>>) => {
    if (labelActive) {
        setTimeout(() => {
            if (active.availableStudent) {
                getStudents(setFreeStudents)
            }
            if (active.toTalk) {
                getStudentsToTalk(setFreeStudents)
            }
        }, 2000)

        setTimeout(() => {
            setLabelActive(false)
        },1500)
    }
}