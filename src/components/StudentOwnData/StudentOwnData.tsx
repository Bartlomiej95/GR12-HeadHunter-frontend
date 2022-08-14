import React, {FormEvent, useEffect, useState} from 'react';
import {ExpectedContractType, ExpectedTypeWork} from "../../utils/get-one-student-data";
import {getStudentOwnData, StudentData} from "../../utils/get-student-own-data";
import {InputUrlList} from "../InputUrlList/InputUrlList";
import {StudentDataUpdate} from "../../utils/dictionaries";

export const StudentOwnData = () => {
    const [studentOwnData, setStudentOwnData] = useState<StudentData>({
        tel: '',
        firstName: '',
        lastName: '',
        githubUsername: '',
        portfolioUrls: [],
        projectUrls: [],
        bio: '',
        expectedContractType: ExpectedContractType.IRRELEVANT,
        targetWorkCity: '',
        expectedTypeWork: ExpectedTypeWork.NO_MATTER,
        expectedSalary: '',
        canTakeApprenticeship: "false",
        monthsOfCommercialExp: 0,
        education: '',
        workExperience: '',
        courses: ''
    });

    const {
        tel,
        firstName,
        lastName,
        githubUsername,
        portfolioUrls,
        projectUrls,
        bio,
        expectedContractType,
        targetWorkCity,
        expectedTypeWork,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
        education,
        workExperience,
        courses
    } = studentOwnData;

    // const [studentNewPortfolioUrl, setStudentNewPortfolioUrl] = useState<string>('');
    // const [studentPortfolio, setStudentPortfolio] = useState<string[] | null>(portfolioUrls);

    // TODO: need to implement later
    // const addNewPortfolioUrl = (url: string): void => {
    //     // TODO: fix empty string in studentPortfolio when first click on save btn with new portfolio
    //     setStudentNewPortfolioUrl(url);
    //     if (studentPortfolio !== null) {
    //         setStudentPortfolio([...studentPortfolio, studentNewPortfolioUrl])
    //     }
    //     console.log('nowy adres z protfolio', setStudentNewPortfolioUrl)
    // }

    const updateUrls = (key: string, value: string) => {
        const arrayOfUrls = value.split(',');
        setStudentOwnData(prev => ({...prev, [key]: arrayOfUrls}));
    };

    const updateStudentForm = (key: string, value: string | number | ExpectedContractType | ExpectedTypeWork | null) => {
        setStudentOwnData(form => ({
            ...form,
            [key]: value,
        }));
    }

    const sendForm = async (event: FormEvent) => {
        event.preventDefault();
        await fetch(StudentDataUpdate, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify(studentOwnData),
        });
    };

    useEffect(() => {
        (async () => {
            const data = await getStudentOwnData();
            setStudentOwnData(data);
            // setStudentPortfolio(data.portfolioUrls);
        })();
    }, []);

    return <>
        <div className='AvailableStudents'>
            <div className="u-flex  u-flex__column">
                <h1>Aktualizacja danych studenta</h1>
                <form onSubmit={sendForm}>
                    {/*<InputUrlList*/}
                    {/*    labelName="TEST NEW Adresy URL do portfolio"*/}
                    {/*    urlList={portfolioUrls}*/}
                    {/*    studentPortfolio={studentPortfolio}*/}
                    {/*    childToParent={addNewPortfolioUrl}*/}
                    {/*/>*/}
                    <label>
                        <p>Imię</p>
                        <input type="text"
                               name="firstName"
                               maxLength={50}
                               className="su-input su-input--border"
                               value={firstName}
                               required
                               onChange={e => updateStudentForm('firstName', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Nazwisko</p>
                        <input type="text"
                               name="lastName"
                               maxLength={50}
                               className="su-input su-input--border"
                               value={lastName}
                               required
                               onChange={e => updateStudentForm('lastName', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Telefon</p>
                        <input type="text"
                               name="tel"
                               maxLength={15}
                               className="su-input su-input--border"
                               value={tel}
                               required
                               onChange={e => updateStudentForm('tel', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Nazwa konta na GitHub</p>
                        <input type="text"
                               name="githubUsername"
                               maxLength={39}
                               className="su-input su-input--border"
                               value={githubUsername}
                               required
                               onChange={e => updateStudentForm('githubUsername', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Adresy URL do portfolio
                            <small> (należy rozdzielić przecinkiem, jeśli jest ich kilka)</small>
                        </p>
                        <input type="text" // TODO: change to url type & multiple inputs
                               name="portfolioUrls"
                               className="su-input su-input--border"
                               value={String(portfolioUrls)}
                               required
                               onChange={e => updateUrls('portfolioUrls', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Adresy URL do GitHub z projektem zaliczeniowym
                            <small> (należy rozdzielić przecinkiem, jeśli jest ich kilka)</small>
                        </p>
                        <input type="text" // TODO: change to url type & multiple inputs
                               name="projectUrls"
                               className="su-input su-input--border"
                               value={String(projectUrls)}
                               required
                               onChange={e => updateUrls('projectUrls', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>O mnie</p>
                        <input type="text"
                               name="bio"
                               maxLength={255}
                               className="su-input su-input--border"
                               value={bio}
                               required
                               onChange={e => updateStudentForm('bio', e.target.value)}
                        />
                    </label>
                    <label htmlFor="expectedContractType">
                        <p>Oczekiwany typ kontraktu</p>
                        <select
                            name="expectedContractType"
                            id="expectedContractType"
                            className="su-input su-input--border"
                            value={expectedContractType}
                            onChange={e => updateStudentForm('expectedContractType', e.target.value)}
                        >
                            <option value="UoP">Tylko UoP</option>
                            <option value="B2B">Możliwe B2B</option>
                            <option value="UZ/UoD">Możliwe UZ/UoD</option>
                            <option value="irrelevant">Brak preferencji</option>
                        </select>
                    </label>
                    <label>
                        <p>Docelowe miasto pracy:</p>
                        <input type="text"
                               name="targetWorkCity"
                               maxLength={100}
                               className="su-input su-input--border"
                               value={targetWorkCity}
                               required
                               onChange={e => updateStudentForm('targetWorkCity', e.target.value)}
                        />
                    </label>
                    <label htmlFor="expectedTypeWork">
                        <p>Preferowane miejsce pracy</p>
                        <select
                            name="expectedTypeWork"
                            id="expectedTypeWork"
                            className="su-input su-input--border"
                            value={expectedTypeWork}
                            onChange={e => updateStudentForm('expectedTypeWork', e.target.value)}
                        >
                            <option value="atLocation">Praca na miejscu</option>
                            <option value="changeOfLocation">Gotowość do przeprowadzki</option>
                            <option value="manual">Wyłącznie zdalnie</option>
                            <option value="irrelevant">Bez znaczenia</option>
                        </select>
                    </label>
                    <label>
                        <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                        <input type="text"
                               name="expectedSalary"
                               maxLength={8}
                               className="su-input su-input--border"
                               value={expectedSalary}
                               required
                               onChange={e => updateStudentForm('expectedSalary', e.target.value)}
                        />
                    </label>
                    <label htmlFor="canTakeApprenticeship">
                        <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                        <select
                            name="canTakeApprenticeship"
                            id="canTakeApprenticeship"
                            className="su-input su-input--border"
                            value={canTakeApprenticeship}
                            onChange={e => updateStudentForm('canTakeApprenticeship', e.target.value)}
                        >
                            <option value="true">TAK</option>
                            <option value="false">NIE</option>
                        </select>
                    </label>
                    <label>
                        <p>Liczba miesięcy komercyjnego doświadczenia</p>
                        <input type="number"
                               name="monthsOfCommercialExp"
                               className="su-input su-input--border"
                               min={0}
                               value={monthsOfCommercialExp}
                               required
                               onChange={e => updateStudentForm('monthsOfCommercialExp', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Przebieg edukacji</p>
                        <textarea
                            name="education"
                            className="su-input su-input--border su-input--textarea"
                            value={education}
                            onChange={e => updateStudentForm('education', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Przebieg doświadczenia zawodowego</p>
                        <textarea
                            name="workExperience"
                            className="su-input su-input--border su-input--textarea"
                            value={workExperience}
                            onChange={e => updateStudentForm('workExperience', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Kursy i certyfikaty związane z programowaniem</p>
                        <textarea
                            name="courses"
                            className="su-input su-input--border su-input--textarea"
                            value={courses}
                            onChange={e => updateStudentForm('courses', e.target.value)}
                        />
                    </label>
                    <button className="Button">Aktualizuj dane</button>
                </form>
            </div>
        </div>
    </>
}
