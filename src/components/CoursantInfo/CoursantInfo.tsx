import React from "react";
import './CoursantInfo.css';

import {ContactInfo} from "./ContactInfo";
import {CvDetails} from "../CvDetails/CvDetails";

export const CoursantInfo = () => {
    return <div className="CoursantInfo">
        <ContactInfo/>
        <CvDetails/>
    </div>
}
