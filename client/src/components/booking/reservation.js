import React, { Component } from "react";
import { connect } from "react-redux";
import { getReservation } from "../../actions";
import moment from "moment";

class Reservation extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.dispatch(getReservation(this.props.user.login.id));
    }
  }
  renderReservations(reserves) {
    if (reserves) {
      return reserves.map((item, i) => (
        <div className="reserve">
          <h3> Reservation Name: {item.name}</h3>
          <h4>Table for: {item.noPeople}</h4>
          <h5>
            created at:
            {moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </h5>
        </div>
      ));
    }
  }
  render() {
    console.log(this.props);
    return (
      <section className="reservations">
        <h1>RESERVATIONS</h1>
        {this.props.reservation.book ? (
          this.renderReservations(this.props.reservation.book.doc)
        ) : (
          <p>You have not made any reservationd yet</p>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    reservation: state.book,
  };
};

export default connect(mapStateToProps)(Reservation);
