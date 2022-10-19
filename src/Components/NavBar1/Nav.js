import React from "react";
// import MainPage from ""
// import homepage from "../../Assets/homepage.jpg"
import "./Nav.css";
import { Link } from "react-router-dom";
import{AiOutlineHome} from "react-icons/ai"
import{RiSunFoggyLine} from "react-icons/ri"
import{RiContactsFill} from "react-icons/ri"
import{AiOutlineHeart} from "react-icons/ai"
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import yelplogo from "../../Assets/yelplogo.png"
export default function Nav() {
  return (
    <div className="NavBar1">
        {/* <p className="yelpcamp1">Yelpcamp</p> */}
         <img style={{marginLeft: "20px"}} src={yelplogo} alt="" />
        <div className="leftSubDiv1">
  
          {/* <div style={{display : "flex"}}> */}
          
          <AiOutlineHome  size={25} className ="homeicon"  /> 
          <Link to="/" className="linkC">
          <p className="navContent1">Home</p>{" "}
          </Link>
          
           {/* </div> */}
           <RiSunFoggyLine size={25} className ="homeicon"  /> 
        <Link className="linkC" to="/Campgrounds">
          <p className="navContent1">Campgrounds</p>
        </Link>

        <RiContactsFill  size={25} className ="homeicon"  /> 
        <Link className="linkC" to="/Contact">
          <p className="navContent1">Contact</p>
        </Link>
        {/* <p className="navContent1">Contact</p> */}
        {/* <p className="navContent1">Profile</p> */}
        <AiOutlineHeart  size={25} className ="homeicon"  /> 
        <p className="navContent1">Wishlist</p>
        <Avatar src="/broken-image.jpg" sx={{ bgcolor: red[100] }}  className="avatar" />
      </div>
   </div>
  );
}
