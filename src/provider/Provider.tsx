import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";


export const Context = createContext<null | string | any >(null);

export const Provider = (props:PropsWithChildren)=>{
    const [login, setLogin] = useState<boolean>(false);
    // const [messageLogin, setMessageLogin] = useState<boolean>(false);
    // const [errorLogin, setErrorLogin] = useState<boolean>(false);


    return (
        <Context.Provider value={{
            login, setLogin,
        }}>
                {props.children}
        </Context.Provider>
    )
}