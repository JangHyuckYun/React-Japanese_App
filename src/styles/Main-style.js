import styled, { css } from "styled-components";

const MainStyle = styled.div`
    ${({ theme }) => {
    return css`
            max-width: 800px;
            height: 100%;
            position:relative;
            left:50%;
            transform:translateX(-50%);
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: ${theme.colors.secondary};
        `;
}}
`;

const styledMainComponents = { MainStyle };

export default styledMainComponents;