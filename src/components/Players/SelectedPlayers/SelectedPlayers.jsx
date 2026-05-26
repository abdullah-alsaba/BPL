import "../../../index.css"
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin 
}) => {
  const handelPage = () => {};
  return (
    <div>
      <div>
        {selectedPlayers.map((selectedPlayer) => (
          <SelectedPlayer
            key={selectedPlayer.id}
            selectedPlayer={selectedPlayer}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
            coin={coin}
            setCoin={setCoin}
          ></SelectedPlayer>
        ))}

        <div className="border border-lime-400 p-1 rounded-2xl inline-block">
          <button
            className="btn bg-[#E7FE29] border-none text-black font-bold rounded-xl hover:bg-lime-300"
            onClick={handelPage}
          >
            Add More Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayers;