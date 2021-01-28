import React from "react";

const User = (props) => {
  return (
    <section className="userSection">
      <div className="user_container">
        <div className="avatar">
          <img src="/images/avatar.png" alt="avatar" />
        </div>
        <div className="nfo">
          <div>
            <h1>Name:</h1>
            <p>{props.rest.rest.name}</p>
          </div>
          <div>
            <h1>Details:</h1>
            <p>{props.rest.rest.details}</p>
          </div>
          <div>
            <h1>Email:</h1>
            <p>{props.rest.rest.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
