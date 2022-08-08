import React, {useEffect, useState} from "react";
import {
    FilteredStarNumber,
    FilterRatingTitle,
    FilterRatingWrap,
    FilterStarsItem,
    FilterStarsWrap,
    StarIcon
} from "./FilterRating.styles";
import {IFilterRatingProps, ISelectedRating} from "./FilterRating.types";
import {clearState} from "./FilterRating.utils";

export const FilterRating: React.FC<IFilterRatingProps> = ({title, clear, name, rating, setClear}) => {

    const [selected, setSelected] = useState<ISelectedRating>({
        fiveStar: false,
        fourStar: false,
        threeStar: false,
        twoStar: false,
        oneStar: false
    })


    useEffect(()=> {
        clearState(clear, setSelected)
    })

    return (
        <FilterRatingWrap>
            <FilterRatingTitle>{title}</FilterRatingTitle>
            <FilterStarsWrap>

                <FilterStarsItem
                    className={clear ? 'Stars-item' : selected.fiveStar ? 'Stars-item active' : 'Stars-item'}
                    onClick={() => {
                        setSelected({...selected, fiveStar: !selected.fiveStar})
                        rating({...selected, fiveStar: !selected.fiveStar}, name)
                    }}>
                    <FilteredStarNumber>
                        5
                    </FilteredStarNumber><StarIcon className={clear ? '' : selected.fiveStar ? 'active' : ''} size={13}/>
                </FilterStarsItem>

                <FilterStarsItem
                    className={clear ? 'Stars-item' : selected.fourStar ? 'Stars-item active' : 'Stars-item'}
                    onClick={() => {
                        if (clear) setClear(false)
                        setSelected({...selected, fourStar: !selected.fourStar})
                        rating({...selected, fourStar: !selected.fourStar}, name)
                    }}>
                    < FilteredStarNumber>
                        4
                    </FilteredStarNumber><StarIcon className={clear ? '' : selected.fourStar ? 'active' : ''} size={13}/>
                </FilterStarsItem>

                <FilterStarsItem
                    className={clear ? 'Stars-item' : selected.threeStar ? 'Stars-item active' : 'Stars-item'}
                    onClick={() => {
                        if (clear) setClear(false)
                        setSelected({...selected, threeStar: !selected.threeStar})
                        rating({...selected, threeStar: !selected.threeStar}, name)
                    }}>
                    <FilteredStarNumber>
                        3
                    </FilteredStarNumber><StarIcon className={clear ? '' : selected.threeStar ? 'active' : ''} size={13}/>
                </FilterStarsItem>

                <FilterStarsItem
                    className={clear ? 'Stars-item' : selected.twoStar ? 'Stars-item active' : 'Stars-item'}
                    onClick={() => {
                        if (clear) setClear(false)
                        setSelected({...selected, twoStar: !selected.twoStar})
                        rating({...selected, twoStar: !selected.twoStar}, name)
                    }}>
                    <FilteredStarNumber>
                        2
                    </FilteredStarNumber><StarIcon className={clear ? '' : selected.twoStar ? 'active' : ''} size={13}/>
                </FilterStarsItem>

                <FilterStarsItem
                    className={clear ? 'Stars-item' : selected.oneStar ? 'Stars-item active' : 'Stars-item'}
                    onClick={() => {
                        if (clear) setClear(false)
                        setSelected({...selected, oneStar: !selected.oneStar})
                        rating({...selected, oneStar: !selected.oneStar}, name)
                    }}>
                    <FilteredStarNumber>
                        1
                    </FilteredStarNumber><StarIcon className={clear ? '' : selected.oneStar ? 'active' : ''} size={13}/>
                </FilterStarsItem>

            </FilterStarsWrap>
        </FilterRatingWrap>
    )
}