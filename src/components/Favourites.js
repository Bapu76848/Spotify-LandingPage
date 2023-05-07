import React from "react";
import { gql, useQuery } from "@apollo/client";
import { IoSearch } from "react-icons/io5";
import SongTile from "./SongTile";

const GET_SONGS = gql`
  query Query($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      artist
      duration
      photo
      title
      url
    }
  }
`;

const Favourites = () => {
  const { error, loading, data } = useQuery(GET_SONGS, {
    variables: { playlistId: 3 },
  });
  console.log(error, loading, data);
  return (
    <>
      <h1>Favourites</h1>
      <div className="search-wrapper">
        <input type="search" placeholder="Search Song, Artist" />
        <IoSearch />
      </div>
      <section>
        {data?.getSongs.map((song) => (
          // <b>{song.title}</b>
          <SongTile key={song._id} song={song} />
        ))}
      </section>
    </>
  );
};

export default Favourites;
