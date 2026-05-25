import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player }) => {
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

          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition cursor-pointer">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
