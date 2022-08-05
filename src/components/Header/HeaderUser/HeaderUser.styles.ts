import styled from "styled-components";
import {DownArrow} from "@styled-icons/boxicons-solid";

export const User = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.2rem;`;

export const ArrowDown = styled(DownArrow)`
  color: ${({theme}) => theme.color.ratingGray};
  margin-left: 18px;`