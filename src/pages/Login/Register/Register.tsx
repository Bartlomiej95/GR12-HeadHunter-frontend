import React, {useState} from "react";
import {LOGInHost, RecruiterAddPost} from "../../../utils/dictionaries";

export const Register = ()=>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('hr');
    const [maxReservedStudents, setMaxReservedStudents] = useState(0);
    let action = {actionStatus: " ", message: ""}

    const add = async () =>{
        await fetch(RecruiterAddPost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email,
                "fullName": name,
                company,
                maxReservedStudents
            })
        })  .then(response => response.json())
            .then(data => action = data)
        console.log(email,name,company,maxReservedStudents)
        console.log('----')
        console.log(action)
    }

    return(
        <div className="u-flex  u-flex__column">
            <h1>Panel dodawania kursantów</h1>
            <input type="text"
                   placeholder="Email" className="c-input c-input--border"
                   onChange={e=> setEmail(e.target.value)}/>
            <input type="text"
                   placeholder="Nazwa" className="c-input c-input--border"
                   onChange={e=> setName(e.target.value)}/>
            <select className="c-input c-input--border" onChange={e=> setCompany(e.target.value)}>
                <option value="hr">HR</option>
                <option value="cursant">Kursant</option>
            </select>
            <input type="number"
                   placeholder="Liczba zarezerwowanych kursantów "
                   className="c-input c-input--border"
                   onChange={e => setMaxReservedStudents(Number(e.target.value))}/>
            <button className="c-btn" onClick={add}>Dodaj</button>
        </div>
    )
}