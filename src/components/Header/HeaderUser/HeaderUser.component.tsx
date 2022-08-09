import React from 'react';
import {ArrowDown, User } from './HeaderUser.styles';
import {Avatar} from "../../common/Avatar/Avatar.component";
import {HeaderUserName} from "./HeaderUserName/HeaderUserName.component";

export const HeaderUser = () => (
    <User>
        <Avatar ghUsername={""}/>
        <HeaderUserName/>
        <ArrowDown size={10}/>
    </User>
)