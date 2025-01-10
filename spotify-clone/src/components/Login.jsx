import React from "react";

function Login() {
  const handleclick = () => {
    const clientId = "808f8edee31845f784268e66db09a26a";
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "http://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        "       "
        )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="h-screen w-full bg-[#1EB953] flex flex-col gap-16 justify-center items-center">
      <img
        className="w-[35%]"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png"
        alt="spotify"
      />
      <button
        onClick={handleclick}
        className="text-[#1EB953] bg-black px-14 py-2 rounded-3xl font-semibold"
      >
        Connect Spotify
      </button>
    </div>
  );
}

export default Login;
