import React from 'react';
import './CvDetails.css';
import {CvLabel} from "../CvLabel/CvLabel";
import {DegreeDetail} from "../DegreeDetail/DegreeDetail";
import {ExpectationDetail} from "../ExpectationDetail/ExpectationDetail";
import {CvLabelWithLinks} from "../CvLabelWithLinks/CvLabelWithLinks";

export const CvDetails = () => {
    return <>
        <section className="CvDetails">
            <CvLabel title="Oceny">
                <div className="Degree">
                    <DegreeDetail title="Ocena przejścia kursu" degree={3}/>
                    <DegreeDetail title="Ocena aktywności i zaangażowania na kursie" degree={5}/>
                    <DegreeDetail title="Ocena kodu w projekcie własnym" degree={2}/>
                    <DegreeDetail title="Ocena pracy w zespole w Scrum" degree={4}/>
                </div>
            </CvLabel>
            <CvLabel title="Oczekiwanie w stosunku do zatrudnienia">
                <div className="WorkExpectation">
                    <ExpectationDetail title="Preferowane miejsce pracy">Biuro</ExpectationDetail>
                    <ExpectationDetail
                        title="Docelowe miasto, gdzie chce pracować kandydat">Warszawa</ExpectationDetail>
                    <ExpectationDetail title="Oczekiwany typ kontraktu">Umowa o pracę</ExpectationDetail>
                    <ExpectationDetail title="Oczekiwane wynagrodzenie miesięczne netto">8 000 zł</ExpectationDetail>
                    <ExpectationDetail
                        title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">TAK</ExpectationDetail>
                    <ExpectationDetail title="Komercyjne doświadczenie w programowaniu">6 miesięcy</ExpectationDetail>
                </div>
            </CvLabel>
            <CvLabel title="Edukacja">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </CvLabel>
            <CvLabel title="Kursy">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </CvLabel>
            <CvLabel title="Doświadczenie zawodowe">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </CvLabel>
            <CvLabelWithLinks
                title="Portfolio"
                urlList={[
                    "https://github.com",
                ]}
            />
            <CvLabelWithLinks
                title="Projekt w zespole Scrumowym"
                urlList={[
                    "https://github.com",
                    "https://google.com"
                ]}
            />
            <CvLabelWithLinks
                title="Projekt na zaliczenie"
                urlList={[
                    "https://loremipsum/dolor/sit/amet",
                    "https://lorem/ipsum/dolor/amet"
                ]}
            />
        </section>
    </>
}
