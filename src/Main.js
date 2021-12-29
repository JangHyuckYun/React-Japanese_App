import React, { useState } from "react";
import styledButtonComponents from "./styles/Buttons-style";
import styledMainComponents from "./styles/Main-style";
const { MainMenuButton } = styledButtonComponents;
const { MainStyle } = styledMainComponents;

const Main = () => {
  return (
      <MainStyle>
          <div className="title">
              <h1>Japanese App</h1>
          </div>
          <div className="menus">
              <MainMenuButton backgroundColor="#EB7662">
                  <div className="txt-cover">
                      <h3>Words</h3>
                      <p>this is test lines...</p>
                  </div>
              </MainMenuButton>
              <MainMenuButton backgroundColor="#8DC4BB">
                  <div className="txt-cover">
                      <h3>Grammers</h3>
                      <p>this is test lines...</p>
                  </div>
              </MainMenuButton>
              <MainMenuButton backgroundColor="#F2982F">
                  <div className="txt-cover">
                      <h3>EJU</h3>
                      <p>this is test lines...</p>
                  </div>
              </MainMenuButton>
              <MainMenuButton backgroundColor="#327389">
                  <div className="txt-cover">
                      <h3>Settings</h3>
                      <p>this is test lines...</p>
                  </div>
              </MainMenuButton>
          </div>
      </MainStyle>
  );
};

export default Main;