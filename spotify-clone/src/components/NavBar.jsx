import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { usestateProvider } from "../utils/StateProvider";
function NavBar() {
  const [{ userInfo }] = usestateProvider();
  
  return (
    <div className="flex w-full justify-between p-10">
      <div className="flex bg-white w-[50%] items-center p-2 rounded-full">
        <FaSearch></FaSearch>
        <input type="text" placeholder="Artist , songs or Playlist" className="mt-0 focus:outline-none ml-4"/>
      </div>
      <div className="flex gap-2 items-center justify-center bg-black text-white p-2 rounded-full pr-6">
        <CgProfile></CgProfile>
        <span>{userInfo?.userName}</span>
      </div>
    </div>
  );
}

export default NavBar;
