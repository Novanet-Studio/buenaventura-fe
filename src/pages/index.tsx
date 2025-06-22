import React from "react";

//? layouts
import Main from "@layouts/main";

//? sections
import Welcome from "@components/sections/welcome";
import About from "@components/sections/about";
import Services from "@components/sections/services";

const IndexPage = () => (
  <Main>
    <Services />
    <Welcome />
    <About />
  </Main>
);
export default IndexPage;
