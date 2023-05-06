import React from "react";
import {
  IoEllipsisHorizontal,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
} from "react-icons/io5";
const Player = () => {
  return (
    <aside id="player">
      <div>
        <h1>Grand Escape feat Tokyo Miura</h1>
        <p>Tokyo Miura</p>
      </div>
      <div>
        <img
          width={300}
          src="https://images.pexels.com/photos/5990737/pexels-photo-5990737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="poster"
        />
      </div>

      <div>
        <div>
          <input type="range" />
        </div>
        <div>
          <span>
            <button>
              <IoEllipsisHorizontal />
            </button>
          </span>
          <span>
            <button>
              <IoPlayBack />
            </button>
            <button>
              <IoPlay />
            </button>

            <button>
              <IoPlayForward />
            </button>
          </span>
          <span>
            <button>
              <IoVolumeHigh />
            </button>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Player;
