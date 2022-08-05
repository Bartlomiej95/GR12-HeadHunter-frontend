import React from "react";
import {pl} from "../../../lang/pl";
import { SearchInput } from "./Search.styles";

export const Search = () => (
    <SearchInput type="search" placeholder={pl.toolsPlaceholderSearch} />
)