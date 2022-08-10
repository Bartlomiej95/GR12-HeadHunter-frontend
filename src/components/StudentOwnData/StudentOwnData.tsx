import React, {FormEvent, useEffect, useState} from 'react';
import {ExpectedContractType, ExpectedTypeWork} from "../../utils/get-one-student-data";
import {getStudentOwnData, StudentData} from "../../utils/get-student-own-data";

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

    const [form, setForm] = useState({
        tel: '',
        firstName: '',
        lastName: '',
        githubUsername: '',
        portfolioUrls: '',
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
    })

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

    const updateForm = (key: string, value: string | number | ExpectedContractType | ExpectedTypeWork | null) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    }

    const click = () => {

    };

    const sendForm = (event: FormEvent) => {
        event.preventDefault();
    };

    useEffect(() => {
        (async () => {
            const data = await getStudentOwnData();
            setStudentOwnData(data);
        })();
    }, []);

    console.log(studentOwnData);
    return <>
        <div className='AvailableStudents'>
            <div className="u-flex  u-flex__column">
                <h1>Aktualizacja danych studenta</h1>
                <form onSubmit={sendForm}>
                    <label>
                        <p>Imię</p>
                        <input type="text"
                               name="firstName"
                               maxLength={50}
                               className="su-input su-input--border"
                               value={firstName}
                               required
                               onChange={e => updateForm('firstName', e.target.value)}
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
                               onChange={e => updateForm('lastName', e.target.value)}
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
                               onChange={e => updateForm('tel', e.target.value)}
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
                               onChange={e => updateForm('githubUsername', e.target.value)}
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
                               onChange={e => updateForm('portfolioUrls', e.target.value)}
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
                               onChange={e => updateForm('projectUrls', e.target.value)}
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
                               onChange={e => updateForm('bio', e.target.value)}
                        />
                    </label>
                    <label htmlFor="expectedContractType">
                        <p>Oczekiwany typ kontraktu</p>
                        <select
                            name="expectedContractType"
                            id="expectedContractType"
                            className="su-input su-input--border"
                            value={expectedContractType}
                            onChange={e => updateForm('expectedContractType', e.target.value)}
                        >
                            <option value="UoP">Tylko UoP</option>
                            <option value="B2B">Możliwe B2B</option>
                            <option value="UZ/UoD">Możliwe UZ/UoD</option>
                            <option value="irrelevant" selected={true}>Brak preferencji</option>
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
                               onChange={e => updateForm('targetWorkCity', e.target.value)}
                        />
                    </label>
                    <label htmlFor="expectedTypeWork">
                        <p>Preferowane miejsce pracy</p>
                        <select
                            name="expectedTypeWork"
                            id="expectedTypeWork"
                            className="su-input su-input--border"
                            value={expectedTypeWork}
                            onChange={e => updateForm('expectedTypeWork', e.target.value)}
                        >
                            <option value="atLocation">Praca na miejscu</option>
                            <option value="changeOfLocation">Gotowość do przeprowadzki</option>
                            <option value="manual">Wyłącznie zdalnie</option>
                            <option value="irrelevant" selected={true}>Bez znaczenia</option>
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
                               onChange={e => updateForm('expectedSalary', e.target.value)}
                        />
                    </label>
                    <label htmlFor="canTakeApprenticeship">
                        <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                        <select
                            name="canTakeApprenticeship"
                            id="canTakeApprenticeship"
                            className="su-input su-input--border"
                            value={canTakeApprenticeship}
                            onChange={e => updateForm('canTakeApprenticeship', e.target.value)}
                        >
                            <option value="true">TAK</option>
                            <option value="false" selected={true}>NIE</option>
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
                               onChange={e => updateForm('monthsOfCommercialExp', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Przebieg edukacji</p>
                        <textarea
                            name="education"
                            className="su-input su-input--border su-input--textarea"
                            value={education}
                            onChange={e => updateForm('education', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Przebieg doświadczenia zawodowego</p>
                        <textarea
                            name="workExperience"
                            className="su-input su-input--border su-input--textarea"
                            value={workExperience}
                            onChange={e => updateForm('workExperience', e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Kursy i certyfikaty związane z programowaniem</p>
                        <textarea
                            name="courses"
                            className="su-input su-input--border su-input--textarea"
                            value={courses}
                            onChange={e => updateForm('courses', e.target.value)}
                        />
                    </label>
                </form>
                <button className="c-btn" onClick={click}>Aktualizuj dane</button>
            </div>
        </div>
    </>
}
