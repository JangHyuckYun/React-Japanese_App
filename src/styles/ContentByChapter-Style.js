import styled, {css} from "styled-components";
import Content from "./Content";
const height = 500;
export default styled.div`
    ${() => {
    return css`
      width: 100%;
      height: ${height}px;
      background: red;
      opacity: .5;
      position: absolute;
      bottom: -${height}px;
      left: 0;
    `;
}}
`;