import React, { useState } from "react";

export default function Booking_component(props) {
  const [state, setState] = useState({
    name: "",
    time: "",
    noPeople: 0,
    id: props.location.pathname.slice(9),
    userid: props.user.login ? props.user.login.id : null,
  });

  const submitForm = (e) => {
    e.preventDefault();
    props.dispatch(props.booking(state));
    props.history.push(`/`);
  };
  const updateName = (e) => {
    setState({ ...state, name: e.target.value });
  };
  const updateTime = (e) => {
    setState({ ...state, time: e.target.value });
  };
  const updateNumber = (e) => {
    setState({ ...state, noPeople: e.target.value });
  };

  const renderPage = (rest) =>
    rest ? (
      <div className="resturantInfo">
        <div className="img">
          <h1>{rest.name}</h1>
          <img src={rest.resturantImgUrl} alt="img" />
        </div>

        <div className="details">
          <div className="menu">
            <h3>Description:</h3>
            <p>{rest.description}</p>
          </div>
          <div className="description">
            <h3>Details:</h3>
            <p>{rest.details}</p>
          </div>
          <div className="contact">
            <h3>Email:</h3>
            {rest.email}
            <h3>Number:</h3>
            {rest.number}
          </div>
        </div>
        <div className="BookingForm">
          <form onSubmit={submitForm}>
            <div className="formInput">
              <h1>BOOK RESTURANT</h1>
              <label htmlFor="name">RESERVATION NAME:</label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={updateName}
              />
            </div>
            <div className="formInput">
              <label htmlFor="time">TIME TO BE RESERVED:</label>
              <input type="time" value={state.time} onChange={updateTime} />
            </div>
            <div className="formInput">
              <label htmlFor="number">NUMBER OF PEOPLE:</label>
              <input
                type="number"
                value={state.number}
                onChange={updateNumber}
              />
            </div>
            <button className="btn-button">Reserve</button>
          </form>
        </div>
      </div>
    ) : null;

  return renderPage(props.resturant.rest);
}
