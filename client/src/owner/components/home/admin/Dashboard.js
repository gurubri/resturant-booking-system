import React, { Component } from "react";
import { connect } from "react-redux";
import { getReservations } from "../../../../actions";

import Reserves from "./reserves";

class Dashboard extends Component {
  state = {
    render: 0,
  };
  componentDidMount() {
    this.props.dispatch(getReservations(this.props.rest.rest.id));
    this.setState({ render: 0 + 1 });
    // this.props.dispatch(getUser(this.props.book.book.userId));
  }

  render() {
    console.log(this.props);
    return (
      <div className="reservation">
        <h1>Reservations</h1>
        {this.props.book.book ? <Reserves {...this.props} /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rest: state.resturant,
    book: state.book,
  };
};
export default connect(mapStateToProps)(Dashboard);
