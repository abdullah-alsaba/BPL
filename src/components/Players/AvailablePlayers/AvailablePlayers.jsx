
import "../../../index.css"
import Player from "../Player/Player";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
