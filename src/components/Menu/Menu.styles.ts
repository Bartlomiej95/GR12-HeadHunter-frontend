import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const MenuWrap = styled.div`
  display: flex;
  max-width: 143rem;
  height: 7.2rem;
  margin: 2.6rem auto .3rem;
  background-color: ${({theme}) => theme.color.inputColor};
  font-size: ${({theme}) => theme.size.xl};`

export const NavigateLink = styled(NavLink)`
  position: relative;
  color: ${({theme}) => theme.color.textColorDark};
  text-decoration: none;
  overflow: hidden;
  padding: 23px 34px 19px;
  &.active {
    color: ${({theme}) => theme.color.textColor};
  }
`;

export const MenuUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .2rem;
  background-color: ${({theme}) => theme.color.accentColor};`;