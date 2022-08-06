import styled from "styled-components";

export const StudentDescriptionWrap = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.color.bgDescription};
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  height: 11.5rem;
  transform: translateY(0)`;
export const StudentDescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.8rem;
  flex-grow: 1;
  border-right: .1rem solid ${({theme}) => theme.color.inputColor};
  padding: 1.7rem 1rem;

  &:nth-child(1) {
    width: 15rem;
  }`;
export const DescriptionTitle = styled.p`
  font-size: ${({theme}) => theme.size.xxs};
  letter-spacing: -.02rem;
  color: ${({theme}) => theme.color.textColorDark};`;

export const DescriptionContent = styled.p`
  font-size: ${({theme}) => theme.size.s};
  letter-spacing: -.02rem;
  color: ${({theme}) => theme.color.textColorDark};
`;