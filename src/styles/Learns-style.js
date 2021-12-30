import styled, { css } from "styled-components";
import Content from "./Content";

const LearnsStyle = styled(Content)`
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

const styledLearnsComponents = { LearnsStyle };

export default styledLearnsComponents;