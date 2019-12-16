import React from "react";

import { GlobalStyle } from "./styles/global";
import { Wrapper, Container, Content } from "./styles/componets";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <Content>
        <Header></Header>
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
