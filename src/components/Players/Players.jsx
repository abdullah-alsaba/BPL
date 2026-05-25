import { use } from "react";
import "../../index.css"
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
const Players = ({ playerPromise }) => {
    const players = use(playerPromise);
    
    return (
        <div className="max-w-7xl mx-auto px-4">
        <AvailablePlayers players={players}></AvailablePlayers>
      </div>
    );
};

export default Players;