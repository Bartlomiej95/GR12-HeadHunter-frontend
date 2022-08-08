import React, {useContext, useState} from "react";
import * as buffer from "buffer";
import {Link} from "react-router-dom";
import {LOGInHost, StudentRegisterHost} from "../../../utils/dictionaries";
import { useNavigate } from "react-router-dom";
import {ErrorMessage} from "../ErrorMessage/Message";
import {flash} from "react-animations";

interface useData
    {
        email?: string;
        password?: string;
        tel: string;
        firstName: string;
        lastName: string;
        githubUsername: string;
        portfolioUrls: string[];
        projectUrls: string[];
        bio: string;
        expectedTypeWork:  string;
        expectedContractType: string| null;
        monthsOfCommercialExp: number;
        education: string | null;
        workExperience: string;
        courses: string;
}

type Props = {
    password:string;
    email:string;
}
let addArrayPortfolioUrl:string[] = [];
let addArrayProjectUrl:string[] = [];
let stepNumber:number = 1;

export const RegisterStudents = ({password, email}:Props)=>{
    const [step, setStep] = useState(1);
    const navigation = useNavigate();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [arrayPortfolioUrl, setArrayPortfolioUrl] = useState<string[]>([]);
    const [arrayProjectUrl, setArrayProjectUrl] = useState<string[]>([]);


    const [textPortfolioUrl, setTextPortfolioUrl] = useState(' ');
    const [textProjectUrl,setTextProjectUrl ] = useState('');
    const [data, setData] = useState(
        {
            email: email,
            password: password,
            tel: "0",
            firstName: " ",
            lastName: " ",
            githubUsername: " ",
            portfolioUrls: [' '],
            projectUrls: [' '],
            bio: " ",
            expectedTypeWork: "irrelevant",
            targetWorkCity: "",
            expectedContractType: "irrelevant",
            expectedSalary:  '',
            monthsOfCommercialExp: 0,
            canTakeApprenticeship: false,
            education: "",
            workExperience: ' ',
            courses: " "
        })


    const switchWrapper = ()=>{
        const addPortfolioUr = (e:React.FormEvent)=> {
            e.preventDefault()
            setArrayPortfolioUrl(arrayPortfolioUrl=>[...arrayPortfolioUrl, textPortfolioUrl])
            addArrayPortfolioUrl.push(textPortfolioUrl);
            setData({...data, portfolioUrls: addArrayPortfolioUrl})
            setTextPortfolioUrl('')
        }
        function addProjectUrl(e:React.FormEvent) {
            e.preventDefault();
            addArrayProjectUrl.push(textProjectUrl);
            setArrayProjectUrl(arrayProjectUrl =>[...arrayProjectUrl, textProjectUrl]);
            setData({...data, projectUrls: addArrayProjectUrl})
            setTextProjectUrl('')

        }

        switch (step){
            case 1: return (<>
                <input className="c-input"
                       placeholder="Telefon"
                       type="tel"
                       onChange={e => setData({...data,tel: e.target.value  })}
                /><input className="c-input"
                         placeholder="Imię"
                         type="text"
                         onChange={e => setData({...data,firstName: e.target.value})}
            /><input className="c-input"
                     placeholder="Nazwisko"
                     type="text"
                     onChange={e => setData({...data, lastName: e.target.value  })}
            />

            </>)
            case 2: return (<>
                <div>
                    <input className="c-input"
                           placeholder="Nazwa GitHub"
                           type="text"
                           onChange={e => setData({...data,githubUsername: e.target.value  })}
                    />
                </div>
                <div>
                    <input className="c-input c-input__array"
                       placeholder="Link do portfolio"
                       type="tel"
                       onChange={e => setTextPortfolioUrl(e.target.value)}
                    />
                    <button className="Button" onClick={addPortfolioUr}>Dodaj</button>
                </div>
                <p>Doddane do listy portfolio:</p>
                    <ul className="e-addList">{
                        arrayPortfolioUrl.map(
                            array => <li  key={array + Math.random()}>
                                <p className="e-addList__wrap">{array}</p>
                                <p className="e-addList__remove">Usuń</p>
                            </li>
                        )}
                    </ul>
                <div>
                    <input className="c-input  c-input__array"
                         placeholder="Link do projetów"
                         type="text"
                         onChange={e => setTextProjectUrl(e.target.value)}
            />
                    <button className="Button" onClick={addProjectUrl}>Dodaj</button>
                </div>
                <p>Doddano do listy projektów:</p>
                <ul className="e-addList">{
                    arrayProjectUrl.map(
                        array => <li  key={array + Math.random()}>
                            <p className="e-addList__wrap">{array}</p>
                            <p className="e-addList__remove">Usuń</p>
                        </li>
                    )}
                </ul>
                <textarea className="c-input c-input__bio"
                       placeholder="Bio"
                       onChange={e => setData({...data,bio: e.target.value  })}
                />
            </>)
            case 3: return (<>

                <p>Oczekiwany typ pracy:</p>
                <select className="c-input" defaultValue="irrelevant" onChange={e=> setData({
                        ...data,
                         expectedTypeWork: e.target.value
                    })}>
                    <option value="atLocation" >Na miejscu</option>
                    <option value="changeoflocation">Możliwość zmiany miejsca zamieszkania</option>
                    <option value="manual">Zdalnie</option>
                    <option value="irrelevant">Bez znaczenia</option>
                </select>
                <input className="c-input"
                       placeholder="Miasto pracy"
                       type="tel"
                       onChange={e => setData({...data, targetWorkCity: e.target.value  })}
                />
                <p>Rodzaj umowy:</p>
                <select className="c-input" defaultValue="irrelevant"
                        onChange={e=> setData({
                            ...data,
                            expectedContractType: e.target.value
                        })}
                >
                    <option value="UoP">Umowa o prace</option>
                    <option value="B2B">B2B</option>
                    <option value="UZ/UoD">Umowa o prace/ Umowa o dzieło</option>
                    <option  value="irrelevant">Bez znaczenia</option>
                </select>

                <input className="c-input"
                          placeholder="Oczekiwana pensja"
                          onChange={e => setData({...data, expectedSalary: (e.target.value) })}
                />
                <p>Możliwośc odbycia stażu</p>
                <select className="c-input" defaultValue="false"
                        onChange={e=> setData({
                            ...data,
                            canTakeApprenticeship: Boolean(e.target.value)
                        })}
                >
                    <option value="true">Tak</option>
                    <option  value="false">Nie</option>
                </select>

                <input className="c-input"
                          placeholder="Czas pracy komercyjnej"
                            type="number"
                          onChange={e => setData({...data, monthsOfCommercialExp: Number(e.target.value)  })}
                />
                <textarea className="c-input c-input__bio"
                          placeholder="Edukacja"
                          onChange={e => setData({...data,education: e.target.value  })}
                />
                <textarea className="c-input c-input__bio"
                          placeholder="Doświadczenie zawodowe"
                          onChange={e => setData({...data,workExperience: e.target.value  })}
                />
                <textarea className="c-input c-input__maxWidth"
                          placeholder="Kursy"
                          onChange={e => setData({...data,courses: e.target.value  })}
                />
            </>)
        }
    }
    const next = () =>{
        if(stepNumber === 1 ){
            const re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
            if(!(data.tel.match(re))){
                setError(true);
                setErrorMessage('Podany numer telefonu jest nieprawidłowy.');
                setStep(1);
                return
            }
            else {
                stepNumber = 2
            }
        }
        if(step === 2){
            setError(false)
            const reHub = (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){1,38}$/i)
            if(!(data.githubUsername.match(reHub))){
                setError(true);
                setErrorMessage('Podana nazwa GitHub jest nieprawidłowa.');
                stepNumber = 2;
                return
            }

        }

        stepNumber++;
        console.log(stepNumber);

        setStep(step+1)
        if(step === 3){
            send()
        }

    }
    const prev = () =>{
        setStep(step-1)
        stepNumber = stepNumber -1
        if(stepNumber <= 0){
            stepNumber = 1
        }
        console.log('step: '+ stepNumber)
        if (step === 1){
            setStep(1)
        }

    }
    const send = async ()=>{
        console.log(data)
        const {email,password,tel,
            firstName, lastName,
            githubUsername,portfolioUrls,
            projectUrls, bio,
            expectedTypeWork , expectedContractType,
            monthsOfCommercialExp, education,
            workExperience, courses } = data;
        await fetch(StudentRegisterHost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
                tel,
                firstName,
                lastName,
                githubUsername,
                portfolioUrls,
                projectUrls,
                bio,
                expectedTypeWork,
                expectedContractType,
                monthsOfCommercialExp,
                education,
                workExperience,
                courses
            })
        })  .then(response => response.json())
            .then(data =>{
                if(data.actionStatus === true){
                    navigation('/')
                }
                else {
                    stepNumber = 1;
                    setStep(1);
                    setError(true);
                    setErrorMessage(data.message)
                }
                console.log(data)
            })
    }


    return(

     <div className="register__wrapper">
         <h1>Uzupełni dane swojego konta w 3 krokach </h1>
         <h1>[{step}/3]</h1>

         <div>
             <form className="register__form">
             {switchWrapper()}
             </form>

             <div className="register__wrapper-button">
                 <button className="Button" onClick={prev}>Wstecz</button>
                 <button className="Button" onClick={next}>Dalej</button>
             </div>
             <Link to="/">Uzupełnie później</Link>
         </div>
         {error ? <ErrorMessage
             error={error}
             setError={setError}
             message={errorMessage}
         />: null}

     </div>
    )
}