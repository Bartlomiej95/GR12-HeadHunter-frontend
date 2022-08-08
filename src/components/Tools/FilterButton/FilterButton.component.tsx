import React from "react";
import {pl} from "../../../lang/pl";
import { ButtonFilter, FilterIcon } from "./FilterButton.styles";
import {IFilterButtonProps} from "./FilterButton.types";

export const FilterButton: React.FC<IFilterButtonProps> = ({activeFilter}) => (
    <ButtonFilter onClick={() => activeFilter(true)}><FilterIcon size={20}/>{pl.toolsButtonFilter}</ButtonFilter>
)