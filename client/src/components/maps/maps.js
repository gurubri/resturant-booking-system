import React, { Component } from "react";
import Map from "./map";
import { getResturants } from "../../actions";
import { connect } from "react-redux";

class Maps extends Component {
  state = {};

  componentWillMount() {
    this.props.dispatch(getResturants());
  }
  render() {
    console.log(this.props);
    return (
      <section className="mapContainer">
        <h1>MAP</h1>
        {this.props.resturants.rest ? <Map {...this.props} /> : null}
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    resturants: state.resturant,
  };
};

export default connect(mapStateToProps)(Maps);

// console.log(user);
