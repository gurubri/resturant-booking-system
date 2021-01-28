import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="404">
      <div class="mainbox">
        <h1>404</h1>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
