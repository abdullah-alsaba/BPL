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
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        {/* Heading */}
        <div>
          {available === "available" ? (
            <h1 className="font-bold text-2xl">Available Players</h1>
          ) : (
            <h1 className="font-bold text-2xl">
              Selected Players ({selectedPlayers.length}/{players.length})
            </h1>
          )}
        </div>

        {/* Buttons */}
        <div className="flex w-full md:w-auto">
          <button
            onClick={() => setAvailable("available")}
            className={`btn flex-1 md:flex-none ${
              available === "available" ? "btn-primary" : "btn"
            } rounded-r-none`}
          >
            Available
          </button>

          <button
            onClick={() => setAvailable("selected")}
            className={`btn flex-1 md:flex-none ${
              available === "selected" ? "btn-primary" : "btn"
            } rounded-l-none`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Conditional Render */}
      {available === "available" ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
          setAvailable={setAvailable}
        />
      )}
    </div>
  );
};

export default Players;
