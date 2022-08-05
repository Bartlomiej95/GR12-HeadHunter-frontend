import React from 'react';
import {IButtonProps} from "./Button.types";
import {Btn} from './Button.styles'

export const Button = ({text}: IButtonProps) => (
    <Btn>{text}</Btn>
)