import { use, useState } from "react";
import "../../index.css";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
const Players = ({ playerPromise }) => {
    const players = use(playerPromise);
    const [available, setAvailable] = useState("available");

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        {available === "available" ? (
          <h1 className="font-bold text-2xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-2xl">Selected Players</h1>
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
            Selected (0)
          </button>
        </div>
      </div>
      {available==="available"? <AvailablePlayers players={players}></AvailablePlayers>:<SelectedPlayers></SelectedPlayers>}
    </div>
  );
};

export default Players;
