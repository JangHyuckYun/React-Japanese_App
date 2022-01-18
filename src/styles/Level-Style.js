import styled, { css } from "styled-components";
import Container from "./Container";
import {Link} from "react-router-dom";
import Content from "./Content";

const MenusStyle = styled(Content)`
    ${({ theme }) => {
    return css`
    `;
}}
`;

const LevelItem = styled(Link)`
    ${({ theme }) => {
    return css`
        display:block;
    `;
}}
`;

const styledLevelComponents = { MenusStyle, LevelItem };

export default styledLevelComponents;