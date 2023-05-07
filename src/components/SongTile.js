import React from "react";

const SongTile = ({ song }) => {
  return (
    <div className="song-tile">
      <div>
        <span>
          <img src={song.photo} />
        </span>
        <span>
          <p>{song.title}</p>
          <small>{song.artist}</small>
        </span>
      </div>

      <div className="song-duration">
        <p>
          {(song.duration / 60).toString().replace(".", ":").substring(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default SongTile;
