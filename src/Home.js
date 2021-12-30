import React, {useState} from "react";
import styledButtonComponents from "./styles/Buttons-style";
import styledLearnsComponents from "./styles/Learns-style";
import menuCherryBlossom from "./images/menu-cherryblossom.png";
import menuPheasant from "./images/menu-pheasant.png";
import menuCat from "./images/menu-cat.png";
import {Link} from "react-router-dom";

const {MainMenuButton} = styledButtonComponents;
const {LearnsStyle} = styledLearnsComponents;

const Home = () => {
    return (
        <LearnsStyle>
            <div className="title">
                <h1>Learn</h1>
            </div>
            <div className="menus">
                <MainMenuButton backgroundColor="#EB7662" backgroundImageUrl={menuCherryBlossom}>
                    <Link to="/menu/words">
                        <h3>Words</h3>
                        <p>this is test lines...</p>
                    </Link>
                </MainMenuButton>
                <MainMenuButton backgroundColor="#8DC4BB" backgroundImageUrl={menuCherryBlossom}>
                    <Link to="/menu/grammars">
                        <h3>Grammers</h3>
                        <p>this is test lines...</p>
                    </Link>
                </MainMenuButton>
                <MainMenuButton backgroundColor="#F2982F" backgroundImageUrl={menuCherryBlossom}>
                    <Link to="/menu/eju">
                        <h3>EJU</h3>
                        <p>this is test lines...</p>
                    </Link>
                </MainMenuButton>
                <MainMenuButton backgroundColor="#327389" backgroundImageUrl={menuCherryBlossom}>
                    <Link to="/settings">
                        <h3>Settings</h3>
                        <p>this is test lines...</p>
                    </Link>
                </MainMenuButton>
            </div>
        </LearnsStyle>
    );
};

export default Home;