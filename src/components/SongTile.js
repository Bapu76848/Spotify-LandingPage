import React from "react";

const SongTile = ({ song }) => {
  return (
    <div className="song-tile">
      <div>
        <span>
          <img src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?w=740&t=st=1683449580~exp=1683450180~hmac=5f75a6eeb403c0f5d4e270199724fd2a0a6dad4172a3dbdd2715c0cfd908edf8" />
        </span>
        <span>
          <p>{song.songName}</p>
          <small>{song.artist}</small>
        </span>
      </div>

      <div className="song-duration">
        <p>1:46</p>
      </div>
    </div>
  );
};

export default SongTile;
