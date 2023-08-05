// PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./Players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* mapping on players component*/}
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
