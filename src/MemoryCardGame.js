import React, { useState, useEffect } from "react";

const cards = [
  { id: 1, value: "A" },
  { id: 2, value: "A" },
  { id: 3, value: "B" },
  { id: 4, value: "B" },
  { id: 5, value: "C" },
  { id: 6, value: "C" },
  { id: 7, value: "D" },
  { id: 8, value: "D" },
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function MemoryCardGame() {
  const [board, setBoard] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    setBoard(shuffle([...cards]));
  }, []);

  const handleCardClick = (index) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (board[firstIndex].value === board[secondIndex].value) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, board, matchedCards]);

  const resetGame = () => {
    setBoard(shuffle([...cards]));
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    <div>
      <h2>Memory Card Game</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {board.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor:
                flippedCards.includes(index) || matchedCards.includes(index)
                  ? "#fff"
                  : "#333",
              color:
                flippedCards.includes(index) || matchedCards.includes(index)
                  ? "#000"
                  : "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2em",
              border: "1px solid #000",
              cursor: "pointer",
            }}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) &&
              card.value}
          </div>
        ))}
      </div>
      <button
        onClick={resetGame}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1em",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

export default MemoryCardGame;
