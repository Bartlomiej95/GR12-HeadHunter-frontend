import React, {useState} from 'react';
import {ArrowDown, MenuText, User } from './HeaderUser.styles';
import {Avatar} from "../../common/Avatar/Avatar.component";
import {HeaderUserName} from "./HeaderUserName/HeaderUserName.component";
import {IHeaderUserProps} from "./HeaderUser.types";
import {pl} from "../../../lang/pl";

export const HeaderUser: React.FC<IHeaderUserProps> = ({name, surname}) => {

    const [activeDrop, setActiveDrop] = useState(false);

    return (
        <User onClick={() => setActiveDrop(!activeDrop)}>
            <Avatar ghUsername={""}/>
            <HeaderUserName name={name} surname={surname}/>
            <ArrowDown size={10}/>
            <MenuText className={activeDrop ? 'active' : ''}>{pl.changePassword}</MenuText>
            <MenuText className={activeDrop ? 'active' : ''}>{pl.changeEmail}</MenuText>
            <MenuText className={activeDrop ? 'active' : ''}>{pl.logout}</MenuText>
        </User>
    )
}