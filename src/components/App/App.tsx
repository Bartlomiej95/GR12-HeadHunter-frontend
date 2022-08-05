import React, {useContext} from "react";
import {theme} from "../../theme";
import {ThemeProvider} from "styled-components";
import {Routing} from "../Routing/Routing.component";
import {Context} from "../../provider/Provider";


function App() {
    const {login} = useContext(Context)
    return (
        <ThemeProvider theme={theme}>
            <Routing login={login}/>
        </ThemeProvider>
    )
}

export default App;
