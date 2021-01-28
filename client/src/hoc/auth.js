import React, { Component } from "react";
import { auth } from "../actions";
import { connect } from "react-redux";

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (ComposedClass, reload) {
  class AuthenticationCheck extends Component {
    state = {
      loading: false,
    };
    componentWillMount() {
      this.props.dispatch(auth());
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        loading: false,
      });

      if (!nextProps.user.login.isAuth) {
        if (reload) {
          this.props.history.push("/login");
        }
      } else {
        if (reload === false) {
          this.props.history.push("/");
        }
      }
    }
    render() {
      if (this.state.loading) {
        return <div className="loader">loading...</div>;
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return connect(mapStateToProps)(AuthenticationCheck);
}
