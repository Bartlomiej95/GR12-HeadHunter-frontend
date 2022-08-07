import styled from "styled-components";

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 8rem;
  border-top-left-radius: 1.2rem;
  position: absolute;
  top: 10rem;
  right: 0;
  transform: translateX(30rem);
  background-color: ${({theme}) => theme.color.accentColor};
  transition: ${({theme}) => theme.transition.time};

  &.active {
    transform: translateX(0);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .2rem;
    background-color: white;
  }`;

export const TextInfo = styled.p`
  color: white;`