import React from "react";
import axios from "axios";

const Logout = (props) => {
  axios.get(`/api/logout_user`).then((res) => {
    setTimeout(() => {
      props.history.push("/login_owner");
    }, 1000);
  });
  return (
    <div className="logout_container">
      <h1>Sorry to see you leave</h1>
    </div>
  );
};

export default Logout;
