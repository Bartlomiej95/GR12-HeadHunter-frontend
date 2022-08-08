import styled from "styled-components";

export const FilterBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.color.bgFilter};`;

export const FilterWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 52rem;
  padding: 2.1rem 2rem;
  background-color: ${({theme}) => theme.color.filterBg};
  color: ${({theme}) => theme.color.textColor};`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;`;

export const FilterHeaderText = styled.h4`
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.xxl};
  line-height: 3.6rem;`;

export const FilterClearAll = styled.button`
  padding: .4rem 1rem;
  background-color: ${({theme}) => theme.color.clearFilter};
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.xs};
  line-height: 2.3rem;
  border: none;`;

export const FilterRatings = styled.div `
  display: flex;
  flex-direction: column;
  row-gap: 2rem;`;