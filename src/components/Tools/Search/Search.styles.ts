import styled from "styled-components";
import img from '../../../assets/img/magnifier.svg'

export const SearchInput = styled.input`
  width: 36.5rem;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 1rem 50%;
  background-color: ${({theme}) => theme.color.studentBg};
  border: none;
  padding: .6rem 4rem;
  font-size: ${({theme}) => theme.size.l};
  color: ${({theme}) => theme.color.textColor};
  font-family: ${({theme}) => theme.font.catamaran};
  line-height: 2.7rem;

  ::placeholder{
    color: ${({theme}) => theme.color.searchColor};
  }`