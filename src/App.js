// App.js
import React from "react";
import PlayersList from "./PlayersList";
// importing necessary components
function App() {
  return (
    <div className="App">
      {/*Styling The Topbar*/}
      <h1 style={{color:"Highlight", backgroundColor:"InfoBackground", display:"center", gap:"15px", justifyContent:"center"}}>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;

