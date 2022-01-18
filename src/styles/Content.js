import styled, { css } from "styled-components";
import Container from "./Container";
//이제는 어떻게 사랑을 하나요
const Content = styled.div`
    ${({ theme }) => {
    return css`
        width:100%;
        position:relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}}
`;

export default Content;