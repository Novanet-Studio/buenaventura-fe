import React from "react";

//? layouts
import Main from "@layouts/main";

//? sections
import Welcome from "@components/sections/welcome";
import About from "@components/sections/about";

const IndexPage = () => (
  <Main>
    <Welcome />
    <About />
  </Main>
);
export default IndexPage;
