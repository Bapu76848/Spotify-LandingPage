import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ForYou from "./components/ForYou";
import Favourites from "./components/Favourites";
import RecentlyPlayed from "./components/RecentlyPlayed";

export const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "favourites", element: <Favourites /> },
  { path: "recently-played", element: <RecentlyPlayed /> },
  { path: "top-tracks", element: <b>Top tracks</b> },
]);

