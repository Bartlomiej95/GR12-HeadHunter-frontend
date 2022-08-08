import React, {useState} from "react";
import {
    ArrowToDown,
    ArrowToUp,
    Cancel,
    FilterBackground,
    FilterButton,
    FilterButtonsWrap,
    FilterClearAll,
    FilterHeader,
    FilterHeaderText,
    FilterInput,
    FilterInputSalary,
    FilterMonth,
    FilterRadio,
    FilterRatings,
    FilterSelect,
    FilterSelectWrap,
    FilterWrap,
    InputRadio,
    LabelInput,
    LabelInputRadio,
    MonthArrows,
    MonthText,
    Show,
    Title
} from "./Filter.styles";
import {FilterRating} from "./FilterRating/FilterRating.component";
import {pl} from "../../lang/pl";
import {Filtered, IFilterProps, SelectedRating} from "./Filter.types";
import {Button} from "../common/Button/Button.component";
import {clearAll} from "./Filter.utils";

export const Filter = ({filter, setActiveFilter, showFiltered}: IFilterProps) => {

    const [clear, setClear] = useState(false)
    const [chooseFilter, setChooseFilter] = useState<Filtered>({
        ratingCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingActiveInCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingCode: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingScrum: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        placeWork: {
            remoteWork: false,
            officeWork: false,
        },
        contractType: {
            contractOfEmployment: false,
            b2b: false,
            contractOfMandate: false,
            contractWork: false,
        },
        salaryPrice: {
            from: '',
            to: '',
        },
        freeWork: undefined,
        commercialExp: 0,
    })

    const setRating = (obj: SelectedRating, name: string) => {
        if (name === 'ratingCourse') {
            setChooseFilter({...chooseFilter, ratingCourse: obj})
        } else if (name === 'ratingActiveInCourse') {
            setChooseFilter({...chooseFilter, ratingActiveInCourse: obj})
        } else if (name === 'ratingCode') {
            setChooseFilter({...chooseFilter, ratingCode: obj})
        } else if (name === 'ratingScrum') {
            setChooseFilter({...chooseFilter, ratingScrum: obj})
        }
    }

    return (
        <>
            <FilterBackground onClick={() => filter(false)}/>
            <FilterWrap>
                <FilterHeader>
                    <FilterHeaderText>{pl.toolsButtonFilter}</FilterHeaderText>
                    <FilterClearAll onClick={() => clearAll(setChooseFilter, setClear)}>{pl.filterClearAll}</FilterClearAll>
                </FilterHeader>
                <FilterRatings>
                    <FilterRating title={pl.filterRatingCourse} rating={setRating} name="ratingCourse" clear={clear}
                                  setClear={setClear}/>
                    <FilterRating title={pl.filterRatingActive} rating={setRating} name="ratingActiveInCourse"
                                  clear={clear} setClear={setClear}/>
                    <FilterRating title={pl.filterRatingCode} rating={setRating} name="ratingCode" clear={clear}
                                  setClear={setClear}/>
                    <FilterRating title={pl.filterRatingScrum} rating={setRating} name="ratingScrum" clear={clear}
                                  setClear={setClear}/>
                </FilterRatings>

                <FilterSelectWrap>
                    <Title>{pl.filterTitlePlace}</Title>
                    <FilterSelect>
                        <FilterButton className={chooseFilter.placeWork.remoteWork ? "active" : ""}
                                      onClick={() => setChooseFilter({
                                          ...chooseFilter,
                                          placeWork: {
                                              ...chooseFilter.placeWork,
                                              remoteWork: !chooseFilter.placeWork.remoteWork
                                          }
                                      })}>{pl.filterPlaceWorkRemote}</FilterButton>
                        <FilterButton className={chooseFilter.placeWork.officeWork ? "active" : ""}
                                      onClick={() => setChooseFilter({
                                          ...chooseFilter,
                                          placeWork: {
                                              ...chooseFilter.placeWork,
                                              officeWork: !chooseFilter.placeWork.officeWork
                                          }
                                      })}>{pl.filterPlaceWorkBiuro}</FilterButton>
                    </FilterSelect>
                </FilterSelectWrap>

                <FilterSelectWrap>
                    <Title>{pl.filterTitleTypeContract}</Title>
                    <FilterSelect>
                        <FilterButton className={chooseFilter.contractType.contractOfEmployment ? "active" : ""}
                                      onClick={() => setChooseFilter({
                                          ...chooseFilter,
                                          contractType: {
                                              ...chooseFilter.contractType,
                                              contractOfEmployment: !chooseFilter.contractType.contractOfEmployment
                                          }
                                      })}>{pl.filterTypeContractUOP}</FilterButton>
                        <FilterButton className={chooseFilter.contractType.b2b ? "active" : ""}
                                      onClick={() => setChooseFilter({
                                          ...chooseFilter,
                                          contractType: {
                                              ...chooseFilter.contractType,
                                              b2b: !chooseFilter.contractType.b2b
                                          }
                                      })}>{pl.filterTypeContractB2B}</FilterButton>
                        <FilterButton className={chooseFilter.contractType.contractOfMandate ? "active" : ""}
                                      onClick={() => setChooseFilter({
                                          ...chooseFilter,
                                          contractType: {
                                              ...chooseFilter.contractType,
                                              contractOfMandate: !chooseFilter.contractType.contractOfMandate
                                          }
                                      })}>{pl.filterTypeContractUZ}</FilterButton>
                        <FilterButton className={chooseFilter.contractType.contractWork ? "active" : ""}
                                      onClick={() => setChooseFilter({
                                          ...chooseFilter,
                                          contractType: {
                                              ...chooseFilter.contractType,
                                              contractWork: !chooseFilter.contractType.contractWork
                                          }
                                      })}>{pl.filterTypeContractUOD}</FilterButton>
                    </FilterSelect>
                </FilterSelectWrap>

                <FilterSelectWrap>
                    <Title>{pl.filterTitleSalary}</Title>
                    <FilterInput>
                        <FilterSelect>
                            <LabelInput>{pl.from}</LabelInput>
                            <FilterInputSalary type="text" placeholder={pl.filterPlaceholderFrom}
                                               value={chooseFilter.salaryPrice.from}
                                               onChange={(e) => setChooseFilter({
                                                   ...chooseFilter,
                                                   salaryPrice: {
                                                       ...chooseFilter.salaryPrice,
                                                       from: Number(e.target.value)
                                                   }
                                               })}/>
                        </FilterSelect>
                        <FilterSelect>
                            <LabelInput>{pl.to}</LabelInput>
                            <FilterInputSalary type="text" placeholder="np. 10000 zł"
                                               value={chooseFilter.salaryPrice.to}
                                               onChange={(e) => setChooseFilter({
                                                   ...chooseFilter,
                                                   salaryPrice: {
                                                       ...chooseFilter.salaryPrice,
                                                       to: Number(e.target.value)
                                                   }
                                               })}/>
                        </FilterSelect>
                    </FilterInput>
                </FilterSelectWrap>

                <FilterSelectWrap>
                    <Title>{pl.filterTitleFreeWork}</Title>
                    <FilterRadio>
                        <InputRadio type="radio" name="free" id="yes" onClick={() => setChooseFilter({
                            ...chooseFilter,
                            freeWork: true
                        })}/><LabelInputRadio htmlFor="yes">{pl.yes}</LabelInputRadio>
                    </FilterRadio>
                    <FilterRadio>
                        <InputRadio type="radio" name="free" id="no" onClick={() => setChooseFilter({
                            ...chooseFilter,
                            freeWork: false
                        })}/><LabelInputRadio htmlFor="no">{pl.no}</LabelInputRadio>
                    </FilterRadio>
                </FilterSelectWrap>

                <FilterSelectWrap>
                    <Title>{pl.filterTitleCommercialExp}</Title>
                    <FilterMonth>
                        <MonthText
                            style={chooseFilter.commercialExp > 0 ? {color: '#F7F7F7'} : {}}>{chooseFilter.commercialExp} {pl.months}</MonthText>
                        <MonthArrows>
                            <ArrowToUp size={10} onClick={() => setChooseFilter({
                                ...chooseFilter,
                                commercialExp: chooseFilter.commercialExp + 1
                            })}/>
                            <ArrowToDown size={10} onClick={() => setChooseFilter({
                                ...chooseFilter,
                                commercialExp: chooseFilter.commercialExp === 0 ? 0 : chooseFilter.commercialExp - 1
                            })}/>
                        </MonthArrows>
                    </FilterMonth>
                </FilterSelectWrap>

                <FilterSelectWrap>
                   <FilterButtonsWrap>
                       <Cancel onClick={() => filter(false)}>{pl.filterCancel}</Cancel>
                       <Show onClick={() => {
                           showFiltered(chooseFilter)
                           setActiveFilter(true)
                           filter(false)
                       }}><Button text={pl.filterShow} handleClick={()=>{}} id={''}/></Show>
                   </FilterButtonsWrap>
                </FilterSelectWrap>
            </FilterWrap>
        </>
    )

}