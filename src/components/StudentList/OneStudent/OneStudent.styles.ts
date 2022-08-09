import styled from "styled-components";
import {ChevronDown} from "@styled-icons/boxicons-solid";

export const StudentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.color.inputColor};
  cursor: pointer;
  padding: 1.2rem 1.8rem;
  max-height: 7rem;`;

export const StudentName = styled.div`
  width: 100%;
  color: ${({theme}) => theme.color.textColor};
  padding-left: 1.75rem;
`

export const StudentNameContent = styled.p`
  font-size: ${({theme}) => theme.size.xl};
  line-height: 3rem`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: 1.75rem`;

export const DownChevron = styled(ChevronDown)`
  color: ${({theme}) => theme.color.filterIcon};`;

export const StudentReservation = styled.div`
  width: 10.1rem;
  margin-right: 5.3rem;

  p {
    font-size: ${({theme}) => theme.color.textColorDark};
    font-size: ${({theme}) => theme.size.xs};
    line-height: 1.8rem;

    &:nth-child(2) {
      font-size: ${({theme}) => theme.color.textColor};
      font-size: ${({theme}) => theme.size.l};
      line-height: 2.7rem;
      letter-spacing: 1.6px;
    }
  }`;

export const StudentHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;`