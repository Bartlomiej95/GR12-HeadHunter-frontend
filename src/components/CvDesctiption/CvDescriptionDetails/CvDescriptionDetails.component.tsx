import React from "react";
import { Title } from "../CvDegreeDetails/CvDegreeDetails.styles";
import {Content, DescriptionDetails } from "./CvDescriptionDetails.styles";
import {ICvDescriptionDetailsProps} from "./CvDescriptionDetails.types";

export const CvDescriptionDetails: React.FC<ICvDescriptionDetailsProps> = ({title, content}) => {
    return (
        <DescriptionDetails>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </DescriptionDetails>
    )
}