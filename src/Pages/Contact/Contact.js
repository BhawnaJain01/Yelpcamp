import React from "react";
// import NavBar from "../../Components/Navbar/Navbar";



import { Link } from "react-router-dom";
import Nav from "../../Components/NavBar1/Nav";
import "./Contact.css"
import {FaUserAlt} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdOutlineMessage} from "react-icons/md";
import Button from "@mui/material/Button";
export default function Contact() {
  return (
    <div>
        <Nav/>
        <img className="contactimage" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c09999b40c6e5ae784c8eef7/-min.jpg" alt="" />
        
        <div className="contactform">
          <h1 className="headingC" >Contact For Amazing Travel Offers</h1>
          
          <p style={{
            fontSize : "1.3125rem" ,
            color : "rgb(249 249 249)"
           
          }}>Connect with yelpcamp and grab 
          etails about <br /> amaazing camping sites</p>
          
         <div style={{display : "flex"}}>
          <div className="inputcontact">
          <FaUserAlt  size={30} className="icons" /> 
          <input className="inputBoxC" type="text" placeholder="Enter Your Name" />
          </div>

          <div className="inputcontact">
          <AiFillMail  size={30} className="icons" /> 
          <input className="inputBoxC" type="text" placeholder="Enter Your Email" />
          </div>

          <div className="inputcontact">
          <BsFillTelephoneFill  size={30} className="icons" /> 
          <input className="inputBoxC" type="text" placeholder="Telephone" />
          </div>
        </div>
          
        <div className="inputmessage">
          <MdOutlineMessage size={30} className="icons" /> 
          <textarea rows="50" cols="150" className="inputBoxC" type="text" placeholder="MESSAGE" />
        </div>
           
        <Button
            variant="contained"
            style={{ height: "40px", width: "150px" , backgroundColor:"#074957"  , marginLeft : "100px" , marginTop : "15px"}}
          >
            {" "}
            Submmit{" "}
          </Button>

        </div>
    </div>
  );
}
 