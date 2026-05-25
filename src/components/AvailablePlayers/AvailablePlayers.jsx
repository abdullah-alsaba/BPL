import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import "../../index.css";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={players.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {" "}
          <FaUserAlt />
          Card Title
        </h2>

        <div className="flex items-center">
          <div className="flex gap-2 items-center flex-1">
            <FaFlag />
            <p>India</p>
          </div>

          <div className="w-40 text-right">
            <button className="btn btn-ghost bg-gray-100">All Rounder</button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="font-bold flex items-center mt-3">
          <div className="flex-1">
            <p>Left-Hand-Bat</p>
          </div>

          <div className="w-40 text-right">
            <p>Left-Hand-Bowl</p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex-1">
            <p className="font-bold">Price: $1500000</p>
          </div>

          <div className="w-40 text-right">
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
