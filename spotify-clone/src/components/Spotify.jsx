import React, { useEffect } from "react";
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
      console.log({ data });
      const userInfo = {
        userID: data.id,
        userName: data.display_name,
      };
      console.log("USERID = ",{ userInfo });
      
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

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
