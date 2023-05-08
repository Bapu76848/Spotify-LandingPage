import React, { useState, createContext } from "react";

export const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({
    __typename: "Song",
    _id: "61b6f14dc2f7cafd968c31fd",
    artist: "Imagine Dragons",
    duration: 560,
    currentTime: 0,
    photo:
      "https://external-preview.redd.it/SEOiJhnBbwkfSbmAHFPh8UrvpyKcRLyVbdtf5DWNtGc.jpg?auto=webp&s=8f815af3594caa6f01ef25d3da2a8b4e1a4239a6",
    title: "It Comes Back to You",
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
  });

  const audio = { element: new Audio(currentSong.url), isPlaying: false };
  return (
    <PlayerContext.Provider value={[audio, currentSong, setCurrentSong]}>
      {children}
    </PlayerContext.Provider>
  );
};
