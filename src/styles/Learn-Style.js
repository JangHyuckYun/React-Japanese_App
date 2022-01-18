import styled, { css } from "styled-components";
import Container from "./Container";
import {Link} from "react-router-dom";

const MenusStyle = styled.div`
    ${({ theme }) => {
    return css`
        display:grid;
        grid-template-columns: repeat(2, calc(100% / 2));
        grid-auto-rows: 150px;
        justify-content:center;
        align-content:center;
        gap:10px;
        text-align:center;
        padding-top:10px;
    `;
}}
`;

const LevelItem = styled(Link)`
    ${({ theme }) => {
    return css`
        display:block;
        line-height:135px;
        border-radius:15px;
        background:#6a8ff1;
        color:#fff;
        padding:10px;
        font-weight:bold;
        letter-spacing:1px;
    `;
}}
`;

const styledLearnComponents = { MenusStyle, LevelItem };

export default styledLearnComponents;