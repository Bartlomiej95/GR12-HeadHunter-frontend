import styled from "styled-components";

export const Btn = styled.button`
  padding: .6rem 1rem;
  border: none;
  background-color: ${({theme}) => theme.color.accentColor};
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.l};
  line-height: 2.7rem;
font-family: ${({theme}) => theme.font.catamaran}`;
