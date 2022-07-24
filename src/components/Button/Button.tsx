import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string
}

export const Button = (props: ButtonProps) => (
    <button className="Button">{props.text}</button>
)
