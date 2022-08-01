import React, {useContext, useEffect} from 'react';
import './App.css';
import {Routing} from "./components/Routing/Routing";
import megaK from './assets/img/megak.png';
import {Avatar} from "./components/Avatar/Avatar";
import {DownArrow} from "@styled-icons/boxicons-solid";
import {Context} from "./provider/Provider";
import {Menu} from "./components/Menu/Menu";
import {CheckLogin, RecruiterAddPost, RegisterActive} from "./utils/dictionaries";
import {Header} from "./components/Header/Header";



function App() {
    const {login, setLogin, name, setName, lastName, setLastName, setRole} = useContext(Context)

    useEffect(()=> {
        const logIn = async ()=>{
            await fetch(CheckLogin, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                credentials: "include",
            })
                .then(response => response.json())
                .then(data =>{
                        if(data.logedIn){
                            setLogin(true)
                            setName(data.message.firstName)
                            setLastName(data.message.lasyName)
                            setRole(data.message.role)
                        }
                    })
        }
        logIn()
    })

    return (
        <div className="App">
            {login ?
                <>
                    <Header/>
                    <div>
                        <Menu/>
                    </div>
                </>
                : null}
            <Routing login={login}/>
        </div>


    );
}

export default App;
