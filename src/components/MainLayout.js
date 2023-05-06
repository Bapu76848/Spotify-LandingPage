import React from "react";
import { songs } from "../assets/songs";

const MainLayout = () => {
  return (
    <main>
      <div>
        <div>For You</div>
          <input type="text" placeholder="Search Song,Artist" />
        </div>
      <div>
        List of Songs
        <div className="songs">
          {songs.map((song) => (
            <h4>{song.songName}</h4>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
