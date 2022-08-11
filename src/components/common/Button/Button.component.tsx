import React from 'react';
import {IButtonProps} from "./Button.types";
import {Btn, BtnCV} from './Button.styles'

export const Button = ({text, handleClick, id, big}: IButtonProps) => {

    return (
        <>
            {
                big === false ?
                    <Btn onClick={(e) => {
                        e.preventDefault()
                        handleClick(id)
                    }}>{text}</Btn> :
                    <BtnCV onClick={(e) => handleClick(id)}>{text}</BtnCV>
            }
        </>
    )
}