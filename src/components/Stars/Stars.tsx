import React from "react";
import {Star} from "@styled-icons/boxicons-solid";
import './Stars.css';

interface FilterProps {
    title: string
}

export const Stars = (props: FilterProps) => {
    return (
        <div className="Stars">
            <p>{props.title}</p>
            <div className="Stars-wrap">
                <div className="Stars-item"><p>5</p> <Star size={13} color="#E02735"/></div>
                <div className="Stars-item"><p>4</p> <Star size={13} color="#E02735"/></div>
                <div className="Stars-item"><p>3</p> <Star size={13} color="#E02735"/></div>
                <div className="Stars-item"><p>2</p> <Star size={13} color="#E02735"/></div>
                <div className="Stars-item"><p>1</p> <Star size={13} color="#E02735"/></div>
            </div>
        </div>
    )
}