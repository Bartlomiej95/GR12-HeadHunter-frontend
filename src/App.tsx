import React, {useContext, useEffect} from 'react';
import './App.css';
import {Routing} from "./components/Routing/Routing";
import megaK from './assets/img/megak.png';
import {Avatar} from "./components/Avatar/Avatar";
import {DownArrow} from "@styled-icons/boxicons-solid";
import {Context} from "./provider/Provider";
import {Menu} from "./components/Menu/Menu";
import {CheckLogin, RecruiterAddPost, RegisterActive} from "./utils/dictionaries";



function App() {
    const {login, setLogin, name, setName, lastName, setLastName, setRole} = useContext(Context)
    //const {login , setLogin} = useContext(Context)
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
                    <header className="Header">
                        <div className="container">
                            <div>
                                <img src={megaK} alt="Logo"/>
                            </div>
                            <div className="Header__user">
                                <Avatar/>
                                <div>
                                    <p>{name} {lastName}</p>
                                    <p><DownArrow color="#9E9E9E" size={10}/></p>
                                </div>
                            </div>
                        </div>
                    </header>
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
