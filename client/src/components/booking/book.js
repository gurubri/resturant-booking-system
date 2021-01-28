import React, { Component } from "react";
import { connect } from "react-redux";
import { bookResturant, bookingResturant } from "../../actions";

import Booking from "./booking_component";

class Book extends Component {
  componentWillMount() {
    let id = this.props.match.url.slice(9);
    this.props.dispatch(bookResturant(id));
  }
  render() {
    return (
      <div>
        <Booking {...this.props} booking={bookingResturant} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    user: state.user,
    resturant: state.resturant,
  };
};

export default connect(mapStateToProps)(Book);
