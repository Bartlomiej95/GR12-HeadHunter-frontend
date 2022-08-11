import React, {useState} from 'react';
import {AnimeLoad, ArrowDown, MenuText, User} from './HeaderUser.styles';
import {Avatar} from "../../common/Avatar/Avatar.component";
import {HeaderUserName} from "./HeaderUserName/HeaderUserName.component";
import {IHeaderUserProps} from "./HeaderUser.types";
import {pl} from "../../../lang/pl";
import {LogOut} from "./HeaderUser.util";
import {NavLink, useNavigate} from "react-router-dom";
import {LabelInfo} from "../../common/LabelInfo/LabelInfo.component";
import {LoaderCSS} from "../../common/Loader/Loader.component";

export const HeaderUser: React.FC<IHeaderUserProps> = ({name, surname, setLogin}) => {

    const [labelActive, setLabelActive] = useState(false);
    const [message, setMessage] = useState('')
    const [activeDrop, setActiveDrop] = useState(false);
    const [load, setLoad] = useState(false)
    let navigate = useNavigate()

    return (
        <div style={{position: "relative"}}>
            <User onMouseEnter={() => setActiveDrop(true)} onMouseLeave={() => setActiveDrop(false)}>
                <Avatar ghUsername={""}/>
                <HeaderUserName name={name} surname={surname}/>
                <ArrowDown size={10}/>
                <MenuText className={activeDrop ? 'active' : ''}
                          onClick={() => navigate('/change-password')}>{pl.changePassword}</MenuText>
                <MenuText className={activeDrop ? 'active' : ''}
                          onClick={() => navigate('/change-email')}>{pl.changeEmail}</MenuText>
                <MenuText className={activeDrop ? 'active' : ''} onClick={() => {
                    LogOut(setLogin, setActiveDrop, setMessage)
                    setLoad(true)
                    setTimeout(() => {
                        setLabelActive(false)
                        setLoad(false)
                        // navigate('/')
                    }, 2300)

                    setTimeout(() => {
                        setLabelActive(true)
                    }, 1000)
                }}>{pl.logout}</MenuText>
                <LabelInfo labelActive={labelActive} message={message}/>
            </User>
            <AnimeLoad>{load ? <LoaderCSS/> : null}</AnimeLoad>
        </div>
    )
}