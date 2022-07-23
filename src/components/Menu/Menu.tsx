import React from "react";
import {NavLink} from "react-router-dom";
import './Menu.css';

export const Menu = () => (
    <div className="Menu">
        <NavLink to='/' className="Menu__link">Dostępni kursanci</NavLink>
        <NavLink to='/to-talk' className="Menu__link">Do rozmowy</NavLink>
    </div>
)