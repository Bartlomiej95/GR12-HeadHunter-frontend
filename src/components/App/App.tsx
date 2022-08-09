import React, {useState} from "react";
import {theme} from "../../theme";
import {ThemeProvider} from "styled-components";
import {Routing} from "../Routing/Routing.component";
import Cookies from "universal-cookie";

const cookie = new Cookies()

function App() {

    const [login, setLogin] = useState(cookie.get('login'))

    return (
        <ThemeProvider theme={theme}>
            <Routing login={login} setLogin={setLogin}/>
        </ThemeProvider>
    )
}

export default App;
