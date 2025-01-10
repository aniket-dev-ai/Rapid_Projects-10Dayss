import Playlist from "../components/Playlist";
import { reducerCases } from "./Constansts";

export const initialState = {
  token: null,
  playlists:[],
  userInfo:null,
  selectedPlaylist:'1rdLAa0cTMBCNbZfwX3AiX',
  selectedPlaylists:null
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLISTS:{
      return{
        ...state,
        selectedPlaylists:action.selectedPlaylists
      }
    }
    default:
      return state;
  }
};

export default reducer;
