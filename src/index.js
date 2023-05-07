import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter } from "react-router-dom";
import ForYou from "./components/ForYou";
import Favourites from "./components/Favourites";
import RecentlyPlayed from "./components/RecentlyPlayed";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainLayout /> },
      { path: "favourites", element: <Favourites /> },
      { path: "recently-played", element: <RecentlyPlayed /> },
      { path: "top-tracks", element: <b>Top tracks</b> },
    ],
  },
]);

const client = new ApolloClient({
  url: "",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
