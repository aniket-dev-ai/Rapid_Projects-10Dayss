import React, { useEffect , useRef , useState } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";
import { usestateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constansts";

function Spotify() {
  const [{ token }, dispatch] = usestateProvider();
 

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userID: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-grow">
        <SideBar />
        <div
          
          className="bg-[#1D535D] w-full md:w-[80%] overflow-y-auto max-h-[85vh]"
        >
          <NavBar  />
          <Body  />
        </div>
      </div>
      <div className="h-[15%]">
        <Footer />
      </div>
    </div>
  );
}

export default Spotify;
