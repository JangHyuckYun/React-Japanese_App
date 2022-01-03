import React, {useState} from "react";
import styledLearnComponents from "./styles/LearnStyle-style";
import {Link, useParams, useLocation, use} from "react-router-dom";

const {MenusStyle, Level} = styledLearnComponents;
// eslint-disable-next-line react-hooks/rules-of-hooks
const Learn = (props) => {
    const { type, level } = useParams();
    const location = useLocation();
    const { allData } = props;
    const data = allData[type][level.toLowerCase()];
    console.log(allData, type, level);
    console.log("level data: ", data);
    return (
        <MenusStyle>
           <p>test...</p>
        </MenusStyle>
    );
};

export default Learn;