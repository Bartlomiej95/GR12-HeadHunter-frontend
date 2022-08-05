import React from 'react';
import {IButtonProps} from "./Button.types";
import {Btn} from './Button.styles'


export const Button = ({text, click, mail, pass, setLogin, fetchLogin}: IButtonProps) => (
    <Btn onClick={(e) => {
        e.preventDefault()
        click(mail as string, pass as string, setLogin as any, fetchLogin as any)
    }}>{text}</Btn>
)