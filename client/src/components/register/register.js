import { connect } from "react-redux";
import React, { Component } from "react";
import { userRegister } from "../../actions";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    lastname: "",
    error: "",
    repassword: "",
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
  handleInputRePassword = (e) => {
    this.setState({
      repassword: e.target.value,
    });
  };

  handleInputName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleInputLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.repassword) {
      this.setState({ error: "User created succesfully" });
      this.props.dispatch(
        userRegister(
          {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname,
          },
          this.props.user.users
        )
      );
      setTimeout(() => {
        this.props.history.push("/login");
      }, 5000);
    } else {
      this.setState({
        ...this.state,
        error: "Your passwords don't match please try again",
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="signupContainer ">
        <h2>Sign up</h2>
        <form onSubmit={this.submitForm} className="loginForm">
          <div className="login_element">
            <input
              type="text"
              placeholder="Enter name "
              value={this.state.name}
              onChange={this.handleInputName}
            />
          </div>
          <div className="login_element">
            <input
              type="text"
              placeholder="Enter lastname"
              value={this.state.lastname}
              onChange={this.handleInputLastname}
            />
          </div>
          <div className="login_element">
            <input
              className="mail"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
          </div>
          <div className="login_element">
            <input
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </div>
          <div className="login_element">
            <input
              type="password"
              placeholder="Repeat  Password"
              value={this.state.repassword}
              onChange={this.handleInputRePassword}
            />
          </div>
          {this.state.error ? (
            <div className="errorMessage">
              <p>{this.state.error}</p>
            </div>
          ) : null}
          <button type="submit" className="btn-button">
            Register
          </button>
          <p>
            Have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Register);
