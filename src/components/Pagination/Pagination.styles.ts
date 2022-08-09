import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  max-width: 143rem;
  margin: 0 auto;
  justify-content: flex-end;
  column-gap: 2rem;
  padding: 4rem 0;`

export const PaginationSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.l};`

export const PaginationPrevNext = styled(PaginationSelectWrapper)``;

export const PaginationSelect = styled.div`
  padding: .2rem;
  font-size: ${({theme}) => theme.size.xxs};`

export const Select = styled.p`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3.1rem;
  height: 2.4rem;
  background-color: ${({theme}) => theme.color.textColor};
  border: 1px solid ${({theme}) => theme.color.textColorDark};
  color: ${({theme}) => theme.color.paginationColor};
  font-size: ${({theme}) => theme.size.xss};
  margin: 0;
  cursor: default;
  transition: ${({theme}) => theme.transition.time};
  overflow: hidden;`

export const Options = styled.div`
  flex-direction: column;
  position: absolute;
  height: 0;
  transition: ${({theme}) => theme.transition.time};
  overflow: hidden;

  &.active {
    height: 4.8rem;
    overflow: hidden;
  }`

export const Option = styled(Select)``

export const PaginationBtn = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  color: ${({theme}) => theme.color.paginationColor};
  background-color: ${({theme}) => theme.color.searchColor};
  cursor: pointer;

  &.active {
    background-color: ${({theme}) => theme.color.textColorDark};;
  }`