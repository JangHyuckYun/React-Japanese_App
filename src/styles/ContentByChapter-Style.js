import styled, {css, keyframes} from "styled-components";
import Content from "./Content";

const getShow = (height) => {
    return keyframes`
      0% {
        visibility: hidden;
        height: 0;
      }
      1% {
        visibility: visible;
      }

      100% {
        height: ${height};
        visibility: visible;
      }
    `;
};

const getHide = (height) => {
    return keyframes`
      0% {
        height: ${height};
        visibility: visible;
      }

      99% {
        visibility: hidden;
      }
      100% {
        height: 0;
        visibility: hidden;
      }
    `;
};

const getNone = () => {
    return keyframes`
      0% {
        visibility: hidden;
        height: 0;
      }
      100% {
        visibility: hidden;
        height: 0;
      }
    `;
}
export default styled.div`
  ${({duration, testHeight, isShow, isAnimation, theme}) => {
    let height = `${window.innerHeight - 205}px`;
    
    return css`
      width: 100%;
      height: 0;
      background: #6a8ff1;
      border-radius: 15px;
      position: absolute;
      top: ${testHeight}px;
      left: 0;
      visibility: hidden;
      cursor: auto;
      z-index: 999;

      animation: ${isAnimation ? (isShow ? getShow(height) : getHide(height)) : getNone()} .5s ${isShow ? (duration * 2) : 0}s forwards;
      
      button {
        background: none;
        border: none;
        color:white;
        font-size: 32px;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        
        .prevButton {
          left:5px;
        }

        .nextButton {
          right:5px;
        }
      }
      
      .slide-outer {
        position: relative;
        justify-content: center;
        .SlideStyles {
          width: 93%;
          height: 85%;
          background: #ff5a5a;
          border-radius: ${theme.borderRadius.base};
          .slide-inner {

          }
          
        }
      }
    `;
  }}
`;