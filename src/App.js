import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, useLocation,} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Learns from "./Learns";
import Header from "./Header";
import Footer from "./Footer";
import Settings from "./util/Settings";
import Learn from "./Learn";
import Home from "./Home";
import Container from "./styles/Container";
import InfoStore from "./contexts/info";
import data from "./json/data.js";
import Level from "./Level";
import ReactGA from 'react-ga';

const App = () => {
    const [theme, setTheme] = useState(lightTheme);
    const switchTheme = () => {
        const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(nextTheme);
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <InfoStore>
                <Router basename={process.env.PUBLIC_URL} on>
                    <Container>
                        <Header/>
                        <Routes>
                            <Route path={"/"} element={<Home/>}/>
                            <Route path="/learn" element={<Learns/>}/>
                            <Route path="/learn/:type" element={<Learn allData={data.data.language.jp}/>}/>
                            <Route path="/learn/:type/:level" element={<Level allData={data.data.language.jp}/>}/>
                            <Route path="/settings" element={<Settings switchTheme={() => switchTheme}/>}/>
                        </Routes>
                        <Footer/>
                    </Container>
                </Router>
            </InfoStore>
        </ThemeProvider>
    );
}

export default App;
