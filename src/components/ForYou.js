import React from "react";
import { songs } from "../assets/songs";
import { IoSearch } from "react-icons/io5";
import SongTile from "./SongTile";

const ForYou = () => {
  return (
    <>
      <h1>For You</h1>
      <div className="search-wrapper">
        <input type="search" placeholder="Search Song, Artist" />
        <IoSearch />
      </div>
      <section>
        {songs.map((song) => (
          <SongTile song={song} />
        ))}
      </section>
    </>
  );
};

export default ForYou;
