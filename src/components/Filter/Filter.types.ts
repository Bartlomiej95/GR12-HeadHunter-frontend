import {Dispatch, SetStateAction} from "react";

export interface IFilterProps {
    filter: Dispatch<SetStateAction<boolean>>
    showFiltered: (obj: Filtered) => void
    setActiveFilter: Dispatch<SetStateAction<boolean>>
}

export interface Filtered {
    ratingCourse: SelectedRating | {}
    ratingActiveInCourse: SelectedRating | {}
    ratingCode: SelectedRating | {}
    ratingScrum: SelectedRating | {}
    placeWork: SelectedPlace
    contractType: SelectedContract
    salaryPrice: SalaryPrice
    freeWork: boolean | undefined
    commercialExp: number
}

export interface SelectedPlace {
    remoteWork: boolean
    officeWork: boolean
}

export interface SelectedContract {
    contractOfEmployment: boolean
    b2b: boolean
    contractOfMandate: boolean
    contractWork: boolean
}

export interface SalaryPrice {
    from: string | number
    to: string | number
}

export interface SelectedRating {
    fiveStar: boolean,
    fourStar: boolean,
    threeStar: boolean,
    twoStar: boolean,
    oneStar: boolean,
}