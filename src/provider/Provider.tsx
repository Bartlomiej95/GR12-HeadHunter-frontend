import React, {createContext, PropsWithChildren, useState} from "react";


export const Context = createContext<null | string | any >(null);

export const Provider = (props:PropsWithChildren)=>{
    const [login, setLogin] = useState<boolean>(false);
    const [name, setName] = useState<boolean>(false);
    const [lastName, setLastName] = useState<boolean>(false);
    const [role, setRole] = useState<boolean>(false);

    return (
        <Context.Provider value={{
            login, setLogin,
            name, setName,
            lastName, setLastName,
            role, setRole

        }}>
                {props.children}
        </Context.Provider>
    )
}
