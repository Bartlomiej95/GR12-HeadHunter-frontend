import styled from "styled-components";
import {FilterAlt} from "@styled-icons/boxicons-solid";

export const ButtonFilter = styled.button`
  display: flex;
  align-items: center;
  column-gap: .6rem;
  padding: 1.2rem 1rem;
  border: none;
  color: ${({theme}) => theme.color.textColor};
  background-color: ${({theme}) => theme.color.studentBg};
  cursor: pointer;
  font-size: ${({theme}) => theme.size.l};
  transition: ${({theme}) => theme.transition.time};
  &:hover {
    box-shadow: inset 0 0 0 2em ${({theme}) => theme.color.accentColor}
  }
`

export const FilterIcon = styled(FilterAlt)`
  color: ${({theme}) => theme.color.filterIcon}`