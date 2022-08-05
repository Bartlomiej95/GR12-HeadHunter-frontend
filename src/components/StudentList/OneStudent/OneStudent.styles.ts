import styled from "styled-components";
import {ChevronDown} from "@styled-icons/boxicons-solid";

export const StudentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.color.inputColor};
  cursor: pointer;
  padding: 1.2rem 1.8rem;
  max-height: 7rem;`;

export const StudentName = styled.div`
  width: 100%;
  color: ${({theme}) => theme.color.textColor};`

export const StudentNameContent = styled.p`
  font-size: ${({theme}) => theme.size.xl};
  line-height: 3rem`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  width: 25%;`;

export const DownChevron = styled(ChevronDown)`
  color: ${({theme}) => theme.color.filterIcon};`;