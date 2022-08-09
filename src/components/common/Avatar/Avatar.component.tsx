import React from "react";
import { AvatarBlock, AvatarImage } from "./Avatar.styles";
import {IAvatarProps} from "./Avatar.types";

export const Avatar: React.FC<IAvatarProps> = ({ghUsername}) => (
    <AvatarBlock>
        <AvatarImage src={ghUsername} alt="Avatar"/>
    </AvatarBlock>
);