import React , {useEffect , useState} from "react";
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
import map from "../../Assets/map.png"

export default function Campgrounds() {


  const [data , setData] = useState();

  useEffect(() => {

    try {
      fetch("http://localhost:3211/getCampGrounds")
        .then((resp) => resp.json())
        .then((resp)=> {

          console.log(resp.data);
          setData(resp.data);

        })

    } catch (error) {
      console.log(error);
    }
   

  }, [])



  return (
    <div>
      <Nav />

      {/* search bar!!!!!!!!!! */}

      <div className="searchbar">
        <div style={{ display: "flex" }}>
          <div style={{
              border: "2px solid black",
              height: "50px",
              background: "white",
              borderRadius: "10px",
              borderColor :"#022B3A",
              marginLeft: "-120px",
              marginRight: "79px"
            }}
          >
            <AiOutlineSearch
              size={20}
              style={{ marginTop: "15px", marginLeft: "18px" }}
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
                // backgroundColor:"#f5cac35c"
              }}
              placeholder="Search Place"
            />
          </div>
          <div>
            <p
              style={{
                marginBottom: "0px",
                textAlign: "left",
                marginLeft: "30px",
                marginTop: "0px",
                fontSize: "15px",
              }}
            >
              Prices <span style={{ marginLeft: "150px" }}> Rs.0 - 50,000</span>
            </p>

            <Slider
              style={{
                width: "280px",
                color: "#022B3A",
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
              <a href="#">???????????????</a>
              <a href="#">????????????</a>
              <a href="#">?????????</a>
              <a href="#">??????</a>
            </div>
          </div>

          <Button
            variant="contained"
            style={{ height: "50px", width: "150px" , backgroundColor:"#022B3A" , borderRadius :"20px" , marginLeft : "100px"}}
          >
            {" "}
            Search{" "}
          </Button>
        </div>
      </div>

      <br />
      <br />
      <br />
    <div style={{display :"flex" , marginTop:"-52px" }}>
      
      <div className="cardsMainDiv">
        <div>

      {data && data.map((d)=>(

          <div className="cards">
            <ImageModal image= {`http://localhost:3211/uploads/${d.imageId}`} />
            <div>
              <div style={{ display: "flex" }}>
                <p className="campName"> {d.title} </p>
                <AiOutlineHeart
                  size={30}
                  style={{
                    marginTop: "10px",
                    left: "94%",
                  
                    position: "absolute",
                  }}
                />
              </div>
              <div style={{ marginLeft: "-100px", marginTop: "-15px" }}>
                ???????????????
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

                <p> {d.description} </p>
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
                  ??? Free Cancellation
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
      ))}

        </div>
      </div>
      <div >
        <img className="map" src={map} alt="" />
      </div>
      </div>
    </div>
  );
}
