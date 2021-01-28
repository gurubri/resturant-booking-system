import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { auth, auth1 } from "../../actions";
import FontAwesome from "react-fontawesome";

// Different navs
import Desktop from "./navigation/desktop";
import Mobile from "./navigation/mobile";

class Header extends Component {
  state = {
    items: [
      {
        name: "Login User",
        icon: "sign-in",
        required: false,
        route: "/login",
        exclude: true,
        client: true,
      },

      {
        name: "Home",
        icon: "home",
        required: false,
        route: "/",
      },
      {
        name: "User Profile",
        icon: "user",
        required: true,
        route: "/user",
        client: true,
      },
      {
        name: "Maps",
        icon: "map",
        required: true,
        route: "/maps",
        client: true,
      },
      {
        name: "Logout",
        icon: "sign-out",
        required: true,
        route: "/logout",
        client: true,
      },
      {
        name: "Logout Owner",
        icon: "sign-out",
        required: true,
        route: "/logout_owner",
        owner: true,
      },

      {
        name: "Reservations",
        icon: "book",
        required: true,
        route: "/reservations",
        client: true,
      },

      {
        name: "Dashboard",
        icon: "dashboard",
        required: true,
        route: "/dashboard",
        owner: true,
      },

      {
        name: "Owner Profile",
        icon: "book",
        required: true,
        route: "/owner_profile",
        owner: true,
      },
      {
        name: "Login Owner",
        icon: "truck",
        required: false,
        route: "/login_owner",
        exclude: true,
        owner: true,
      },
    ],
    showNav: false,
  };
  onHideNav = () => {
    this.setState({
      showNav: false,
    });
  };

  componentWillMount() {
    this.props.dispatch(auth());
    this.props.dispatch(auth1());
  }

  render() {
    return (
      <header className="mainNav">
        <MediaQuery minDeviceWidth={1224}>
          <Desktop items={this.state.items} />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <FontAwesome
            name="bars"
            style={{
              color: "#ffb900",
              paddingLeft: "1rem",
              cursor: "pointer",
              fontSize: "3rem",
            }}
            onClick={() => this.setState({ showNav: true })}
          />
          <Mobile
            {...this.state}
            onHideNav={this.onHideNav}
            items={this.state.items}
          />
        </MediaQuery>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user,
    rest: state.resturant,
  };
};

export default connect(mapStateToProps)(Header);
