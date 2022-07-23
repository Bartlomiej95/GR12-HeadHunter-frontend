import React, {ReactNode} from 'react';
import './CvLabelWithLinks.css';
import {ProjectOneLink} from "../ProjectOneLink/ProjectOneLink";

interface Props {
    projectUrlList: string[] | null;
    title?: string;
    children?: ReactNode;
}

export const CvLabelWithLinks = (props: Props) => {
    if (props.projectUrlList === null || props.projectUrlList.length === 0) {
        return <>
            <div className="CvLabelWithLinks">
                <p className="LabelTitle">{props.title}</p>
                <p>Osoba nie posiada strony www z portfolio.</p>
            </div>
        </>

    } else {
        return <>
            <div className="CvLabelWithLinks">
                <p className="LabelTitle">{props.title}</p>
                {
                    props.projectUrlList.map((element, index) => {
                        return <ProjectOneLink link={element} key={index}/>
                    })
                }
                <div className="Details">{props.children}</div>
            </div>
        </>
    }
}
