import React from "react";
import {LabelWrap, TextInfo} from "./LabelInfo.styles";
import {ILabelInfoProps} from "./LabelInfo.types";

export const LabelInfo: React.FC<ILabelInfoProps> = ({labelActive}) => {

    return (
        <LabelWrap className={labelActive ? 'active' : ''}>
            <TextInfo>blablabla</TextInfo>
        </LabelWrap>
    )
}