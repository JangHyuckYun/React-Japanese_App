import React, { useState } from "react";
import styledButtonComponents from "./styles/Buttons-style";
import styledMainComponents from "./styles/Main-style";
const { SmallButton, NormalButton, BigButton } = styledButtonComponents;
const { MainStyle } = styledMainComponents;

const Main = () => {
  return (
      <MainStyle>
          <SmallButton>Words</SmallButton>
          <SmallButton>Grammers</SmallButton>
          <SmallButton>EJU</SmallButton>
          <SmallButton>Settings</SmallButton>
      </MainStyle>
  );
};

export default Main;