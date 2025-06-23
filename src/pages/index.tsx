import React from "react";

//? layouts
import Main from "@layouts/main";

//? sections
import Welcome from "@components/sections/welcome";
import About from "@components/sections/about";
import Services from "@components/sections/services";
import Additionals from "@components/sections/additionals";

const IndexPage = () => (
  <Main>
    <Welcome />
    <About />
    <Services />
    <Additionals />
  </Main>
);
export default IndexPage;
