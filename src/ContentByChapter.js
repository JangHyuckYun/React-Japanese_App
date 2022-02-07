import React, {useState, useContext, useEffect, useRef} from "react";
import styledLevelComponents from "./styles/Level-Style";
import { useNavigate, use } from "react-router";
import {Link, useParams, useLocation} from "react-router-dom";
import {InfoContext} from "./contexts/info";
import ContentByChapterStyle from "./styles/ContentByChapter-Style";

const {MenusStyle, LevelItem} = styledLevelComponents;

const ContentByChapter = ({ chapterData, duration, testHeight, isShow, isAnimation }) => {
    console.log("chapterData", chapterData);
    return (
        <ContentByChapterStyle duration={duration} testHeight={testHeight} isShow={isShow} isAnimation={isAnimation}>
        </ContentByChapterStyle>
    );
};

export default ContentByChapter;