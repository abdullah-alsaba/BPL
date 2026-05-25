
import "../../../index.css"
import Player from "../Player/Player";

const AvailablePlayers = ({ players, coin, setCoin }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          coin={coin}
          setCoin={setCoin}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
