import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Dil Mere", duration: "3:31" },
    { title: "Ve Maahi", duration: "3:44" },
    { title: "Aftaab", duration: "3:53" },
    { title: "Daryaa", duration: "4:21" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
