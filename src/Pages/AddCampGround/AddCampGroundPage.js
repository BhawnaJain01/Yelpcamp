import React from "react";
import "./AddCampGroundPage.css";
import image from "../../Assets/image.jpg";
import Nav from "../../Components/NavBar1/Nav";

export default function AddCampGroundPage() {
  return (
    <>
      <Nav />
      <div className="addMainDiv">
        <p style={{ fontSize: "30px", fontWeight: "600" }}>Add Camp Ground</p>
        {/* <img className="image" src={image} alt="" /> */}
        <div className="formDiv">
          <div>
            <div className="inputDiv">
              <p className="titleName">Name</p>
              <input className="inputBox" type="text" />
            </div>

            <div className="inputDiv">
              <p className="titleName">Description</p>
              <input className="inputBox" type="text" />
            </div>

            <div className="inputDiv">
              <p className="titleName">Location</p>
              <input className="inputBox" type="text" />
            </div>

            <div className="inputDiv  imageInput">
              <p className="titleName">Image</p>
              <input
                style={{ width: "430px" }}
                className="inputBox"
                type="text"
              />
              <button className="uploadBtn">Uplaod</button>
            </div>

            <button className="addBtn">Add New CampGround</button>
          </div>
        </div>
      </div>
    </>
  );
}
