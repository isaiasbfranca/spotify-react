import React from "react";

import { GlobalStyle } from "./styles/global";
import { Wrapper, Container } from "./styles/componets";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
