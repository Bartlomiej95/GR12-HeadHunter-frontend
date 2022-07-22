import React, {useState} from "react";
import {users} from "../../temporary/students";
import {Button} from "../Button/Button";
import {ChevronDown} from "@styled-icons/boxicons-solid";
import './Student.css';

export const Student = () => {

    const [show, setShow] = useState<boolean | null | number>(false)

    const toggle = (index: number) => {
        if (show === index) {
            return setShow(null)
        }
        setShow(index)
    }

    const checkUrl = () => {
        if (window.location.href === "http://localhost:3000/") {
            return (
                users.filter(user => !user.reservation).map((user, index) => (
                    <div className="Student">
                        <div className="oneStudent" key={user.id}>
                            <p style={show === index ? {fontWeight: 700} : {}}
                               onClick={() => toggle(index)}>{user.name} {user.lastName.split('')[0]}.</p>
                            <div>
                                <Button text='Zarezerwuj rozmowę'/>
                                <ChevronDown onClick={() => toggle(index)} size={30} color="#666666"
                                             style={show === index ? {
                                                 transform: 'rotateX(180deg)',
                                                 transition: '0.4s'
                                             } : {
                                                 transition: '0.4s',
                                                 transform: 'rotateX(0deg'
                                             }}/>
                            </div>

                        </div>
                        <div className="oneStudent__desc"
                             style={show === index ? {transition: '0.4s', height: '155px'} : {
                                 transition: '0.4s',
                                 height: '0px'
                             }}>
                            <div className="oneStudent__desc--item">
                                <p>Ocena przejścia kursu</p>
                                <p><strong>{user.ratingCourse}</strong>/5</p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Ocena aktywności i zaangażowania na kursie</p>
                                <p><strong>{user.ratingActive}</strong>/5</p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Ocena kodu w projekcie własnym</p>
                                <p><strong>{user.ratingCode}</strong>/5</p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Ocena pracy w zespole Scrum</p>
                                <p><strong>{user.ratingWork}</strong>/5</p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Preferowane miejsce pracy</p>
                                <p><strong>{user.preferPlaceWork}</strong></p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                                <p><strong>{user.cityWork}</strong></p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Oczekiwany typ kontraktu</p>
                                <p><strong>{user.contractType}</strong></p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                                <p><strong>{user.expectedSalary} zł</strong></p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                                <p><strong>{user.freePractice}</strong></p>
                            </div>
                            <div className="oneStudent__desc--item">
                                <p>Komercyjne doświadczenie w programowaniu</p>
                                <p><strong>{user.commercialExp}</strong></p>
                            </div>
                        </div>
                    </div>
                ))
            )
        } else if (window.location.href === "http://localhost:3000/to-talk") {
            return (
                users.filter(user => user.reservation).map(user => (
                    <div className="oneStudent" key={user.id}>
                        <div>
                            <p>Rezerwacja do <strong>18.07.2022</strong></p>
                            <p>{user.name} {user.lastName}</p>
                        </div>
                        <div>
                            <Button text='Pokaż CV'/>
                            <Button text='Brak zainteresowania'/>
                            <Button text='Zatrudniony'/>
                            <ChevronDown size={30} color="#666666"/>
                        </div>
                    </div>
                ))
            )
        }
    }

    return (
        <>
            {checkUrl()}
        </>
    )
}