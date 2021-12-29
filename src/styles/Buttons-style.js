import styled, {css} from "styled-components";

const Button = styled.div`
    ${({theme}) => {
    return css`
            margin-bottom:15px;
            border:none;
            cursor:pointer;
            
            &:hover {
                
            }
        `;
}}
`;

const ButtonStyle1 = styled(Button)`
    ${({theme}) => {
    return css`
            border-radius: 20px;
        `;
}}
`;

const SmallButton = styled(ButtonStyle1)`
    ${({theme}) => {
    return css`
            background-color: ${theme.buttons.colors.green};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
        `;
}}
`;

const NormalButton = styled(ButtonStyle1)`
    ${({theme}) => {
    return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
        `;
}}
`;

const BigButton = styled(ButtonStyle1)`
    ${({theme}) => {
    return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
        `;
}}
`;
const MainMenuButton = styled(ButtonStyle1)`
    ${({theme, backgroundColor, backgroundImageUrl}) => {
    return css`
            height:100px;
            position:relative;
            background-color: ${backgroundColor};
            & > *{
                color: ${theme.colors.secondary};
            }
            
            h3, p {
                z-index:1;
            }
            
            h3 {
                font-weight:bold;
                padding-bottom:10px;
            }
            
            p {
                font-size: ${theme.fonts.size.min};
                opacity:.55;
            }
            a {
                position:relative;
                display:block;
                width:100%;
                height:100%;
                padding:5px 25px;
                z-index:1;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:flex-start;
            }
            
            &:before {
                content:"";
                width:130px;
                height:100%;
                filter: grayscale(1);
                opacity: .5;
                background-image: url(${backgroundImageUrl});
                background-size: cover;
                background-repeat: no-repeat;
                position:absolute;
                right:0;
                top:0;
                z-index:0;
            }
            
        `;
}}
`;

const styledButtonComponents = {SmallButton, NormalButton, BigButton, MainMenuButton};

export default styledButtonComponents;