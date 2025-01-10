import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

function Spotify() {
  return (
    <div className="h-screen">
      <div className="flex h-[85%]">
        <SideBar></SideBar>
          <div className="bg-[#1D535D] w-[80%]">
          <NavBar></NavBar>
          <div>
            <Body></Body>
          </div>
        </div>
      </div>
      <div className="h-[15%]">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Spotify;
