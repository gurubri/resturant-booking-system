import React, { Component } from "react";
import { auth1 } from "../../actions";
import { connect } from "react-redux";

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (ComposedClass, reload) {
  class Authentication extends Component {
    state = {
      loading: false,
    };
    componentWillMount() {
      this.props.dispatch(auth1());
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        loading: false,
      });

      if (!nextProps.rest.rest.isAuth) {
        if (reload) {
          this.props.history.push("/login_owner");
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
      return (
        <ComposedClass
          {...this.props}
          book={this.props.book}
          user={this.props.user}
        />
      );
    }
  }
  const mapStateToProps = (state) => {
    console.log(state);
    return {
      rest: state.resturant,
      book: state.book,
    };
  };
  return connect(mapStateToProps)(Authentication);
}
