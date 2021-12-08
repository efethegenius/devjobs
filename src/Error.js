import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error-container">
      <h1>OOPS!</h1>
      <p>NO SUCH PAGE HERE.</p>
      <Link to="/">
        <button type="button">Back Home</button>
      </Link>
    </div>
  );
};
