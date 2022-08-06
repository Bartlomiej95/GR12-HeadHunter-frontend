import React, {useContext, useState} from "react";

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


export const RegisterStudents = ({password, email}:Props)=>{
    const [step, setStep] = useState(1);

    const [data, setData] = useState(
        {
            email: email,
            password: password,
            tel: "0",
            firstName: " ",
            lastName: " ",
            githubUsername: " ",
            portfolioUrls: ' ',
            projectUrls: ' ',
            bio: " ",
            expectedTypeWork: " ",
            targetWorkCity: "",
            expectedContractType: " ",
            expectedSalary:  '',
            monthsOfCommercialExp: 0,
            canTakeApprenticeship: "",
            education: "",
            workExperience: ' ',
            courses: " "
        })

    const switchWrapper = ()=>{
        switch (step){
            case 1: return (<form className="register__form">
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

            </form>)
            case 2: return (<form className="register__form">
                <input className="c-input"
                       placeholder="Nazwa GitHub"
                       type="text"
                       onChange={e => setData({...data,githubUsername: e.target.value  })}
                />
                <input className="c-input"
                       placeholder="Link do portfolio"
                       type="tel"
                       onChange={e => setData({...data,portfolioUrls: e.target.value  })}
                /><input className="c-input"
                         placeholder="Link do projetów"
                         type="text"
                         onChange={e => setData({...data,projectUrls: e.target.value})}
            />
                <textarea className="c-input"
                       placeholder="Bio"
                       onChange={e => setData({...data,bio: e.target.value  })}
                />
            </form>)
            case 3: return (<form className="register__form">
                <input className="c-input"
                       placeholder="Oczekiwany typ pracy"
                       type="text"
                       onChange={e => setData({...data,expectedTypeWork: e.target.value  })}
                />
                <input className="c-input"
                       placeholder="Miasto pracy"
                       type="tel"
                       onChange={e => setData({...data, targetWorkCity: e.target.value  })}
                /><input className="c-input"
                         placeholder="Rodzaj umowy"
                         type="text"
                         onChange={e => setData({...data,expectedContractType: e.target.value})}
            />
                <input className="c-input"
                          placeholder="Oczekiwana pensja"
                          onChange={e => setData({...data, expectedSalary: e.target.value })}
                />
                <input className="c-input"
                          placeholder="Możliwość odbycia praktyki"
                          onChange={e => setData({...data, canTakeApprenticeship: e.target.value  })}
                />
                <input className="c-input"
                          placeholder="Czas pracy komercyjnej"
                            type="number"
                          onChange={e => setData({...data, monthsOfCommercialExp: Number(e.target.value)  })}
                />
                <input className="c-input"
                          placeholder="Edukacja"
                          onChange={e => setData({...data,education: e.target.value  })}
                />
                <input className="c-input"
                          placeholder="Doświadczenie zawodowe"
                          onChange={e => setData({...data,workExperience: e.target.value  })}
                />
                <input className="c-input"
                          placeholder="Kursy"
                          onChange={e => setData({...data,courses: e.target.value  })}
                />
            </form>)
        }
    }
    const next = () =>{
        setStep(step+1)
        if(step === 3){
            send()
        }

    }
    const prev = () =>{
        setStep(step-1)
        if (step === 1){
            setStep(1)
        }
    }
    const send = ()=>{
        console.log(data)
    }


    return(

     <div className="register__wrapper">
         <h1>Uzupełni dane swojego konta w 3 krokach </h1>
         <h1>[{step}/3]</h1>

         <div>
             {switchWrapper()}

             <div className="register__wrapper-button">
                 <button className="Button" onClick={prev}>Wstecz</button>
                 <button className="Button" onClick={next}>Dalej</button>
             </div>
             <p>Uzupełnie później</p>
         </div>


     </div>
    )
}