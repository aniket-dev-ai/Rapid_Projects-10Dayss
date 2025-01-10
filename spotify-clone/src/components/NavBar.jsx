import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { usestateProvider } from "../utils/StateProvider";
function NavBar( ) {
  const [{ userInfo }] = usestateProvider();

  return (
    <div className="flex w-full justify-between p-4 md:p-6 items-center">
      {/* Search Bar */}
      <div className="flex bg-white w-[60%] md:w-[50%] items-center px-4 py-2 rounded-full">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Artist, Songs, or Playlist"
          className="focus:outline-none ml-4 flex-grow text-black"
        />
      </div>

      {/* Profile Info */}
      <div className="flex gap-2 items-center bg-black text-white px-4 py-2 rounded-full">
        <CgProfile />
        <span className="hidden md:block">{userInfo?.userName}</span>
      </div>
    </div>
  );
}

export default NavBar;
