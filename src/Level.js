import React, {useState, useContext} from "react";
import styledLevelComponents from "./styles/Level-Style";
import {Link, useParams, useLocation, use} from "react-router-dom";
import {InfoContext} from "./contexts/info";

const {MenusStyle, LevelItem} = styledLevelComponents;
/*
TODO
 - props로 데이터 옮기지 말고 infoStore 활용하여 json 옮기기
 - chapter 형태로 꾸미기 (chapter 안에 word들 표시)
*/
const Level = (props) => {
    const {type, level} = useParams();
    const {data: {language}, profile: {language: {study}}} = useContext(InfoContext);
    const data = language[study][type][level];
    console.log(props, data);
    return (
        <MenusStyle>
            {data.slice().map((d, idx) => <LevelItem key={idx} to="/">Chapter{idx + 1}</LevelItem>)}
        </MenusStyle>
    );
};

export default Level;