import React, {ReactNode} from 'react';
import './DegreeDetail.css';
import {Star} from "@styled-icons/boxicons-solid";

interface Props {
    title: string;
    degree: number;
    children?: ReactNode;
}

export const DegreeDetail = (props: Props) => {
    return <>
        <div className="DegreeDetails">
            <p className="Title">{props.title}</p>
            <p className="Degree">
                <span className="Points">{props.degree}&nbsp;</span> <span className="MaxPoints">/5</span>
                <Star size={19} className="Star"></Star>
            </p>
        </div>
    </>
}
