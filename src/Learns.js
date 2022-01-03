import React, {useState} from "react";
import styledButtonComponents from "./styles/Buttons-style";
import styledLearnsComponents from "./styles/Learns-style";
import {Link} from "react-router-dom";
import info from "./json/info";

const {MainMenuButton} = styledButtonComponents;
const {LearnsStyle} = styledLearnsComponents;

const Learns = () => {
    const learns = info.learns;
    return (
        <LearnsStyle>
            <div className="title">
                <h1>Learn</h1>
            </div>
            <div className="menus">
                {Object.keys(learns).map((key) => {
                    return (
                        <MainMenuButton key={key} backgroundcolor={learns[key].background} backgroundImageUrl={learns[key].backgroundImageUrl}>
                            <Link to={"/"+(key === "settings" ? key : "learn/"+key)}>
                                <h3>{learns[key].name}</h3>
                                <p>{learns[key].text}</p>
                            </Link>
                        </MainMenuButton>
                    );
                })}
            </div>
        </LearnsStyle>
    );
};

export default Learns;