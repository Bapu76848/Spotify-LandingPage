import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import MainLayout from "./components/MainLayout";
import Player from "./components/Player";
function App() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <MainLayout />
        <Player />
      </div>
    </>
  );
}

export default App;
