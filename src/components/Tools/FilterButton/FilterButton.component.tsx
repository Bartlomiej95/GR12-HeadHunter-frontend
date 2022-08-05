import React from "react";
import {pl} from "../../../lang/pl";
import { ButtonFilter, FilterIcon } from "./FilterButton.styles";

export const FilterButton = () => (
    <ButtonFilter><FilterIcon size={20}/>{pl.toolsButtonFilter}</ButtonFilter>
)