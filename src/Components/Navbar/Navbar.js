import React from "react";
// import MainPage from ""
import homepage from "../../Assets/homepage.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import{AiOutlineHome} from "react-icons/ai"
import{RiSunFoggyLine} from "react-icons/ri"
import{RiContactsFill} from "react-icons/ri"
import{AiOutlineHeart} from "react-icons/ai"
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import yelplogo from "../../Assets/yelplogo.png"
export default function NavBar() {
  return (
    // <div className="NavBar">
    //   <p className="yelpcamp">Yelpcamp</p>
    //   <div className="leftSubDiv">
    //     <Link to="/">
    //       <p className="navContent">Home</p>{" "}
    //     </Link>
    //     <Link to="/Campgrounds">
    //       <p className="navContent">Campgrounds</p>
    //     </Link>

    //     <p className="navContent">Contact</p>
    //     <p className="navContent">Profile</p>
    //     <p className="navContent">Logout</p>
    //   </div>
    // </div>

    <div className="NavBar">
    {/* <p className="yelpcamp1">Yelpcamp</p> */}
     <img style={{marginLeft: "20px"}} src={yelplogo} alt="" />
    <div className="leftSubDiv">

      {/* <div style={{display : "flex"}}> */}
      
      <AiOutlineHome  size={25} className ="homeicon"  /> 
      <Link to="/" className="linkC">
      <p className="navContent">Home</p>{" "}
      </Link>
      
       {/* </div> */}
       <RiSunFoggyLine size={25} className ="homeicon"  /> 
    <Link className="linkC" to="/Campgrounds">
      <p className="navContent">Campgrounds</p>
    </Link>

    <RiContactsFill  size={25} className ="homeicon"  /> 
    <Link className="linkC" to="/Contact">
      <p className="navContent">Contact</p>
    </Link>
    {/* <p className="navContent1">Contact</p> */}
    {/* <p className="navContent1">Profile</p> */}
    <AiOutlineHeart  size={25} className ="homeicon"  /> 
    <p className="navContent">Wishlist</p>
    <Avatar src="/broken-image.jpg" className="avatar" sx={{ bgcolor: red[100]}} />
  </div>
</div>
  );
}
