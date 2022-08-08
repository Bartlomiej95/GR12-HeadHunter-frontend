import styled from "styled-components";
import {Star} from "@styled-icons/boxicons-solid";

export const FilterRatingWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .3rem;
  width: 100%;`;

export const FilterRatingTitle = styled.p`
  font-size: ${({theme}) => theme.size.xs};
  color: ${({theme}) => theme.color.textColor};`;

export const FilterStarsWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: .8rem;`;

export const FilterStarsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.7rem;
  column-gap: .6rem;
  padding: 0 .8rem;
  background-color: ${({theme}) => theme.color.inputColor};
  cursor: pointer;
  transition: ${({theme}) => theme.transition.time};

  &.active {
    background-color: ${({theme}) => theme.color.accentColor};
  }`

export const FilteredStarNumber = styled.p`
  font-size: ${({theme}) => theme.size.xxs};
  color: ${({theme}) => theme.color.textColor}`

export const StarIcon = styled(Star)`
  color: ${({theme}) => theme.color.accentColor};

  &.active {
    color: ${({theme}) => theme.color.textColor};
  }`