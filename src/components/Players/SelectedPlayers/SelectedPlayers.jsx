import "../../../index.css"
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
  
    return (
      <div>
        <div>
          {selectedPlayers.map((selectedPlayer) => (
            <SelectedPlayer
              key={selectedPlayer.id}
              selectedPlayer={selectedPlayer}
            ></SelectedPlayer>
          ))}

          <div className="border border-lime-400 p-1 rounded-2xl inline-block">
            <button className="btn bg-[#E7FE29] border-none text-black font-bold rounded-xl hover:bg-lime-300">
              Add More Player
            </button>
          </div>
        </div>
      </div>
    );
};

export default SelectedPlayers;