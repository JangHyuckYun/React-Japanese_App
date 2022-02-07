import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const MenusStyle = styled.div`
    ${({ theme }) => {
    return css`
      width:100%;
      position:relative;
      max-height:100%;
      overflow-y:auto;
      margin-bottom:15px;
      
      -ms-overflow-style: none;
      scrollbar-width: none;
      
      &::-webkit-scrollbar {
        display: none;
      }
    `;
}}
`;

const LevelItem = styled(motion.div)`
    ${({ theme, backgroundcolor, isClick, zIndex }) => {
    return css`
        display:flex;
        align-items:center;
        width:100%;
        min-height:80px;
        padding:10px;
        cursor:pointer;
        border-radius:15px;
        background:${backgroundcolor};
        margin: 10px 0;
        transition: .3s;
        position: relative;
        
        & * {
            color:white;
            font-weight:bold;
        }
      
      z-index: ${zIndex};
    `;
}}
`;

const styledLevelComponents = { MenusStyle, LevelItem };

export default styledLevelComponents;