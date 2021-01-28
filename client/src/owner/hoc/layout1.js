import React from "react";
import Header2 from "../components/header/header";
import Footer from "../../components/footer/footer";

const Layout1 = (props) => {
  return (
    <div>
      <Header2 />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout1;
