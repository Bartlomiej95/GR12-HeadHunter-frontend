import styled from "styled-components";

export const UserName = styled.p`
  color: ${({theme}) => theme.color.textColor};
  font-family: ${({theme}) => theme.font.catamaran};
  font-size: ${({theme}) => theme.size.xl};`
;