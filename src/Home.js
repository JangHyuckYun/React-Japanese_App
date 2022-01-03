import React, {useState} from "react";
import styledButtonComponents from "./styles/Buttons-style";
import styledMainsComponents from "./styles/Main-Style";
import menuCherryBlossom from "./images/menu-cherryblossom.png";
import menuPheasant from "./images/menu-pheasant.png";
import menuCat from "./images/menu-cat.png";
import {Link} from "react-router-dom";

const {MainMenuButton} = styledButtonComponents;
const {MainStyle, MainInfo} = styledMainsComponents;

const Home = () => {
    return (
        <MainStyle>
            <div className="title">
                <h1>Home</h1>
            </div>
            <div className="info-cover">
                <MainInfo height="100px" backgroundColor="#8DC4BB" gridRow="1 / 3">
                    <p>test1</p>
                </MainInfo>
                <MainInfo height="150px" backgroundColor="#EB7662">
                    <p>test2</p>
                </MainInfo>
                <MainInfo height="300px" backgroundColor="#6A8FF1">
                    <p>test3</p>
                </MainInfo>
                <MainInfo height="200px" backgroundColor="#EB7662">
                    <p>test4</p>
                </MainInfo>
                <MainInfo height="200px" backgroundColor="#8DC4BB">
                    <p>test5</p>
                </MainInfo>
            </div>
        </MainStyle>
    );
};

export default Home;