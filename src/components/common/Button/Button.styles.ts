import styled from "styled-components";

export const Btn = styled.button`
  display: block;
  padding: .6rem 1rem;
  border: none;
  background-color: ${({theme}) => theme.color.accentColor};
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.l};
  line-height: 2.7rem;
  font-family: ${({theme}) => theme.font.catamaran};
  transition: ${({theme}) => theme.transition.time};
  cursor: pointer;

  :hover {
    box-shadow: 0 0.5em 0.5em -0.4em #E02735;
    transform: translateY(-0.25em);
  }
;
`;

export const BtnCV = styled(Btn)`
  width: 100%;`;


