import React from 'react';
import {IButtonProps} from "./Button.types";
import {Btn} from './Button.styles'

export const Button = ({text, handleClick, id}: IButtonProps) => (
    <Btn onClick={() => handleClick(id)}>{text}</Btn>
)