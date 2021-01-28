import React from "react";
import moment from "moment";

const Reserves = ({ book }) => {
  return (
    <div>
      {book.book ? (
        book.book.map((item, i) => (
          <div className="reserves">
            <h1>Reservation Name: {item.name}</h1>
            <h1>Reservation Time: {item.time}</h1>
            <h1>Expected Number of people: {item.noPeople}</h1>
            <h5>
              created at:
              {moment(item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </h5>
          </div>
        ))
      ) : (
        <div>
          <p>No reservations made yet</p>
        </div>
      )}
    </div>
  );
};

export default Reserves;
