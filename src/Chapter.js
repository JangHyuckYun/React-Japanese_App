import React, {useState, useContext, useEffect} from "react";
import styledLevelComponents from "./styles/Level-Style";
import { useNavigate, use } from "react-router";
import {Link, useParams, useLocation} from "react-router-dom";
import {InfoContext} from "./contexts/info";

const {MenusStyle, LevelItem} = styledLevelComponents;
/*
TODO
 - props로 데이터 옮기지 말고 infoStore 활용하여 json 옮기기
 - chapter 형태로 꾸미기 (chapter 안에 word들 표시)
*/
const Chapter = ({ history }) => {
    const {type, level, chapter} = useParams();
    const {data: {language}, profile: {language: {study}}} = useContext(InfoContext);
    const data = language[study][type][level][chapter] ?? [];
    const { pathname } = useLocation();
    let navigate = useNavigate();
    useEffect(() => {
        if(data.length === 0) {
            navigate(-1);
        }
    });

    return (
        <MenusStyle>
            {data.slice().map(({ name }, idx) => <LevelItem key={idx} to={"/"}>{name}</LevelItem>)}
        </MenusStyle>
    );
};

export default Chapter;