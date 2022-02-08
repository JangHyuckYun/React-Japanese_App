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
        z-index: 5;
        &.prevButton {
          left:4px;
        }

        &.nextButton {
          right:4px;
        }
      }
      
      .slide-outer {
        position: relative;
        justify-content: center;
        .SlideStyles {
          width: 93%;
          height: 85%;
          border-radius: ${theme.borderRadius.base};
          position: relative;
          z-index: 1;
          .slide-inner {
            width: 100%;
            height: 100%;
            padding: 0;
            perspective: 2000px;
            
            .slideCard {
              width: 100%;
              height: 100%;
              position: relative;
              transform: rotateY(0deg);
              transform-style: preserve-3d;
              transition: .4s;
              padding: 0;
              
              &.card-rotate {
                transform: rotateY(180deg);
              }
              
              .card-cover {
                background: none;
                visibility: hidden;
                z-index: -99;
              }
              
              .side-card {
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 15px;
                left: 0;
                top: 0;
                backface-visibility: hidden;
                
                &.card-front {
                  z-index: 1;
                  background: #EB7662;
                }
                
                &.card-back {
                  background: #8DC4BB;
                  transform: rotateY(180deg);
                }
              }
            }
          }
          
        }
      }
    `;
  }}
`;