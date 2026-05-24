import { use } from "react";
import "../../index.css"
const Players = ({ playerPromise }) => {
    const players = use(playerPromise);
    
    return <div>
        <h1>{players.length}</h1>
  </div>;
};

export default Players;