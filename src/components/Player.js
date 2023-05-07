import React, { useContext } from "react";
import {
  IoEllipsisHorizontal,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
} from "react-icons/io5";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const currentSong = useContext(PlayerContext);
  console.log(currentSong)
  return (
    <aside id="player">
      <div>
        <div className="song-info">
          <h1>{currentSong}</h1>
          <h1>Grand Escape feat Tokyo Miura</h1>
          <p>Tokyo Miura</p>
        </div>
        <div className="song-img">
          <img
            width={300}
            src="https://images.pexels.com/photos/5990737/pexels-photo-5990737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="poster"
          />
        </div>

        <div className="song-controls">
          <div>
            <input type="range" />
          </div>
          <div className="controls-handlers">
            <span>
              <button className="bg-dark">
                <IoEllipsisHorizontal />
              </button>
            </span>
            <span>
              <button>
                <IoPlayBack />
              </button>
              <button className="bg-white">
                <IoPlay />
              </button>

              <button>
                <IoPlayForward />
              </button>
            </span>
            <span>
              <button className="bg-dark">
                <IoVolumeHigh />
              </button>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Player;
