import React, { useState, useEffect } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
import MemoryCardGame from "./MemoryCardGame";

// Main App Component
function App() {
  const [selectedGame, setSelectedGame] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap API
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=fa222389dce050ef5cb1914223e2889b`
        );
        const data = await response.json();
        if (data && data.main && data.weather) {
          setWeather(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

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
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "2em",
          color: "#4CAF50",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "5px",
          borderRadius: "5px",
          zIndex: "1000",
        }}
      >
        Jonathan
      </div>
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
        {weather?.main && weather?.weather && (
          <div style={{ marginTop: "10px", fontSize: "1.2em" }}>
            Weather in {weather.name}: {weather.main.temp}°C,{" "}
            {weather.weather[0].description}
          </div>
        )}
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
