import React, {Dispatch, SetStateAction, useState} from 'react';
import './Filter.css';
import {DownArrow, UpArrow} from "@styled-icons/boxicons-solid";
import {Button} from "../Button/Button";
import {Rating} from "./Rating/Rating";
import {SelectedRating} from "./Stars/Stars";

interface FilterProps {
    filter: Dispatch<SetStateAction<boolean>>
}

export interface Filtered {
    ratingCourse: SelectedRating | {},
    ratingActiveInCourse: SelectedRating | {},
    ratingCode: SelectedRating | {},
    ratingScrum: SelectedRating | {},
    placeWork: string,
    cityWork: string,
    contractType: string,
    salaryPrice: null | number,
    freeWork: null | number,
    commercialExp: null | string,
}

export const Filter = (props: FilterProps) => {

    const [chooseFilter, setChooseFilter] = useState<Filtered>({
        ratingCourse: {},
        ratingActiveInCourse: {},
        ratingCode: {},
        ratingScrum: {},
        placeWork: '',
        cityWork: '',
        contractType: '',
        salaryPrice: null,
        freeWork: null,
        commercialExp: '',
    })

    const setRating = (obj: SelectedRating, name: string) => {
        if (name === 'ratingCourse') {
            setChooseFilter({...chooseFilter, ratingCourse: obj})
        } else if (name === 'ratingActiveInCourse') {
            setChooseFilter({...chooseFilter, ratingActiveInCourse: obj})
        } else if (name === 'ratingCode') {
            setChooseFilter({...chooseFilter, ratingCode: obj})
        } else if (name === 'ratingScrum') {
            setChooseFilter({...chooseFilter, ratingScrum: obj})
        }
    }

    return (
        <>
            <div className="filter-bg" onClick={() => props.filter(false)}></div>
            <div className="Filter">
                <div className="Filter-header">
                    <h4>Filtrowanie</h4>
                    <button className="Filter-clearAll">Wyczyść wszystkie</button>
                </div>
                <div className="Filter-ratings">
                    <Rating title="Ocena przejścia kursu" rating={setRating} name="ratingCourse"/>
                    <Rating title="Ocena aktywności i zaangażowania na kursie" rating={setRating}
                            name="ratingActiveInCourse"/>
                    <Rating title="Ocena kodu w projekcie własnym" rating={setRating} name="ratingCode"/>
                    <Rating title="Ocena pracy w zespole w Scrum" rating={setRating} name="ratingScrum"/>
                </div>
                <div className="Filter-place">
                    <p>Preferowane miejsce pracy</p>
                    <div className="Filter-select">
                        <p>Praca zdalna</p>
                        <p>Praca w biurze</p>
                    </div>
                </div>
                <div className="Filter-contract">
                    <p>Oczekiwany typ kontraktu</p>
                    <div className="Filter-select">
                        <p>Umowa o pracę</p><p>B2B</p>
                        <p>Umowa zlecenie</p><p>Umowa o dzieło</p>
                    </div>
                </div>
                <div className="Filter-price">
                    <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                    <div className="Filter-inputs">
                        <div className="Filter-input">
                            <label>Od</label>
                            <input type="text" placeholder="np. 1000 zł"/>
                        </div>
                        <div className="Filter-input">
                            <label>Do</label>
                            <input type="text" placeholder="np. 10000 zł"/>
                        </div>
                    </div>
                </div>
                <div className="Filter-free">
                    <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                    <div className="Filter-radio">
                        <input type="radio" name="free" id="tak"/> <label htmlFor="tak">Tak</label>
                    </div>
                    <div className="Filter-radio">
                        <input type="radio" name="free" id="nie"/> <label htmlFor="nie">Nie</label>
                    </div>
                </div>
                <div className="Filter-exp">
                    <p>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                    <div className="Filter-month">
                        <p>0 miesięcy</p>
                        <div>
                            <UpArrow size={10} color="#7E7E7E" className="Filter-arrow"/>
                            <DownArrow size={10} color="#7E7E7E" className="Filter-arrow"/>
                        </div>
                    </div>
                </div>
                <div className="Filter-buttons">
                    <p className="Filter-cancel" onClick={() => props.filter(false)}>Anuluj</p>
                    <Button text='Pokaż wyniki'/>
                </div>
            </div>
        </>
    )
}