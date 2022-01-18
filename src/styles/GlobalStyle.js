import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import customReset from "./scss/customReset.scss";
import fonts from "./css/fonts.css";

const GlobalStyle = createGlobalStyle`
    ${customReset};
    ${reset};
    ${fonts};
    
    ${({ theme }) => {
    return css`
        html,body { 
            width:100%; height:100%;
        }
    
        body {
          font-weight: ${theme.fonts.weight.normal};
          font-size: ${theme.fonts.size.base};
          font-family: 'OpenSansRegular', sans-serif;
          letter-spacing:.15px;
          padding:0 15px;
          position:relative;
        }
        
        h1,h3 {
            font-family: 'OpenSansBold', sans-serif;
        }
        
        p {
            font-family: 'OpenSansSemiBold', sans-serif;
        }
      `;
}}
`;

export default GlobalStyle;