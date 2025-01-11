import React from "react";
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import Playlist from "./Playlist";


function SideBar() {
  return (
    <div className="bg-black w-[20%] h-[88vh] text-white p-2">
      <div className="flex flex-col gap-10 items-center">
        <div>
          <img
            className="w-[75%] m-auto mt-2"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul className="flex gap-3 text-sm flex-col">
          <li className="flex gap-5">
            <MdHomeFilled></MdHomeFilled>
            <span>Home</span>
          </li>
          <li className="flex gap-5">
            <MdSearch></MdSearch>
            <span>Search</span>
          </li>
          <li className="flex gap-5">
            <IoLibrary></IoLibrary>
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlist></Playlist>
    </div>
  );
}

export default SideBar;
