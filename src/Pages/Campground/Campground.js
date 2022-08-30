import React from "react"
import NavBar1 from "../../Components/Navbar/Navbar";
import Nav from "../../Components/NavBar1/Nav";
import "./Campground.css"
import Cards from "../../Assets/cards.jpg"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Slider from '@mui/material/Slider';
import { AiOutlineHeart } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
export default function Campgrounds() {
  return (
    <div>
    <Nav/>
     

      {/* search bar!!!!!!!!!! */}

      <div className="searchbar">



    <div className="dropdown">
     <button className="dropbtn">Rating</button>
     <div className="dropdown-content">
     <a href="#">Link 1</a>
     <a href="#">Link 2</a>
     <a href="#">Link 3</a>
    </div>
</div>


<Slider style={{width:"200px" , color:"black"}} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </div>

    {/* CARDS.......!!!! */}
    <div className="cardsMainDiv">
       <div  >
        <div className="cards">
          <img src={Cards} className="cardImg" alt="" />

          <div>
            <div style={{display : "flex"}} >
            <p className="campName" >Camp Mustang, Sohna Road</p>
    <AiOutlineHeart size={20} style={{marginTop : "15px" , marginLeft : "40px"}} />
            </div>
                  <div style={{marginLeft : "-175px" ,  marginTop : "-15px"}} >
                  ⭐⭐⭐⭐⭐

                  </div>
                  <div style={{display : "flex"}} >
                  <GoLocation size={20} style={{ marginTop : "20px" , marginLeft : "20px"}} />
   
                   <p>3.2 km to city centre</p>
    
                  </div>

                  <div>

                  </div>
          </div>
          <div className="priceTag" >
     <p>price</p>

          </div>
        </div>

       </div>
    </div>




    </div>
  );                                                                        
}