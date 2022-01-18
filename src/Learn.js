import React, {useState, useContext} from "react";
import styledLearnComponents from "./styles/Learn-Style";
import Content from "./styles/Content";
import {Link, useParams, useLocation} from "react-router-dom";
import info from "./json/info";
import {InfoContext} from "./contexts/info";

const {MenusStyle, LevelItem} = styledLearnComponents;
const Learn = (props) => {
    const {type} = useParams();
    const {pathname} = useLocation();
    const { profile, data:{ language },  } = useContext(InfoContext);
    const studyData = language[profile.language.study][type];

    return (
        <Content>
            <div className="title">
                <h1>Choose Level</h1>
            </div>
            <MenusStyle>
                {Object.keys(studyData).slice().map((key, idx) =>
                    <LevelItem key={idx} to={pathname + "/" + key}>
                        {key}
                    </LevelItem>)
                }
            </MenusStyle>
        </Content>
    );
};

export default Learn;