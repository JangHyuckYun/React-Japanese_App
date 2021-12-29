import styled, { css } from "styled-components";

const Button = styled.div`
    ${({ theme }) => {
    return css`
            padding:5px 25px;
            margin:10px 0;
            border:none;
        `;
}}
`;

const ButtonStyle1 = styled(Button)`
    ${({ theme }) => {
    return css`
            border-radius: 20px;
        `;
}}
`;

const SmallButton = styled(ButtonStyle1)`
    ${({ theme }) => {
    return css`
            background-color: ${theme.buttons.colors.green};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
        `;
}}
`;

const NormalButton = styled(ButtonStyle1)`
    ${({ theme }) => {
    return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
        `;
}}
`;

const BigButton = styled(ButtonStyle1)`
    ${({ theme }) => {
    return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
        `;
}}
`;

const MainMenuButton = styled(ButtonStyle1)`
    ${({ theme, backgroundColor }) => {
    return css`
            height:100px;
            background-color: ${backgroundColor};
            color: ${theme.colors.secondary};
            display:flex;
            align-items:center;
            
            h3 {
                font-weight:bold;
                padding-bottom:5px;
            }
            
            p {
                font-size: ${theme.fonts.size.min};
            }
            
        `;
}}
`;

const styledButtonComponents = { SmallButton, NormalButton, BigButton, MainMenuButton };

export default styledButtonComponents;