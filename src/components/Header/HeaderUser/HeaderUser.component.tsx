import React from 'react';
import {ArrowDown, User } from './HeaderUser.styles';
import {Avatar} from "../../common/Avatar/Avatar.component";
import {HeaderUserName} from "./HeaderUserName/HeaderUserName.component";
import {IHeaderUserProps} from "./HeaderUser.types";

export const HeaderUser: React.FC<IHeaderUserProps> = ({name, surname}) => (
    <User>
        <Avatar ghUsername={""}/>
        <HeaderUserName name={name} surname={surname}/>
        <ArrowDown size={10}/>
    </User>
)