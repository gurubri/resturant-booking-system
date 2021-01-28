import React, { Component } from "react";
import Slider from "./slider/slider";
import { SliderData } from "../components/slider/sliderData";
import { Link } from "react-router-dom";

class Home extends Component {
  viewMaps(push) {
    push("/maps");
  }
  viewLogin(push) {
    push("/login");
  }
  render() {
    return (
      <section className="Home">
        <Slider data={SliderData} />
        <div className="cards">
          <div className="card card-1">
            <h1>What is it that we do?</h1>
            <p>
              We help users locate resturants and bars. Head over to maps and
              see the available resturants and Bars in your region
            </p>
            <Link className="btn" to="/maps">
              View Maps &rarr;
            </Link>
          </div>
          <div className="card card-2">
            <h1>How we do it?</h1>
            <p>
              We use the information you provide and help you book a table in
              your desired resturant.You need an account in order to use our
              services.{" "}
            </p>
            <Link className="btn" to="/login">
              Login &rarr;
            </Link>
          </div>
          <div className="card card-3">
            <h1>How to register?</h1>
            <p>
              CLick the button below and head over to our registration page.
            </p>
            <Link className="btn" to="/Register">
              Register &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
