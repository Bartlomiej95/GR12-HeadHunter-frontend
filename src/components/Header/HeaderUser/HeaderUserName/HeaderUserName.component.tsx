import React from "react";
import { UserName } from "./HeaderUserName.styles";
import {IHeaderUserNameProps} from "./HeaderUserName.types";

export const HeaderUserName: React.FC<IHeaderUserNameProps> = ({name, surname}) => (
    <UserName>{`${name} ${surname}`}</UserName>
)