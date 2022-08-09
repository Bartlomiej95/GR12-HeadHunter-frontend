import styled from "styled-components";

export const DescriptionDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-right: 1px solid ${({theme}) => theme.color.inputColor};
  padding: 0 1.75rem;
  row-gap: 1.6rem;

  &:nth-child(1) {
    padding: 0;
  }
;

  &:nth-child(5) {
    min-width:21rem;
  };
  &:last-child {
    border-right: none;
  }`;

export const Content = styled.p`
  min-width: 16rem;
  font-size: ${({theme}) => theme.size.l};
  color: ${({theme}) => theme.color.textColor};
  line-height: 2.7rem;
`