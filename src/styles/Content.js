import styled, { css } from "styled-components";
import Container from "./Container";
//이제는 어떻게 사랑을 하나요
const Content = styled.div`
    ${({ theme }) => {
    return css`
            position:relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            top:calc(50% - 50px);
            transform:translateY(-50%);
        `;
}}
`;

export default Content;