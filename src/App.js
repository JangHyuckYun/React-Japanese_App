import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./Main";
import Header from "./Header";

const App = () => {
    const [theme, setTheme] = useState(lightTheme);

    const switchTheme = () => {
        const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(nextTheme);
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
