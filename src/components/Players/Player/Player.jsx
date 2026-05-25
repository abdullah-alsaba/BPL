import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { toast } from "react-toastify";

const Player = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const isselected = selectedPlayers.some((p) => p.id === player.id);

  const handelClick = () => {
    let newCoin = coin - player.price;
    if (coin >= player.price) {
      setCoin(newCoin);
      toast.success("Player is Selected!!");
    } else {
      toast.error("Sorry, you don't have enough coin");
    }

    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
      {/* Image */}
      <figure className="overflow-hidden rounded-xl">
        <img
          className="w-full h-52 object-cover rounded-xl"
          src={player.image}
          alt={player.name}
        />
      </figure>

      {/* Content */}
      <div className="mt-4">
        {/* Name */}
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-black">
          <FaUserAlt className="text-lg" />
          {player.name}
        </h2>

        {/* Country + Role */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-gray-500">
            <FaFlag />
            <p className="text-sm">{player.country}</p>
          </div>

          <button className=" btn bg-gray-100 px-3 py-1 rounded-lg  text-gray-700">
            {player.role}
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Rating */}
        <h3 className="font-semibold text-black">Rating: ({player.rating})</h3>

        {/* Batting + Bowling */}
        <div className="flex justify-between items-center mt-3">
          <p className="font-bold">{player.battingStyle}</p>

          <p className="font-bold">{player.bowlingStyle}</p>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <p className="font-semibold text-black">Price: ${player.price}</p>

          <button
            className="btn px-4 py-2  cursor-pointer"
            type="button"
            onClick={handelClick}
            disabled={isselected}
          >
            {isselected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
