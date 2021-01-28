import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Layout = (props) => {
  return (
    <div>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
