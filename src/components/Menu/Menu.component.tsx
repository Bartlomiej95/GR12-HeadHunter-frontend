import React, {useState} from "react";
import {MenuUnderline, MenuWrap, NavigateLink} from "./Menu.styles";

export const Menu = () => {

    const [underlineOne, setUnderlineOne] = useState(window.location.href !== 'http://localhost:3000/to-talk')
    const [underlineTwo, setUnderlineTwo] = useState(window.location.href === 'http://localhost:3000/to-talk')

    return (
        <MenuWrap>

            <NavigateLink to='/' onClick={() => {
                setUnderlineOne(true)
                setUnderlineTwo(false)
            }}>
                <MenuUnderline
                    style={underlineOne ? {left: 0, transition: '.4s'} : {left: '100%', transition: '.4s'}}>

                </MenuUnderline>
                Dostępni kursanci
            </NavigateLink>

            <NavigateLink to='/to-talk' onClick={() => {
                setUnderlineOne(false)
                setUnderlineTwo(true)
            }}>
                <MenuUnderline
                    style={underlineTwo ? {left: 0, transition: '.4s'} : {
                        left: '-100%',
                        transition: '.4s'
                    }}></MenuUnderline>
                Do rozmowy
            </NavigateLink>

        </MenuWrap>
    )
}