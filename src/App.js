import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./Main";
import Header from "./Header";
import Settings from "./util/Settings";
import Menus from "./Menus";

const App = () => {
    const [theme, setTheme] = useState(lightTheme);

    const switchTheme = () => {
        const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(nextTheme);
    }
    console.log(process.env.PUBLIC_URL)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/menu/:type" element={<Menus/>} />
                    <Route path="/settings" element={<Settings switchTheme={() => switchTheme} />}  />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
