import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import MainLayout from "./components/MainLayout";
import Player from "./components/Player";
import { PlayerContextProvider } from "./context/PlayerContext";
function App() {
  return (
    <>
      <div className="main-container">
        <PlayerContextProvider>
          <Navigation />
          <MainLayout />
          <Player />
        </PlayerContextProvider>
      </div>
    </>
  );
}

export default App;
