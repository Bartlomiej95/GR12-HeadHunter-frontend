import {Dispatch, SetStateAction} from "react";

export const toggle = (index: number, show: number | boolean | null, setShow: Dispatch<SetStateAction<number | boolean | null>>) => {
    if (show === index) {
        return setShow(null)
    }
    setShow(index)
}

export const handleAddToTalkStudent = async(id: string) => {
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
    await fetch(`http://localhost:3001/hirestudent/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.actionStatus)
        })
}