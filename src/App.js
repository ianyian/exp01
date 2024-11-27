import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
import MemoryCardGame from "./MemoryCardGame";

// Main App Component
function App() {
  const [selectedGame, setSelectedGame] = useState("");

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div
      className='App'
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f0f5",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#4CAF50",
          padding: "20px",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "2.5em", margin: 0 }}>
          Welcome to the Game Hub
        </h1>
      </header>
      <div style={{ marginTop: "40px" }}>
        <label
          htmlFor='game-select'
          style={{ fontSize: "1.4em", marginRight: "15px" }}
        >
          Choose a game:{" "}
        </label>
        <select
          id='game-select'
          onChange={handleGameChange}
          value={selectedGame}
          style={{
            fontSize: "1.2em",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value=''>--Please choose an option--</option>
          <option value='tic-tac-toe'>Tic-Tac-Toe</option>
          <option value='memory-card-game'>Memory Card Game</option>
        </select>
      </div>

      {selectedGame && (
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          {selectedGame === "tic-tac-toe" && <TicTacToe />}
          {selectedGame === "memory-card-game" && <MemoryCardGame />}
        </div>
      )}
    </div>
  );
}

export default App;
