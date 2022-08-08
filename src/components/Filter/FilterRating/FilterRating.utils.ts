import {Dispatch, SetStateAction} from "react";
import {ISelectedRating} from "./FilterRating.types";

export const clearState = (clear: boolean, setSelected: Dispatch<SetStateAction<ISelectedRating>>) => {
    if(clear) setSelected({
        fiveStar: false,
        fourStar: false,
        threeStar: false,
        twoStar: false,
        oneStar: false
    })
}
