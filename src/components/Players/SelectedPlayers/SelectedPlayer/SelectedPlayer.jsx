import { RiDeleteBin5Line } from "react-icons/ri";
import "../../../../index.css";


const SelectedPlayer = ({
  selectedPlayer,
  setSelectedPlayers,
  selectedPlayers,
  coin,
  setCoin
}) => {
  const handelDeleteSelectedPlayer = (selectedPlayer) => {
    const filterPlayer = selectedPlayers.filter(
      (player) => player.name != selectedPlayer.name,
    );
    setSelectedPlayers(filterPlayer)
    setCoin(coin + selectedPlayer.price)
  };

  return (
    <>
      <div className=" border border-gray-50 shadow-sm rounded-2xl mb-4 bg-white">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-3">
            <figure className="overflow-hidden rounded-xl">
              <img
                className="w-14 h-14 object-cover rounded-xl"
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
              />
            </figure>
            <div>
              <h1 className="text-lg font-semibold text-black">
                {selectedPlayer.name}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {selectedPlayer.battingStyle}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => handelDeleteSelectedPlayer(selectedPlayer)}
          >
            <RiDeleteBin5Line className="text-red-500 text-lg cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedPlayer;
