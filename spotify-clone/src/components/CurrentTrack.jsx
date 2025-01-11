import React, { useEffect } from "react";
import { usestateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constansts";

function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = usestateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data !== " ") {
        const { item } = response.data;
        const currentPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      }
    };
    getCurrentTrack();
    // console.log(currentPlaying);
    
}, [currentPlaying,dispatch, token]);
// console.log(currentPlaying);
  return (
    <div>
      {currentPlaying && (
        <div className="flex p-3 text-white text-sm gap-5 items-center">
          <div>
            <img className="rounded-md w-14" src={currentPlaying.image} alt="" />
          </div>
          <div>
            <div>{currentPlaying.name}</div>
            <div className="text-xs">{currentPlaying.artists.map((artist) => " "+artist)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentTrack;
