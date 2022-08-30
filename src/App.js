import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/Navbar/Navbar";
import Campgrounds from "./Pages/Campground/Campground";
import AddCampGroundPage from "./Pages/AddCampGround/AddCampGroundPage";

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Campgrounds" element={<Campgrounds />} />
        <Route path="/AddCampgrounds" element={<AddCampGroundPage />} />
      </Routes>
    </div>
  );
}

export default App;
