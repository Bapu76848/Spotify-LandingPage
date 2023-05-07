import React from "react";
import { Routes, Route } from "react-router-dom";
import ForYou from "./ForYou";
import Favourites from "./Favourites";
import RecentlyPlayed from "./RecentlyPlayed";

const MainLayout = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<ForYou />}/>
        <Route path="favourites" element={<Favourites />}/>
        <Route path="recently-played" element={<RecentlyPlayed />}/>
        <Route path="top-tracks" element={<b>Top Tracks</b>}/>
      </Routes>
    </main>
  );
};

export default MainLayout;
