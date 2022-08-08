import styled from "styled-components";
import {DownArrow, UpArrow} from "@styled-icons/boxicons-solid";

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

export const FilterRatings = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;`;

export const FilterSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .3rem;
  font-size: ${({theme}) => theme.size.xs};
  line-height: 2.3rem;`

export const Title = styled.p`
`

export const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  column-gap: .8rem;`

export const FilterButton = styled.p`
  font-size: ${({theme}) => theme.size.xxs}x;
  line-height: 1.9rem;
  padding: .4rem 1rem;
  background-color: ${({theme}) => theme.color.inputColor};
  cursor: pointer;
  transition: ${({theme}) => theme.transition.time};

  &.active {
    background-color: ${({theme}) => theme.color.accentColor};
  }
;`

export const FilterInput = styled(FilterSelect)`
  column-gap: 1.3rem`

export const LabelInput = styled.label``;

export const FilterInputSalary = styled.input`
  width: 9.5rem;
  padding: .5rem 1rem;
  background-color: ${({theme}) => theme.color.inputColor};
  border: none;
  font-size: ${({theme}) => theme.size.xxs};
  color: ${({theme}) => theme.color.textColor};`

export const FilterRadio = styled(FilterSelect)`
  column-gap: 1rem`

export const InputRadio = styled.input`
  appearance: none;

  &:checked + label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.color.accentColor};
    box-shadow: inset 0 0 0 4px ${({theme}) => theme.color.accentColor};
  }`

export const LabelInputRadio = styled(LabelInput)`
  position: relative;
  display: inline-block;
  font-size: ${({theme}) => theme.size.xs};
  line-height: 2.3rem;
  padding-left: 2.5rem;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.color.inputColor};
    transition: ${({theme}) => theme.transition.time};
  }`

export const FilterMonth = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
  width: 9.5rem;
  padding: .5rem 1rem;
  background-color: ${({theme}) => theme.color.inputColor};`

export const MonthText = styled.p`
  font-size: ${({theme}) => theme.size.xxs};
  color: ${({theme}) => theme.color.placeholderColor};`

export const MonthArrows = styled.div`
  display: flex;
  flex-direction: column;`

export const ArrowToDown = styled(DownArrow)`
  color: ${({theme}) => theme.color.placeholderColor};
  transition: .4s;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.color.textColor};
  }`

export const ArrowToUp = styled(UpArrow)`
  color: ${({theme}) => theme.color.placeholderColor};
  transition: .4s;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.color.textColor};
`
export const FilterButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 3rem;`

export const Cancel = styled.p`cursor: pointer`
export const Show = styled.div``