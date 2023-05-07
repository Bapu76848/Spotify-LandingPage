import React from "react";
import { songs } from "../assets/songs";
import { IoSearch } from "react-icons/io5";
import SongTile from "./SongTile";
import { useQuery, gql } from "@apollo/client";

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

const TopTracks = () => {
  const { error, loading, data } = useQuery(GET_SONGS, {
    variables: { playlistId: 2 },
  });
  console.log(error, loading, data);

  return (
    <>
      <h1>Top Tracks</h1>
      <div className="search-wrapper">
        <input type="search" placeholder="Search Song, Artist" />
        <IoSearch />
      </div>
      <section>
        {data?.getSongs.map((song) => (
          <SongTile key={song._id} song={song} />
        ))}
      </section>
    </>
  );
};

export default TopTracks;
