import React, { useContext, useEffect, useRef } from "react";

import {
  IoEllipsisHorizontal,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
  IoPause,
} from "react-icons/io5";
import { PlayerContext } from "../context/PlayerContext";
import { MusicContext } from "../context/MusicContext";

const Player = () => {
  // useEffect(() => {
  //   first;
  // }, [third]);
  const [audio, currentSong, setCurrentSong] = useContext(PlayerContext);
  const [songs, setSongs] = useContext(MusicContext);
  const rangeControl = useRef();
  audio.element.ontimeupdate = (e) => {
    currentSong.currentTime = audio.currentTime;
    rangeControl.current.value = Math.floor(
      (audio.element.currentTime / audio.element.duration) * 100
    );
  };
  function handleSeek(e) {
    audio.element.currentTime = (e.target.value * audio.element.duration) / 100;
  }
  function handlePlayPause() {
    if (audio.isPlaying) {
      audio.element.pause();
      audio.isPlaying = false;
    } else {
      audio.element.play();
      audio.isPlaying = true;
    }
    console.dir(audio);
  }
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
            <input
              type="range"
              ref={rangeControl}
              value={0}
              max={100}
              onChange={handleSeek}
            />
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
              <button className="bg-white" onClick={handlePlayPause}>
                {audio.isPlaying ? <IoPause /> : <IoPlay />}
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
