import styled, { css } from "styled-components";
import Container from "./Container";
import {Link} from "react-router-dom";

const MenusStyle = styled(Container)`
    ${({ theme }) => {
    return css`
        display:grid;
        grid-template-columns: repeat(2, calc(100% / 2));
        grid-auto-rows: 100px;
        justify-content:center;
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
        border-radius:15px;
        background:#6a8ff1;
        color:#fff;
        padding:10px;
    `;
}}
`;

const styledLearnComponents = { MenusStyle, LevelItem };

export default styledLearnComponents;