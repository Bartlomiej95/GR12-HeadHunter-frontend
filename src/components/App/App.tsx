import React, {useState} from "react";
import {theme} from "../../theme";
import {ThemeProvider} from "styled-components";
import {Routing} from "../Routing/Routing.component";



function App() {

    const [login, setLogin] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <Routing login={login} setLogin={setLogin}/>
        </ThemeProvider>
    )
}

export default App;
