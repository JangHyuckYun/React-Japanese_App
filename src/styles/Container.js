import styled, { css } from "styled-components";
//이제는 어떻게 사랑을 하나요
const Container = styled.div`
    ${({ theme }) => {
    return css`
            max-width: 800px;
            height: 100%;
            height: calc(var(--vh, 1%) * 100);
            position:relative;
            left:50%;
            transform:translateX(-50%);
            display:flex;
            flex-direction:column;
            justify-content: space-between;
        `;
}}
`;

export default Container;