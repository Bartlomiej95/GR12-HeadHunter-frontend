import {Dispatch, SetStateAction} from "react";

export interface IFilterRatingProps {
    title: string
    rating: (obj: ISelectedRating, name: string) => void
    name: string
    clear: boolean
    setClear: Dispatch<SetStateAction<boolean>>
}

export interface ISelectedRating {
    fiveStar: boolean,
    fourStar: boolean,
    threeStar: boolean,
    twoStar: boolean,
    oneStar: boolean,
}