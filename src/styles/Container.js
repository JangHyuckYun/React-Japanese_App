import styled, {css} from "styled-components";
//이제는 어떻게 사랑을 하나요
const Container = styled.div`
  ${({theme}) => {
    return css`
      max-width: 800px;
      height: calc(var(--vh, 1%) * 100);
      position: relative;
      top:0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 85px;
      overflow-y: auto;
    `;
  }}
`;

export default Container;