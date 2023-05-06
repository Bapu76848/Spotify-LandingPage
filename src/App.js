import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import MainLayout from "./components/MainLayout";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Navigation />
      <MainLayout />
      <Player />
    </>
  );
}

export default App;
