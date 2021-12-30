import styled, { css } from "styled-components";
//이제는 어떻게 사랑을 하나요
const Container = styled.div`
    ${({ theme }) => {
    return css`
            max-width: 500px;
            height: 100%;
            position:relative;
            left:50%;
            transform:translateX(-50%);
        `;
}}
`;

export default Container;