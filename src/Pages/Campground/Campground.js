import React from "react";
import NavBar1 from "../../Components/Navbar/Navbar";
import Nav from "../../Components/NavBar1/Nav";
import "./Campground.css";
import Cards from "../../Assets/cards.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Slider from "@mui/material/Slider";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiDownArrow } from "react-icons/bi";
import Button from "@mui/material/Button";
import ImageModal from "../../Components/ImageModal";

export default function Campgrounds() {
  return (
    <div>
      <Nav />

      {/* search bar!!!!!!!!!! */}

      <div className="searchbar">
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: "2px solid black",
              height: "50px",
              background: "white",
              borderRadius: "10px",
            }}
          >
            <AiOutlineSearch
              size={20}
              style={{ marginTop: "10px", marginLeft: "20px" }}
            />
            <input
              type="text"
              className="searchInput"
              style={{
                border: "none",
                outline: "none",
                height: "40px",
                marginBottom: "10px",
                fontSize: "20px",
                marginLeft: "20px",
              }}
              placeholder="Search Place"
            />
          </div>
          <div>
            <p
              style={{
                marginBottom: "0px",
                textAlign: "left",
                marginLeft: "20px",
                marginTop: "0px",
                fontSize: "15px",
              }}
            >
              Prices <span style={{ marginLeft: "150px" }}> Rs.0 - 50,000</span>
            </p>

            <Slider
              style={{
                width: "280px",
                color: "black",
                marginLeft: "20px",
                // marginTop: "10px",
              }}
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              {" "}
              Rating <BiDownArrow />{" "}
            </button>
            <div className="dropdown-content">
              <a href="#">⭐⭐⭐⭐⭐</a>
              <a href="#">⭐⭐⭐⭐</a>
              <a href="#">⭐⭐⭐</a>
            </div>
          </div>

          <Button
            variant="contained"
            style={{ height: "50px", width: "150px" }}
          >
            {" "}
            Search{" "}
          </Button>
        </div>
      </div>

      {/* <div className="searchbar">
        <div className="dropdown">
          <button className="dropbtn">Rating</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <Slider
          style={{ width: "200px", color: "black" }}
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div> */}

      {/* CARDS.......!!!! */}

      <br />
      <br />
      <br />
      <div className="cardsMainDiv">
        <div>
          <div className="cards">
            {/* <img src={Cards} className="cardImg" alt="" /> */}
            <ImageModal image={Cards} />
            <div>
              <div style={{ display: "flex" }}>
                <p className="campName">Camp Mustang, Sohna Road</p>
                <AiOutlineHeart
                  size={30}
                  style={{
                    marginTop: "10px",
                    left: "94%",
                    // marginLeft: "30px",
                    position: "absolute",
                  }}
                />
              </div>
              <div style={{ marginLeft: "-100px", marginTop: "-15px" }}>
                ⭐⭐⭐⭐⭐
              </div>
              <div
                className="hoverWala"
                style={{
                  display: "flex",
                  margin: "10px",
                  borderRadius: "20px",
                }}
              >
                <GoLocation
                  size={20}
                  style={{
                    marginTop: "18px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                />

                <p>3.2 km to city centre</p>
              </div>

              <div style={{}}>
                <p style={{ marginTop: "5px" }}>
                  <span
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    8.3
                  </span>{" "}
                  <span style={{ fontWeight: "550" }}>Very Good</span> (1007
                  reviews){" "}
                </p>
              </div>
            </div>
            <div className="priceTag">
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "5px",
                  marginBottom: "5px",
                  fontWeight: "550",
                }}
              >
                Pricing
              </p>
              <p style={{ marginTop: "1px" }}>
                {" "}
                <span
                  style={{
                    color: "green",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  ✅ Free Cancellation
                </span>{" "}
              </p>

              <p style={{ fontSize: "15px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    color: "green",
                    fontWeight: "600",
                  }}
                >
                  Rs. 10999{" "}
                </span>{" "}
                per day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
