import React from "react";
// import MainPage from ""
// import homepage from "../../Assets/homepage.jpg"
import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="NavBar1">
      <p className="yelpcamp1">Yelpcamp</p>
      <div className="leftSubDiv1">
        <Link to="/" className="linkC">
          <p className="navContent1">Home</p>{" "}
        </Link>
        <Link className="linkC" to="/Campgrounds">
          <p className="navContent1">Campgrounds</p>
        </Link>

        <p className="navContent1">Contact</p>
        <p className="navContent1">Profile</p>
        <p className="navContent1">Logout</p>
      </div>
    </div>
  );
}
