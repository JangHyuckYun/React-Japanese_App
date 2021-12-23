import styled, { css } from "styled-components";

const SmallButton = styled.button`
    ${({ theme }) => {
    return css`
            background-color: ${theme.buttons.colors.green};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
            padding:5px 25px;
            margin:10px 0;
            border-radius: 50px;
            border:none;
        `;
}}
`;

const NormalButton = styled.div`
    ${({ theme }) => {
    return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
            border-radius: 2px;
        `;
}}
`;

const BigButton = styled.div`
    ${({ theme }) => {
    return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
            border-radius: 2px;
        `;
}}
`;

const styledButtonComponents = { SmallButton, NormalButton, BigButton };

export default styledButtonComponents;