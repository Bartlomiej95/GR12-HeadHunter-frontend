import React from "react";
import {Hr, ToolsWrap } from "./Tools.styles";
import {Search} from "./Search/Search.component";
import {FilterButton} from "./FilterButton/FilterButton.component";

export const Tools = () => (
    <>
        <ToolsWrap>
            <Search/>
            <FilterButton/>
        </ToolsWrap>
        <Hr/>
    </>
)