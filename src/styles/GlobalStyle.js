import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import customReset from "./scss/customReset.scss";

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${customReset};
    
    ${({ theme }) => {
    return css`
        body {
          font-family: ${theme.fonts.family.base};
          font-weight: ${theme.fonts.weight.normal};
          font-size: ${theme.fonts.size.base};
        }
      `;
}}
`;

export default GlobalStyle;