import styled, {keyframes} from "styled-components";

const rotation = keyframes`


  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`
const rotationBack = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
`

export const LoaderStyles = styled.span`
  width: 3.9rem;
  height: 3.9rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid;
  border-color: #FFF #FFF transparent transparent;
  box-sizing: border - box;
  animation: ${rotation} 1s linear infinite;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid;
    border-color: transparent transparent #FF3D00 #FF3D00;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    animation: ${rotationBack} 0.5s linear infinite;
    transform-origin: center center;
  }

  &::before {
    width: 2.3rem;
    height: 2.3rem;
    border-color: #FFF #FFF transparent transparent;
    animation: ${rotation} 1.5s linear infinite;
  }
`

