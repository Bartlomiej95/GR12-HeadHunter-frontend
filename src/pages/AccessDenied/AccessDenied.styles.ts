import styled from "styled-components";

export const WrapperAccessDenied = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 7rem);
  background-color: ${({theme}) => theme.color.groundColor};`

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;`