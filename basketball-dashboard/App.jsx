import React, { useState } from 'react';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [players] = useState([
    { Player: "LeBron", Points: 28.7, Assists: 7.1, Rebounds: 8.2 },
    { Player: "Curry", Points: 30.5, Assists: 6.3, Rebounds: 5.1 },
    { Player: "Durant", Points: 29.3, Assists: 5.2, Rebounds: 7.0 },
    { Player: "Tatum", Points: 27.1, Assists: 4.4, Rebounds: 7.3 },
    { Player: "Giannis", Points: 31.1, Assists: 5.7, Rebounds: 11.2 },
  ]);
  const [selected, setSelected] = useState("LeBron");

  const handleStart = () => {
    setStarted(true);
  };

  const selectedStats = players.find(p => p.Player === selected);

  if (!started) {
    return (
      <div className="welcome">
        <h1>🏀 Welcome</h1>
        <p>Simple Basketball Dashboard</p>
        <button onClick={handleStart}>Start</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Basketball Dashboard</h1>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        {players.map(p => <option key={p.Player}>{p.Player}</option>)}
      </select>
      <div className="metrics">
        <div className="metric">Points: {selectedStats?.Points}</div>
        <div className="metric">Assists: {selectedStats?.Assists}</div>
        <div className="metric">Rebounds: {selectedStats?.Rebounds}</div>
      </div>
    </div>
  );
}

export default App;
