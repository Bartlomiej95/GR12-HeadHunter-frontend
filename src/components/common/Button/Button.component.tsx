import React from 'react';
import {IButtonProps} from "./Button.types";
import {Btn} from './Button.styles'


export const Button = ({text, click, setState}: IButtonProps) => (
    <Btn onClick={() => click(setState)}>{text}</Btn>
)