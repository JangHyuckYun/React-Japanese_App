import React, {useState} from "react";
import styledLearnComponents from "./styles/LearnStyle-style";
import {Link, useParams, useLocation} from "react-router-dom";

const {MenusStyle, LevelItem} = styledLearnComponents;
const Learn = (props) => {
    const {type} = useParams();
    const {pathname} = useLocation();
    const {allData} = props;
    const data = allData[type];
    return (
        <MenusStyle>
            {Object.keys(data).slice().map((key, idx) =>
                <LevelItem key={idx} to={pathname + "/" + key.toLocaleUpperCase()}>{key.toLocaleUpperCase()}</LevelItem>)}
        </MenusStyle>
    );
};

export default Learn;