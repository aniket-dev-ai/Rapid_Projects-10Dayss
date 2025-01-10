import React, { useEffect, useRef, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { usestateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constansts";
function Body() {
  const [{ token, selectedPlaylist, selectedPlaylists }, dispatch] =
    usestateProvider();
    function convertMsToMinutesAndSeconds(ms) {
      const minutes = Math.floor(ms / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
  useEffect(() => {
    const getinitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylist}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedplaylist = {
        name: response.data.name,
        description: response.data.description,
        imageUrl: response.data.images[0].url,
        tracks: response.data.tracks.items.map((item) => {
          const track = {
            id: item.track.id,
            name: item.track.name,
            artist: item.track.artists.map((artist) => artist.name).join(", "),
            duration: item.track.duration_ms,
            imageUrl: item.track.album.images[2].url,
            album: item.track.album.name,
            context_uri: item.track.album.uri,
            track_number: item.track.track_number,
          };
          return track;
        }),
      };
      dispatch({
        type: reducerCases.SET_PLAYLISTS,
        selectedPlaylists: selectedplaylist,
      });
    };
    getinitialPlaylist();
  }, [token, dispatch, selectedPlaylist]);

  return (
    <div className="bg-[#1D535D] text-sm ">
      {selectedPlaylists && (
        <div className="p-6">
          {/* Playlist Header */}
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div>
              <img
                className="w-52 rounded-md"
                src={selectedPlaylists.imageUrl}
                alt="Playlist Cover"
              />
            </div>
            <div className="text-white uppercase flex flex-col gap-4">
              <h1 className="text-gray-400">Playlist</h1>
              <h1 className="text-5xl font-bold">{selectedPlaylists.name}</h1>
              <h1 className="text-gray-300 text-base">
                {selectedPlaylists.description}
              </h1>
            </div>
          </div>

          {/* Playlist Table Header */}
          <div className="mt-10">
            <div className="flex  text-white text-lg border-b gap-10 border-gray-500 pb-2 px-4">
              <div className="w-1/12">
                <span>#</span>
              </div>
              <div className="w-4/12">
                <span>Title</span>
              </div>
              <div className="w-3/12">
                <span>Artist</span>
              </div>
              <div className="w-2/12">
                <span>Album</span>
              </div>
              <div className="w-1/12 text-center">
                <AiFillClockCircle />
              </div>
            </div>
          </div>

          {/* Playlist Tracks */}
          <div className="text-white flex flex-col gap-5 mt-5 px-4">
            {selectedPlaylists.tracks.map((track, idx) => (
              <div
                key={track.id}
                className="flex items-center gap-4 py-2 hover:bg-[#0f1c1f] rounded-md"
              >
                <div className="w-1/12">
                  <span>{idx + 1}</span>
                </div>
                <div className="w-4/12 flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-sm"
                    src={track.imageUrl}
                    alt={track.name}
                  />
                  <span>{track.name}</span>
                </div>
                <div className="w-3/12">
                  <span>{track.artist}</span>
                </div>
                <div className="w-2/12">
                  <span>{track.album}</span>
                </div>
                <div className="w-1/12 text-center">
                  <span>{convertMsToMinutesAndSeconds(track.duration)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
