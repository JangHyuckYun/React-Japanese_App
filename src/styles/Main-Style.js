import styled, {css} from "styled-components";
import Content from "./Content";

const MainStyle = styled(Content)`
    ${({theme}) => {
    return css`   
        .title {
            text-align:left;
            h1 {
                font-weight:bold;
            }
        }
        
        .info-cover {
            width:100%;
            height:100%;
            position:relative;
            margin-top:15px;
            
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap:10px;
            grid-auto-rows: minmax(30px, auto);
        }
    `;
}}
`;

const MainInfo = styled(Content)`
    ${({theme, height, backgroundcolor, gridRow}) => {
    return css`
        width:100%;
        min-height:${height};
        height: auto;
                
        border-radius:25px;
        background:${backgroundcolor};
        ${gridRow ? "grid-row:"+gridRow+";" : ""}
        
        color:rgba(255,255,255, .7);
        padding:10px;
    `;
}}
`;

const styledMainsComponents = {MainStyle, MainInfo};

export default styledMainsComponents;