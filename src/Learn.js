import React, {useState} from "react";
import styledLearnComponents from "./styles/Learn-Style";
import {Link, useParams, useLocation} from "react-router-dom";
import info from "./json/info";

const {MenusStyle, LevelItem} = styledLearnComponents;
const Learn = (props) => {
    const {type} = useParams();
    const {pathname} = useLocation();
    const {allData} = props;
    const data = allData[type];
    const levelInfo = info.level;

    return (
        <MenusStyle>
            {Object.keys(data).slice().map((key, idx) =>
                <LevelItem key={idx} to={pathname + "/" + key}>
                    {key}
                </LevelItem>)}
        </MenusStyle>
    );
};

export default Learn;