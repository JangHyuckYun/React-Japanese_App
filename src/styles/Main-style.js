import styled, { css } from "styled-components";
import Content from "./Content";

const MainStyle = styled(Content)`
    ${({ theme }) => {
    return css`
        
        .title {
            text-align:left;
            padding-bottom:50px;
            
            h1 {
                font-weight:bold;
            }
            
        }
    `;
}}
`;

const styledMainComponents = { MainStyle };

export default styledMainComponents;