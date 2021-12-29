import React, {useState} from "react";
import styledButtonComponents from "./styles/Buttons-style";
import styledMainComponents from "./styles/Main-style";
import menuCherryBlossom from "./images/menu-cherryblossom.png";
import menuPheasant from "./images/menu-pheasant.png";
import menuCat from "./images/menu-cat.png";
import {Link} from "react-router-dom";

const {MainMenuButton} = styledButtonComponents;
const {MainStyle} = styledMainComponents;

const Main = () => {
    return (
        <MainStyle>
            <div className="title">
                <h1>Japanese App</h1>
            </div>
            <div className="menus">
                <MainMenuButton backgroundColor="#EB7662" backgroundImageUrl={menuCherryBlossom}>
                    <Link to="/menu/word">
                        <h3>Words</h3>
                        <p>this is test lines...</p>
                    </Link>
                </MainMenuButton>
                <MainMenuButton backgroundColor="#8DC4BB" backgroundImageUrl={menuCherryBlossom}>
                    <Link to="/menu/grammer">
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
        </MainStyle>
    );
};

export default Main;