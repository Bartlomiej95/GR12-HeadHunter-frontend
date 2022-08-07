import React from "react";
import {LabelWrap, TextInfo} from "./LabelInfo.styles";
import {ILabelInfoProps} from "./LabelInfo.types";

export const LabelInfo: React.FC<ILabelInfoProps> = ({labelActive, message}) => {

    return (
        <LabelWrap className={labelActive ? 'active' : ''}>
            <TextInfo>{message}</TextInfo>
        </LabelWrap>
    )
}