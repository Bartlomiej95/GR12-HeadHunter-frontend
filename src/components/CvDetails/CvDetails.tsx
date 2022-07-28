import React from 'react';
import './CvDetails.css';
import {CvLabel} from "../CvLabel/CvLabel";
import {DegreeDetail} from "../DegreeDetail/DegreeDetail";
import {ExpectationDetail} from "../ExpectationDetail/ExpectationDetail";
import {CvLabelWithLinks} from "../CvLabelWithLinks/CvLabelWithLinks";
import {useParams} from "react-router-dom";
import {users} from "../../temporary/students";

export const CvDetails = () => {
    const {id} = useParams();
    //example student
    const student = users[Number(id) - 1];
    const {
        portfolioUrls,
        projectUrls,
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
        education,
        workExperience,
        courses,
        courseCompletion,
        courseEngagment,
        projectDegree,
        teamProjectDegree,
        bonusProjectUrls,
    } = student;

    return <>
        <section className="CvDetails">
            <CvLabel title="Oceny">
                <div className="Degree">
                    <DegreeDetail title="Ocena przejścia kursu" degree={courseCompletion}/>
                    <DegreeDetail title="Ocena aktywności i zaangażowania na kursie" degree={courseEngagment}/>
                    <DegreeDetail title="Ocena kodu w projekcie własnym" degree={projectDegree}/>
                    <DegreeDetail title="Ocena pracy w zespole w Scrum" degree={teamProjectDegree}/>
                </div>
            </CvLabel>
            <CvLabel title="Oczekiwanie w stosunku do zatrudnienia">
                <div className="WorkExpectation">
                    <ExpectationDetail title="Preferowane miejsce pracy">{expectedTypeWork}</ExpectationDetail>
                    <ExpectationDetail
                        title="Docelowe miasto, gdzie chce pracować kandydat">{targetWorkCity}</ExpectationDetail>
                    <ExpectationDetail title="Oczekiwany typ kontraktu">{expectedContractType}</ExpectationDetail>
                    <ExpectationDetail
                        title="Oczekiwane wynagrodzenie miesięczne netto">{expectedSalary} zł</ExpectationDetail>
                    <ExpectationDetail
                        title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">{canTakeApprenticeship.toUpperCase()}</ExpectationDetail>
                    <ExpectationDetail title="Komercyjne doświadczenie w programowaniu">{monthsOfCommercialExp} miesiące
                        (-y)</ExpectationDetail>
                </div>
            </CvLabel>
            <CvLabel title="Edukacja">
                <p>{education}</p>
            </CvLabel>
            <CvLabel title="Kursy">
                <p>{courses}</p>
            </CvLabel>
            <CvLabel title="Doświadczenie zawodowe">
                <p>{workExperience}</p>
            </CvLabel>
            <CvLabelWithLinks
                title="Portfolio"
                urlList={portfolioUrls}
            />
            <CvLabelWithLinks
                title="Projekt w zespole Scrumowym"
                urlList={bonusProjectUrls}
            />
            <CvLabelWithLinks
                title="Projekt na zaliczenie"
                urlList={projectUrls}
            />
        </section>
    </>
}
