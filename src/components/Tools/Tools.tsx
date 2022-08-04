import React, {Dispatch, SetStateAction} from "react";
import {FilterAlt} from "@styled-icons/boxicons-solid";
import './Tools.css';

interface ToolsProps {
    filter: Dispatch<SetStateAction<boolean>>
    setSearch: Dispatch<SetStateAction<string>>
    search: string
}

export const Tools = (props: ToolsProps) => {
    return (
        <div className="Tools">
            <input type="search" placeholder="Szukaj" value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
            <button onClick={() => props.filter(true)}><FilterAlt size={15} color="#4D4D4D"/>Filtrowanie</button>
        </div>
    )
}