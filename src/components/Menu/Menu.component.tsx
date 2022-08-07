import React, {useState} from "react";
import {MenuUnderline, MenuWrap, NavigateLink} from "./Menu.styles";
import {IMenuProps} from "./Menu.types";

export const Menu: React.FC<IMenuProps> = ({setActivePage, activePage}) => {

    const [underlineOne, setUnderlineOne] = useState<boolean>(window.location.href !== 'http://localhost:3000/to-talk')
    const [underlineTwo, setUnderlineTwo] = useState<boolean>(window.location.href === 'http://localhost:3000/to-talk')

    return (
        <MenuWrap>

            <NavigateLink to='/' onClick={() => {
                setUnderlineOne(true)
                setUnderlineTwo(false)
                setActivePage({...activePage, availableStudent: true, toTalk: false})
            }}>
                <MenuUnderline
                    style={underlineOne ? {left: 0, transition: '.4s'} : {left: '100%', transition: '.4s'}}>

                </MenuUnderline>
                Dostępni kursanci
            </NavigateLink>

            <NavigateLink to='/to-talk' onClick={() => {
                setUnderlineOne(false)
                setUnderlineTwo(true)
                setActivePage({...activePage, availableStudent: false, toTalk: true})
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