import React from "react";
// import MainPage from ""
import homepage from "../../Assets/homepage.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="NavBar">
      <p className="yelpcamp">Yelpcamp</p>
      <div className="leftSubDiv">
        <Link to="/">
          <p className="navContent">Home</p>{" "}
        </Link>
        <Link to="/Campgrounds">
          <p className="navContent">Campgrounds</p>
        </Link>

        <p className="navContent">Contact</p>
        <p className="navContent">Profile</p>
        <p className="navContent">Logout</p>
      </div>
    </div>
  );
}
