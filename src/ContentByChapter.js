import React, {useState, useContext, useEffect} from "react";
import styledLevelComponents from "./styles/Level-Style";
import { useNavigate, use } from "react-router";
import {Link, useParams, useLocation} from "react-router-dom";
import {InfoContext} from "./contexts/info";

const {MenusStyle, LevelItem} = styledLevelComponents;

const ContentByChapter = ({ chapterData }) => {
    console.log(chapterData);
    return (
        <div>

        </div>
    );
};

export default ContentByChapter;