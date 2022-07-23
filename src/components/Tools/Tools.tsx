import React from "react";
import {FilterAlt} from "@styled-icons/boxicons-solid";
import './Tools.css';

export const Tools = () => (

    <div className="Tools">
        <input type="search" placeholder="Szukaj"/>
        <button><FilterAlt size={15} color="#4D4D4D"/>Filtrowanie</button>
    </div>
)