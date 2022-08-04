import React from "react";
import {Login} from "../../pages/Login/Login.component";
import {theme} from "../../theme";
import {ThemeProvider} from "styled-components";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Login/>
        </ThemeProvider>
    )
}

export default App;
