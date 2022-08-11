import {Dispatch, SetStateAction} from "react";
import {NavigateFunction} from "react-router-dom";

export const handleChangeEmail = async (newEmail: string, password: string, setMessage: Dispatch<SetStateAction<string>>, setLabelActive: Dispatch<SetStateAction<boolean>>, setLoad: Dispatch<SetStateAction<boolean>>, navigate: NavigateFunction) => {
    return await fetch('http://localhost:3001/login/emailchange', {
        method: 'PATCH',
        body: JSON.stringify({newEmail, password}),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    }).then(res => res.json())
        .then(data => {
            setMessage(data.message)
            setLoad(true)

            if(!data.actionStatus){
                setTimeout(()=>{
                    setLabelActive(true)
                    setLoad(false)
                    setTimeout(() => {
                        setLabelActive(false)
                    }, 1300)
                },2000)
                return
            }
            setTimeout(()=>{
                setLabelActive(true)
                setLoad(false)
                setTimeout(() => {
                    setLabelActive(false)
                    navigate('/')
                }, 1300)
            },2000)


        })
}