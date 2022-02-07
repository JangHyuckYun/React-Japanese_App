import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {icon} from "@fortawesome/fontawesome-svg-core";

const FooterStyle = styled.footer`
  ${({theme}) => {
    return css`
      max-width: 800px;
      width: 100%;
      min-height: 100px;
      position: relative;
      left: 50%;
      bottom: 15px;
      transform: translateX(-50%);
      border-radius: 20px;
      background: white;
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, .05);
      padding: 15px 5px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;

      z-index: 999;

      a {
        min-height: 100%;
      }
    `;
  }}
`;

const FooterMenu = styled(Link)`
  ${({theme, backgroundcolor}) => {
    return css`
      position: relative;
      flex: 1;
      margin: 0 10px;
      border-radius: ${theme.borderRadius.base};
      background: ${backgroundcolor};

      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      font-size:${theme.fonts.size.lg};
      
      &.active {
        //background: red;
      }
    `;
  }}
`;

const styledFooterComponents = {FooterStyle, FooterMenu};

export default styledFooterComponents;