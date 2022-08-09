import React from 'react';
import {IButtonProps} from "./Button.types";
import {Btn, BtnCV} from './Button.styles'

export const Button = ({text, handleClick, id, big}: IButtonProps) => {

    return (
        <>
            {
                big === false ?
                    <Btn onClick={() => handleClick(id)}>{text}</Btn> :
                    <BtnCV onClick={() => handleClick(id)}>{text}</BtnCV>
            }
        </>
    )
}