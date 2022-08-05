import React, {createContext, PropsWithChildren, useState} from "react";

export const Context = createContext<any>(false);

export const Provider = (props: PropsWithChildren)=>{
    const [login, setLogin] = useState<boolean>(false)

    return (
        <Context.Provider value={{
            login, setLogin
        }}>
            {props.children}
        </Context.Provider>
    )
}