import React, { createContext, useState } from "react";

export const PlayerContext = createContext({
  songName: "Alone",
  artist: "Alan Walker",
  songSource: "Alan Walker - Alone",
  songPoster: "alone",
});

export const PlayerContextProvider = ({ children }) => {
  const { currentSong, setCurrentSong } = useState({
    songName: "Alone",
    artist: "Alan Walker",
    songSource: "Alan Walker - Alone",
    songPoster: "alone",
  });
  return (
    <PlayerContext.Provider value={currentSong}>
      {children}
    </PlayerContext.Provider>
  );
};
