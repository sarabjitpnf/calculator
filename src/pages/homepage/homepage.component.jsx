import React from "react";

import { Link } from "react-router-dom";

import "../../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <header className="App-header">
      <FontAwesomeIcon icon={faCalculator} className="App-logo" size="10x" />
      <p>ReactJS based Calculator</p>
      <Link to="/calculator/start" className="App-link">
        Get Started
      </Link>
    </header>
  );
};

export default Homepage;
