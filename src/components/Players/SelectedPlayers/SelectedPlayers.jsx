import "../../../index.css"
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
  
    return <div>
        <div>
            {
                selectedPlayers.map(selectedPlayer=><SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer}></SelectedPlayer>)
            }
      </div>
  </div>;
};

export default SelectedPlayers;