import React from "react";
import { songs } from "../assets/songs";

const ForYou = () => {
  return (
    <>
      <div>
        <div>For You</div>
        <input type="text" placeholder="Search Song,Artist" />
      </div>
      <div>
        List of Songs
        <div className="songs">
          {songs.map((song) => (
            <h4 key={song.songName}>{song.songName}</h4>
          ))}
        </div>
      </div>
    </>
  );
};

export default ForYou;
