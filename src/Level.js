import React, {useState} from "react";
import styledLevelComponents from "./styles/Level-Style";
import {Link, useParams, useLocation, use} from "react-router-dom";

const {MenusStyle, Level} = styledLevelComponents;
/*
TODO
 - props로 데이터 옮기지 말고 infoStore 활용하여 json 옮기기
 - chapter 형태로 꾸미기 (chapter 안에 word들 표시)
*/
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