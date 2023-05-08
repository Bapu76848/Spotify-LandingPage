import React, { useEffect, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import SongTile from "./SongTile";
import { useQuery, gql } from "@apollo/client";
import { BiLoaderAlt } from "react-icons/bi";
import { MusicContext } from "../context/MusicContext";

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

const RecentlyPlayed = () => {
  const { loading, data } = useQuery(GET_SONGS, {
    variables: { playlistId: 4 },
  });
  const [songs, setSongs] = useContext(MusicContext);
  useEffect(() => {
    if (data) {
      setSongs([...songs, ...data.getSongs]);
    }
  }, [data]);
  return (
    <>
      <h1>Recently Played</h1>
      <div className="search-wrapper">
        <input type="search" placeholder="Search Song, Artist" />
        <IoSearch />
      </div>
      <section>
        {loading ? (
          <div className="loader">
            <BiLoaderAlt />
          </div>
        ) : (
          data?.getSongs.map((song) => <SongTile key={song._id} song={song} />)
        )}
      </section>
    </>
  );
};

export default RecentlyPlayed;
