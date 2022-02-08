import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {icon} from "@fortawesome/fontawesome-svg-core";

const FooterStyle = styled.footer`
  ${({theme}) => {
    return css`
      max-width: 800px;
      width: calc((65px * 5) + (8px * 2) );
      min-height: 85px;
      position: fixed;
      left: 50%;
      bottom: 5px;
      transform: translateX(-50%);
      border-radius: 20px;
      background: white;
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, .05);

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      z-index: 999;

      a {
        min-height: 100%;
      }
    `;
  }}
`;

const FooterMenu = styled(Link)`
  ${({theme, backgroundcolor}) => {
    console.log("FooterStyle", FooterStyle);
    return css`
      position: relative;
      bottom: 1px;
      width: 65px;
      height: 65px;
      margin: 0 8px;
      border-radius: ${theme.borderRadius.base};
      background: ${backgroundcolor};

      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      font-size:${theme.fonts.size.base};
    `;
  }}
`;

const styledFooterComponents = {FooterStyle, FooterMenu};

export default styledFooterComponents;