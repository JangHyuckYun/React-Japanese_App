import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./Main";
import Header from "./Header";
import Settings from "./util/Settings";
import Menus from "./Menus";
import data from "./json/data.js";

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
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/menu/:type" element={<Menus allData={data.data.language.jp} />} />
                    <Route path="/settings" element={<Settings switchTheme={() => switchTheme} />}  />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
