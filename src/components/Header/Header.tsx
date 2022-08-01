import React, {useContext, useState} from "react";
import megaK from "../../assets/img/megak.png";
import {Avatar} from "../Avatar/Avatar";
import {DownArrow} from "@styled-icons/boxicons-solid";
import {Context} from "../../provider/Provider";
import {LogoutHost} from "../../utils/dictionaries";
import {Link} from "react-router-dom";

export const Header = ()=>{
    const {login, setLogin, name, setName, lastName, setLastName, setRole} = useContext(Context);
    const [openMenu, setOpenMenu] = useState(false);

    const LogOut = async () =>{
        await fetch(LogoutHost, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            credentials: "include",

        })
        setOpenMenu(false);
        setLogin(false);
    }
    const isActive = () =>{
        setOpenMenu(!openMenu)
    }

    return(
        <div>
            <header className="Header">
                <div className="container">
                    <Link to="/">
                        <div>
                            <img src={megaK} alt="Logo"/>
                        </div>
                    </Link>
                    <div className="header__menu">
                        <div className="Header__user" onClick={isActive}>
                            <Avatar/>
                            <div>
                                <p className="header-menu__name">{name} {lastName}</p>
                                <p><DownArrow color="#9E9E9E" size={10}/></p>
                            </div>
                        </div>
                        <nav className={ "header-menu__list"} style={openMenu? {}: {display: "none"}} >
                            <div className="header-menu__item"><p>Profil</p></div>
                            <div className="header-menu__item">
                                <Link to="passchange" className="link-decoration">Ustawienia</Link>
                            </div>
                            <div className="header-menu__item" onClick={LogOut}><p>Wyloguj się</p></div>
                        </nav>
                    </div>

                </div>
            </header>
        </div>
    )
}