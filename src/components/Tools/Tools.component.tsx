import React from "react";
import {Hr, ToolsWrap } from "./Tools.styles";
import {Search} from "./Search/Search.component";
import {FilterButton} from "./FilterButton/FilterButton.component";
import {IToolsProps} from "./Tools.types";

export const Tools: React.FC<IToolsProps> = ({activeFilter}) => (
    <>
        <ToolsWrap>
            <Search/>
            <FilterButton activeFilter={activeFilter}/>
        </ToolsWrap>
        <Hr/>
    </>
)