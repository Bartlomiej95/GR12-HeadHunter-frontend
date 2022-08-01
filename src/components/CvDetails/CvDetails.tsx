import React, {useEffect, useState} from 'react';
import './CvDetails.css';
import {CvLabel} from "../CvLabel/CvLabel";
import {DegreeDetail} from "../DegreeDetail/DegreeDetail";
import {ExpectationDetail} from "../ExpectationDetail/ExpectationDetail";
import {CvLabelWithLinks} from "../CvLabelWithLinks/CvLabelWithLinks";
import {getStudentData} from "../../utils/get-student-data";

export const CvDetails = () => {
    const [studentData, setStudentData] = useState({
        courseCompletion: 0,
        courseEngagment: 0,
        projectDegree: 0,
        teamProjectDegree: 0,
        bonusProjectUrls: [],
        portfolioUrls: [],
        projectUrls: [],
        expectedContractType: '',
        targetWorkCity: '',
        expectedTypeWork: '',
        expectedSalary: '',
        canTakeApprenticeship: false,
        monthsOfCommercialExp: 0,
        education: '',
        workExperience: '',
        courses: '',
        reservationStatus: '',
    });

    // target id from url
    // const {id} = useParams();

    // tmp id from database to test
    const id = 'c05cf975-3da4-47c9-a11d-be009f000071'

    useEffect(() => {
        (async () => {
            const student = await getStudentData(id);

            setStudentData({
                courseCompletion: student.courseCompletion,
                courseEngagment: student.courseEngagment,
                projectDegree: student.projectDegree,
                teamProjectDegree: student.teamProjectDegree,
                bonusProjectUrls: student.bonusProjectUrls,
                portfolioUrls: student.portfolioUrls,
                projectUrls: student.projectUrls,
                expectedContractType: student.expectedContractType,
                targetWorkCity: student.targetWorkCity,
                expectedTypeWork: student.expectedTypeWork,
                expectedSalary: student.expectedSalary,
                canTakeApprenticeship: student.canTakeApprenticeship,
                monthsOfCommercialExp: student.monthsOfCommercialExp,
                education: student.education,
                workExperience: student.workExperience,
                courses: student.courses,
                reservationStatus: student.reservationStatus,
            });
        })()
    }, []);

    console.log(studentData);

    return <>
        <section className="CvDetails">
            <CvLabel title="Oceny">
                <div className="Degree">
                    <DegreeDetail title="Ocena przejścia kursu" degree={studentData.courseCompletion}/>
                    <DegreeDetail title="Ocena aktywności i zaangażowania na kursie"
                                  degree={studentData.courseEngagment}/>
                    <DegreeDetail title="Ocena kodu w projekcie własnym" degree={studentData.projectDegree}/>
                    <DegreeDetail title="Ocena pracy w zespole w Scrum" degree={studentData.teamProjectDegree}/>
                </div>
            </CvLabel>
            <CvLabel title="Oczekiwanie w stosunku do zatrudnienia">
                <div className="WorkExpectation">
                    <ExpectationDetail
                        title="Preferowane miejsce pracy">{studentData.expectedTypeWork}</ExpectationDetail>
                    <ExpectationDetail
                        title="Docelowe miasto, gdzie chce pracować kandydat">{studentData.targetWorkCity}</ExpectationDetail>
                    <ExpectationDetail
                        title="Oczekiwany typ kontraktu">{studentData.expectedContractType}</ExpectationDetail>
                    <ExpectationDetail
                        title="Oczekiwane wynagrodzenie miesięczne netto">{studentData.expectedSalary} zł</ExpectationDetail>
                    <ExpectationDetail
                        title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">{studentData.canTakeApprenticeship ? 'TAK' : 'NIE'}</ExpectationDetail>
                    <ExpectationDetail
                        title="Komercyjne doświadczenie w programowaniu">{studentData.monthsOfCommercialExp} miesięcy</ExpectationDetail>
                </div>
            </CvLabel>
            <CvLabel title="Edukacja">
                <p>{studentData.education}</p>
            </CvLabel>
            <CvLabel title="Kursy">
                <p>{studentData.courses}</p>
            </CvLabel>
            <CvLabel title="Doświadczenie zawodowe">
                <p>{studentData.workExperience}</p>
            </CvLabel>
            <CvLabelWithLinks
                title="Portfolio"
                urlList={studentData.portfolioUrls}
            />
            <CvLabelWithLinks
                title="Projekt w zespole Scrumowym"
                urlList={studentData.bonusProjectUrls}
            />
            <CvLabelWithLinks
                title="Projekt na zaliczenie"
                urlList={studentData.projectUrls}
            />
        </section>
    </>
}
