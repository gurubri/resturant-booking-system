import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";

const Desktop = (props) => {
  const element = (item, i) => (
    <div key={i} className="mainNav-item">
      <FontAwesome name={item.icon} className="desktopIcon" />
      <Link className="mainNav-item-link right" to={item.route}>
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
        : null
        ? null
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

  return <header className="mainNav">{renderNav(props)}</header>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    rest: state.resturant,
  };
};
export default connect(mapStateToProps)(Desktop);
// const renderNav = (props) =>
//     props.user.login
//       ? props.items.map((item, i) => {
//           if (props.user.login.isAuth) {
//             return !item.exclude ? element(item, i) : null;
//           } else {
//             return !item.required ? element(item, i) : null;
//           }
//         })
//       : null;
