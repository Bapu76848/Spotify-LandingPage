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
  const [currentSong] = useContext(PlayerContext);
  console.log(currentSong);
  return (
    <aside id="player">
      <div>
        <div className="song-info">
          <h1>{currentSong.title}</h1>
          <p>{currentSong.artist}</p>
        </div>
        <div className="song-img">
          <img width={300} src={currentSong.photo} alt={currentSong.title} />
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
