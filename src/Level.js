import React, {useState} from "react";
import styledLevelComponents from "./styles/Level-Style";
import {Link, useParams, useLocation, use} from "react-router-dom";

const {MenusStyle, Level} = styledLevelComponents;
// eslint-disable-next-line react-hooks/rules-of-hooks
const Learn = (props) => {
    const { type, level } = useParams();
    const { allData } = props;
    const data = allData[type][level];
    console.log(props);
    return (
        <MenusStyle>
           <p>test...</p>
        </MenusStyle>
    );
};

export default Learn;