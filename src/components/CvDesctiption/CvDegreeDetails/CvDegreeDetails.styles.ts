import styled from "styled-components";
import {Star} from "@styled-icons/boxicons-solid";

export const DegreeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 2.4rem;
  width: 16.35rem;
  margin-right: 10.05rem;`

export const Title = styled.p`
  font-size: ${({theme}) => theme.size.xs};
  color: ${({theme}) => theme.color.textColorDark};
`

export const DegreeStars = styled.p`
  display: flex;
  align-items: center;
`
export const Point = styled.span`
  font-size: ${({theme}) => theme.size.xl};
  letter-spacing: 0.18rem;
  line-height: 3rem;
  color: ${({theme}) => theme.color.textColor};`

export const MaxPoint = styled(Point)`
  color: ${({theme}) => theme.color.ratingGray};`

export const StarRed = styled(Star)`
  color: ${({theme}) => theme.color.accentColor}; `
export const StarGray = styled(Star)`
  color: ${({theme}) => theme.color.filterIcon}; `