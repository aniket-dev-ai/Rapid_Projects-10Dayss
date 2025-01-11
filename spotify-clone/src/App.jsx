import React, { useEffect } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { usestateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constansts";

function App() {
  const [{ token }, dispatch] = usestateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div>{token ? <Spotify></Spotify> : <Login></Login>}</div>;
}

export default App;
