import React, { useContext, useEffect, useRef, useState } from "react";

import {
  IoEllipsisHorizontal,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
} from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { PlayerContext } from "../context/PlayerContext";
import { MusicContext } from "../context/MusicContext";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useContext(PlayerContext);
  const [songs, setSongs] = useContext(MusicContext);
  const [currentTimePercent, setCurrentTimePercent] = useState(0);
  const audio = useRef();
  const rangeControl = useRef();

  useEffect(() => {
    audio.current.src = currentSong.url;
    if (!currentSong.isFirst) {
      audio.current.play();
      setIsPlaying(true);
    }
    console.log(currentSong);
  }, [currentSong]);
  useEffect(() => {
    updateRangeControl();
  }, [currentTimePercent]);

  function handleTimeUpdate(e) {
    currentSong.currentTime = audio.current.currentTime;
    setCurrentTimePercent(
      Math.floor((audio.current.currentTime / audio.current.duration) * 100)
    );
  }

  function handleSeek(e) {
    audio.current.currentTime = (e.target.value * audio.current.duration) / 100;
    console.log("seek", e.target.value);
    setCurrentTimePercent(
      Math.floor((audio.current.currentTime / audio.current.duration) * 100)
    );
    rangeControl.current.value = `${currentTimePercent}`;
  }

  function updateRangeControl() {
    rangeControl.current.value = currentTimePercent;
    rangeControl.current.nextElementSibling.children[0].style.width = `${currentTimePercent}%`;
    rangeControl.current.nextElementSibling.nextElementSibling.style.left = `${currentTimePercent}%`;
  }

  function handlePlayPause() {
    console.dir(audio.current);
    if (isPlaying) {
      audio.current.pause();
      setIsPlaying(false);
    } else {
      audio.current.play();
      setIsPlaying(true);
    }
  }

  function handleNextAndPrevious(e) {
    const target = e.target.closest("button");
    const index = songs.findIndex((song) => song._id == currentSong._id);

    if (target.dataset.type === "next") {
      if (index + 1 < songs.length) {
        setCurrentSong({ ...songs[index + 1], isFirst: false });
        return;
      }
      setCurrentSong({ ...songs[0], isFirst: false });
    }

    if (target.dataset.type == "previous") {
      if (index <= 0) {
        setCurrentSong({ ...songs[songs.length - 1], isFirst: false });
        return;
      }
      setCurrentSong({ ...songs[index - 1], isFirst: false });
    }
  }
  return (
    <aside id="player">
      <div>
        <div className="song-info">
          <h1>{currentSong.title}</h1>
          <p>{currentSong.artist}</p>
          <audio
            onTimeUpdate={handleTimeUpdate}
            ref={audio}
            hidden
            src={currentSong.url}
          ></audio>
        </div>
        <div className="song-img">
          <img width={300} src={currentSong.photo} alt={currentSong.title} />
        </div>

        <div className="song-controls">
          <div className="range">
            <input
              type="range"
              ref={rangeControl}
              min={0}
              value={0}
              max={100}
              onInput={handleSeek}
            />
            <div className="range-style-bg">
              <div className="range-style"></div>
            </div>
            <div className="dot"></div>
          </div>
          <div className="controls-handlers">
            <span>
              <button className="bg-dark">
                <IoEllipsisHorizontal />
              </button>
            </span>
            <span>
              <button data-type="previous" onClick={handleNextAndPrevious}>
                <IoPlayBack />
              </button>
              <button className="bg-white" onClick={handlePlayPause}>
                {isPlaying ? (
                  <TbPlayerPauseFilled className="pause" />
                ) : (
                  <IoPlay className="play" />
                )}
              </button>

              <button data-type="next" onClick={handleNextAndPrevious}>
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
