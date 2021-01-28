import React, { Component } from "react";
import { registerResturant } from "../../../../actions";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        name: "",
        number: "",
        email: "",
        description: "",
        coord: {
          lat: 0,
          long: 0,
        },
        details: "",
        resturantImgUrl: "",
        password: "",
        repassword: "",
      },
      error: "",
    };
  }

  handleInput = (e, name) => {
    const newFormdata = { ...this.state.formdata };
    newFormdata[name] = e.target.value;

    this.setState({
      formdata: newFormdata,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    if (this.state.formdata.name !== "" || this.state.formdata.number !== "") {
      if (this.state.formdata.password === this.state.formdata.repassword) {
        if (this.state.formdata.coord.lat !== 0) {
          this.props.dispatch(registerResturant(this.state.formdata));
          this.props.history.push("/owner_profile");
        } else {
          this.setState({
            error:
              "Please reload the page and allow the form to gather your location",
          });
        }
      } else {
        this.setState({ error: "Please check your passwords" });
      }
    } else {
      this.setState({ error: "Please check your fill in all form elements" });
    }
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        this.setState({
          formdata: {
            name: "",
            number: "",
            email: "",
            description: "",
            coord: {
              lat: lat,
              long: lng,
            },
            details: "",
            resturantImgUrl: "",
            password: "",
          },
          error: "",
        });
      },
      (error) => {
        console.log(error);
        this.setState({ error: error.message });
        // this.props.promptError("Error dectecting your location");
        console.error(JSON.stringify(error));
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    // console.log(this.props);
    return (
      <section className="registerResturant">
        <div className="instructions">
          <h1>Steps to follow to register resturant</h1>
          <li>Fill in the form below</li>
          <li>Allow the form to gather your location information</li>
          <li>Paste a link to a photo of your resturant</li>
        </div>

        <div>
          <form onSubmit={this.submitForm} className="loginForm">
            <h2>Create new Resturant here</h2>
            <div className="login_element">
              <input
                type="text"
                placeholder="Enter Resturant name"
                value={this.state.formdata.name}
                onChange={(e) => this.handleInput(e, "name")}
              />
            </div>
            <div className="login_element">
              <input
                type="text"
                placeholder="Enter Number"
                value={this.state.formdata.number}
                onChange={(e) => this.handleInput(e, "number")}
              />
            </div>
            <div className="login_element">
              <input
                type="text"
                placeholder="Please paste a Link to resturant image"
                value={this.state.formdata.resturantImgUrl}
                onChange={(e) => this.handleInput(e, "resturantImgUrl")}
              />
            </div>
            <div className="login_element">
              <label htmlFor="text">Resturant Description:</label>

              <textarea
                type="text"
                value={this.state.formdata.description}
                onChange={(e) => this.handleInput(e, "description")}
              />
            </div>

            <div className="login_element">
              <input
                type="email"
                placeholder="Enter Your resturant email"
                value={this.state.formdata.email}
                onChange={(e) => this.handleInput(e, "email")}
              />
            </div>

            <div className="login_element">
              <input
                type="password"
                placeholder="Enter your password"
                value={this.state.formdata.password}
                onChange={(e) => this.handleInput(e, "password")}
              />
            </div>
            <div className="login_element">
              <input
                type="password"
                placeholder="Repeat your password"
                value={this.state.formdata.repassword}
                onChange={(e) => this.handleInput(e, "repassword")}
              />
            </div>
            {this.state.error ? (
              <div className="errorMessage">
                <p>{this.state.error}</p>
              </div>
            ) : null}
            <button type="submit" className="btn-button btn-button-1">
              Add Resturant
            </button>
          </form>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rest: state.resturant,
  };
};
export default connect(mapStateToProps)(Register);
