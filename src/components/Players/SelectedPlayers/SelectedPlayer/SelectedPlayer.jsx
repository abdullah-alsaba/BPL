import { RiDeleteBin5Line } from "react-icons/ri";
import "../../../../index.css"

const SelectedPlayer = ({ selectedPlayer }) => {
    console.log(selectedPlayer)
    return (
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <figure className="overflow-hidden rounded-xl">
            <img
              className="w-16 h-16 object-cover rounded-xl"
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
            />
          </figure>
          <div>
            <h1 className="text-2xl font-semibold text-black">
              {selectedPlayer.name}{" "}
            </h1>
            <p className="text-gray-700">{selectedPlayer.battingStyle}</p>
          </div>
        </div>
        <button type="button" cursor-pointer>
          <RiDeleteBin5Line />
        </button>
      </div>
    );
};

export default SelectedPlayer;