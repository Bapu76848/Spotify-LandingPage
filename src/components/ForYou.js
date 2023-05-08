import React, { useEffect, useContext } from "react";
import { songs } from "../assets/songs";
import { IoSearch } from "react-icons/io5";
import SongTile from "./SongTile";
import { useQuery, gql } from "@apollo/client";
import { MusicContext } from "../context/MusicContext";
import { PlayerContext } from "../context/PlayerContext";

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

const ForYou = () => {
  const [songs, setSongs] = useContext(MusicContext);
  useEffect(() => {
    if (data) {
      setSongs([...songs, data.getSongs]);
    }
  }, [data]);

  const { error, loading, data } = useQuery(GET_SONGS, {
    variables: { playlistId: 1 },
  });
  console.log(error, loading, data);
  return (
    <>
      <h1>For You</h1>
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

export default ForYou;
