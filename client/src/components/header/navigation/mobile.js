import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SideNav from "react-simple-sidenav";
import FontAwesome from "react-fontawesome";

const Desktop = (props) => {
  const element = (item, i) => (
    <div key={i} className="mainNav-item" onClick={props.onHideNav}>
      <Link className="mainNav-item-link" to={item.route}>
        <FontAwesome name={item.icon} />
        {item.name}
      </Link>
    </div>
  );
  const renderNav = (props) => {
    return props.items.map((item, i) =>
      item.owner
        ? props.rest.rest
          ? props.rest.rest.isAuth
            ? !item.exclude
              ? element(item, i)
              : null
            : !item.required
            ? element(item, i)
            : null
          : null
        : item.client
        ? props.user.login
          ? props.user.login.isAuth
            ? !item.exclude
              ? element(item, i)
              : null
            : !item.required
            ? element(item, i)
            : null
          : null
        : null
    );
  };

  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "#1a2c5b",
        maxWidth: "220px",
      }}
      className="sidenav"
    >
      {renderNav(props)}
    </SideNav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    rest: state.resturant,
  };
};
export default connect(mapStateToProps)(Desktop);
