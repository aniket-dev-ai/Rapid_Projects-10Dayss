import React, { useEffect } from "react";
import axios from "axios";
import { usestateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constansts";

function Playlist() {
  const [{ token, playlists }, dispatch] = usestateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const { items } = response.data;
        const playlists = items.map(({ name, id }) => {
          return { name, id };
        });
        dispatch({ type: reducerCases.SET_PLAYLIST, playlists });
      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };

    getPlaylistData();
  }, [token, dispatch]);

  return (
    <div>
      <ul className="p-2 ml-4 flex flex-col text-sm gap-2 mt-16">
        {playlists?.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
