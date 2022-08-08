import React, {useState} from "react";
import {
    FilterBackground,
    FilterClearAll,
    FilterHeader,
    FilterHeaderText,
    FilterRatings,
    FilterWrap
} from "./Filter.styles";
import {FilterRating} from "./FilterRating/FilterRating.component";
import {pl} from "../../lang/pl";
import {Filtered, IFilterProps, SelectedRating} from "./Filter.types";

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
        freeWork: '',
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

    const clearAll = () => {
        setChooseFilter({
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
            freeWork: '',
            commercialExp: 0,
        })
        setClear(true)
        setTimeout(() => {
            setClear(false)
        }, 1)
    }

    return (
        <>
            <FilterBackground onClick={() => filter(false)}/>
            <FilterWrap>
                <FilterHeader>
                    <FilterHeaderText>{pl.toolsButtonFilter}</FilterHeaderText>
                    <FilterClearAll>{pl.filterClearAll}</FilterClearAll>
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
            </FilterWrap>
        </>
    )

}