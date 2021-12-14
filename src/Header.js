import React from "react";
import sun from "./assets/desktop/icon-sun.svg";
import { Link } from "react-router-dom";

export const Header = ({ handleMode, toggleMode, setToggleMode }) => {
  return (
    <div className="header">
      <nav>
        <Link to="/">
          <h1>devjobs</h1>
        </Link>
        <div className="toggle-container">
          <img src={sun} alt="" />
          <div
            className={toggleMode ? "switcher" : "switcher"}
            onClick={() => {
              handleMode();
              // storing the current toggle in the local Storage if dark mode is one
              document.body.classList.contains("dark-mode")
                ? localStorage.setItem("toggle", "enabled")
                : localStorage.setItem("toggle", "disabled");
            }}
          >
            <div
              className={
                // getting the stored toggle and and assigning a class name based on the value
                localStorage.getItem("toggle") === "enabled"
                  ? "switch-button-off switch-button-on"
                  : "switch-button-off"
              }
            ></div>
          </div>
          {/* <img src={moon} alt="" /> */}
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            className="moon"
          >
            <path
              d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};
