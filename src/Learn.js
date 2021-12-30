import React, {useState} from "react";
import styledMainComponents from "./styles/MenusStyle-style";
import {Link, useParams} from "react-router-dom";

const {MenusStyle} = styledMainComponents;
// eslint-disable-next-line react-hooks/rules-of-hooks
const Learn = (props) => {
    const {type} = useParams();
    const { allData } = props;

    let data = allData[type];
    console.log(data);
    return (
        <MenusStyle>
            <p>test...</p>
        </MenusStyle>
    );
};

export default Learn;