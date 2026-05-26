import { use, useState } from "react";
import "../../index.css";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
const Players = ({ playerPromise, coin, setCoin }) => {
    const players = use(playerPromise);
  const [available, setAvailable] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      <div className="flex justify-between items-center mb-6">
        {available === "available" ? (
          <h1 className="font-bold text-2xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-2xl">
            Selected Players({selectedPlayers.length}/{players.length})
          </h1>
        )}
        <div>
          <button
            onClick={() => setAvailable("available")}
            className={`btn ${available === "available" ? "btn-primary" : "btn"} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setAvailable("selected")}
            className={`btn ${available === "selected" ? "btn-primary" : "btn"} rounded-l-none`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {available === "available" ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
