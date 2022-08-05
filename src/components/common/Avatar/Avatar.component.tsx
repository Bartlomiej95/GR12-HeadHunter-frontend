import React from "react";
import { AvatarBlock, AvatarImage } from "./Avatar.styles";
import img from '../../../assets/img/megak.png'

export const Avatar = () => (
    <AvatarBlock>
        <AvatarImage src={img} alt="Avatar"/>
    </AvatarBlock>
);