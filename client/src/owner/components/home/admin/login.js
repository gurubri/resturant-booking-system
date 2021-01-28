import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ownerLogin } from "../../../../actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    success: false,
  };
  handleInputEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleInputPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  componentDidMount() {
    // console.log(this.state.password);
    // this.props.dispatch(loginUser());
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(ownerLogin(this.state));
    if (this.state.error !== "") {
      console.log("Log in failed");
    } else {
      setTimeout(() => {
        this.props.history.push("/");
      }, 5000);
    }
  };
  componentWillReceiveProps(next) {
    if (next.rest) {
      if (!next.rest.rest.isAuth) {
        this.setState({
          error: next.rest.rest.message,
        });
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="loginContainer">
        <form onSubmit={this.submitForm} className="loginForm">
          <h1>Login in here</h1>
          <div className="login_element login_element-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={this.state.email}
              placeholder="Enter your Resturant email"
              onChange={this.handleInputEmail}
            />
          </div>

          <div className="login_element login_element-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </div>
          {this.state.error ? (
            <div className="errorMessage">
              <p>Login failed: {this.state.error}</p>
            </div>
          ) : null}

          <button className="btn-button">Log in</button>
          <h3>
            Wanna register your resturant?
            <Link to="/register_resturant">Sign up here</Link>
          </h3>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    resturant: state.resturant,
  };
};

export default connect(mapStateToProps)(Login);
