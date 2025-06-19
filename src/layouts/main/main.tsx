import React from "react";

//? components
import Header from "./header";
import Footer from "./footer";

const Main = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <div className="container-main">
      <main className="container-layout">{children}</main>
    </div>
    <Footer />
  </>
);

export default Main;
