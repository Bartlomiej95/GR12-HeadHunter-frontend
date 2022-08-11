import styled from "styled-components";
import {DownArrow} from "@styled-icons/boxicons-solid";
import {NavLink} from "react-router-dom";

export const User = styled.div`
  position: relative;
  width: 26rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.2rem;
  cursor: pointer;
  z-index: 99`;

export const ArrowDown = styled(DownArrow)`
  color: ${({theme}) => theme.color.ratingGray};
  margin-left: 1.8rem;`

export const MenuText = styled.p`
  position: absolute;
  left: 300%;
  display: flex;
  justify-content: flex-end;
  padding: .6rem 1.6rem .6rem 0;
  transform: translateX(-50%);
  box-shadow: inset 10px 0 5px 0 rgba(0, 0, 0, .7);
  border-radius: 8px;
  font-size: ${({theme}) => theme.size.s};
  width: 70%;
  color: ${({theme}) => theme.color.textColor};
  cursor: pointer;
  backdrop-filter: blur(50px);

  &:hover {
    box-shadow: inset 15px 0 5px 0 ${({theme}) => theme.color.accentColor};
  }

  &:nth-child(4) {
    top: 4.8rem;
    transition: ${({theme}) => theme.transition.time};

    &.active {
      left: 50%
    }
  }

  &:nth-child(5) {
    top: 8.5rem;
    transition: ${({theme}) => theme.transition.time};
    transition-delay: .1s;

    &.active {
      left: 50%
    }
  }

  &:nth-child(6) {
    top: 12.3rem;
    transition: ${({theme}) => theme.transition.time};
    transition-delay: .2s;

    &.active {
      left: 50%
    }
  }`

export const AnimeLoad = styled.div`
  position: absolute;
  transform: rotate(45deg);
  top: -.6rem;
  right: -1rem`