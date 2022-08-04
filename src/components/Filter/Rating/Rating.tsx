import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Star} from "@styled-icons/boxicons-solid";

interface RatingProps {
    title: string
    rating: (obj: SelectedRating, name: string) => void
    name: string
    clear: boolean
    setClear: Dispatch<SetStateAction<boolean>>
}

export interface SelectedRating {
    fiveStar: boolean,
    fourStar: boolean,
    threeStar: boolean,
    twoStar: boolean,
    oneStar: boolean,
}

export const Rating = (props: RatingProps) => {

    const [selected, setSelected] = useState<SelectedRating>({
        fiveStar: false,
        fourStar: false,
        threeStar: false,
        twoStar: false,
        oneStar: false
    })

   const clearState = () => {
       if(props.clear) setSelected({
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        })
   }

   useEffect(()=> {
       clearState()
   })
    return (
        <div className="Stars">
            <p>{props.title}</p>
            <div className="Stars-wrap">
                <div className={props.clear ? 'Stars-item' : selected.fiveStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                        setSelected({...selected, fiveStar: !selected.fiveStar})
                        props.rating({...selected, fiveStar: !selected.fiveStar}, props.name)

                }}>
                    <p>5</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={props.clear ? 'Stars-item' : selected.fourStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    if(props.clear) props.setClear(false)
                    setSelected({...selected, fourStar: !selected.fourStar})
                    props.rating({...selected, fourStar: !selected.fourStar}, props.name)
                }}>
                    <p>4</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={props.clear ? 'Stars-item' : selected.threeStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    if(props.clear) props.setClear(false)
                    setSelected({...selected, threeStar: !selected.threeStar})
                    props.rating({...selected, threeStar: !selected.threeStar}, props.name)
                }}>
                    <p>3</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={props.clear ? 'Stars-item' : selected.twoStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    if(props.clear) props.setClear(false)
                    setSelected({...selected, twoStar: !selected.twoStar})
                    props.rating({...selected, twoStar: !selected.twoStar}, props.name)
                }}>
                    <p>2</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={props.clear ? 'Stars-item' : selected.oneStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    if(props.clear) props.setClear(false)
                    setSelected({...selected, oneStar: !selected.oneStar})
                    props.rating({...selected, oneStar: !selected.oneStar}, props.name)
                }}>
                    <p>1</p> <Star
                    size={13} className="Star"/>
                </div>
            </div>
        </div>
    )
}
