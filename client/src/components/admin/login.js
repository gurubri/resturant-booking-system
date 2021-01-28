import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions";

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

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(loginUser(this.state));
    if (this.state.error !== "") {
      console.log("Log in failed");
    } else {
      setTimeout(() => {
        this.props.history.push("/");
      }, 5000);
    }
  };
  componentWillReceiveProps(next) {
    if (next.user) {
      if (!next.user.login.isAuth) {
        this.setState({
          error: next.user.login.message,
        });
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="loginContainer">
        <h1>Login in here</h1>
        <form onSubmit={this.submitForm} className="loginForm">
          <div className="login_element login_element-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={this.state.email}
              placeholder="Enter your email"
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
              <p>Login failed : {this.state.error}</p>
            </div>
          ) : null}

          <button className="btn-button">Log in</button>
          <h3>
            Don't have an account?
            <Link to="/register">Sign up here</Link>
          </h3>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);
