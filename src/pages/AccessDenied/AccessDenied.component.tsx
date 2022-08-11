import React from "react";
import img from '../../assets/img/acces-denied.png'
import { WrapperAccessDenied, Image } from "./AccessDenied.styles";

export const AccessDenied = () => (
    <WrapperAccessDenied>
        <Image src={img}></Image>
    </WrapperAccessDenied>
)