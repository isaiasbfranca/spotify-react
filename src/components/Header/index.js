import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/15980407?s=460&v=4"
        alt="avatar"
      />
      Isaias Batista
    </User>
  </Container>
);

export default Header;
