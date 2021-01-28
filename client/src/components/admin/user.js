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
            <p>{props.user.login.name}</p>
          </div>
          <div>
            <h1>Lastname:</h1>
            <p>{props.user.login.lastname}</p>
          </div>
          <div>
            <h1>Email:</h1>
            <p>{props.user.login.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
