
import "../../../index.css";
import NoSelectedPlayer from "./SelectedPlayer/NoSelectedPlayer/NoSelectedPlayer";
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";




const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {


  
  return (
    <div>
      <div>
        {selectedPlayers.length === 0 ? (
          <NoSelectedPlayer></NoSelectedPlayer>
        ) : (
          selectedPlayers.map((selectedPlayer) => (
            <SelectedPlayer
              key={selectedPlayer.id}
              selectedPlayer={selectedPlayer}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
              coin={coin}
              setCoin={setCoin}
            ></SelectedPlayer>
          ))
        )}

      </div>
    </div>
  );
};

export default SelectedPlayers;
