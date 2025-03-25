import React, { useState, useEffect } from "react";

// Word groups for the game
const wordGroups = {
  Beginner: ["doomsday", "rapture", "armageddon", "apocalypse"],
  Novice: ["rain", "thrown", "air", "prints"],
  Moderate: ["ly", "furts", "ocean", "incense"],
  Challenging: ["rose", "pond", "river", "martha"],
};

// Flattened word list for the grid (randomized)
const getShuffledWords = () => {
  const allWords = [
    ...wordGroups.Beginner,
    ...wordGroups.Novice,
    ...wordGroups.Moderate,
    ...wordGroups.Challenging,
  ];
  return allWords.sort(() => Math.random() - 0.5);
};

const ConnectionsGame = () => {
  const [gridWords, setGridWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [lockedGroups, setLockedGroups] = useState([]);
  const [message, setMessage] = useState("");

  // Initialize the grid on mount
  useEffect(() => {
    setGridWords(getShuffledWords());
  }, []);

  // Check if selected words form a valid group
  const validateGroup = () => {
    const validGroup = Object.values(wordGroups).find((group) =>
      group.every((word) => selectedWords.includes(word))
    );

    if (validGroup) {
      setLockedGroups((prev) => [...prev, ...validGroup]);
      setGridWords((prev) => prev.filter((word) => !validGroup.includes(word)));
      setMessage("Correct! Group locked.");
    } else {
      setMessage("Incorrect group. Try again.");
    }
    setSelectedWords([]);
  };

  // Handle word selection
  const handleWordClick = (word) => {
    if (lockedGroups.includes(word)) return; // Ignore locked words
    if (selectedWords.includes(word)) {
      setSelectedWords((prev) => prev.filter((w) => w !== word)); // Deselect word
    } else {
      setSelectedWords((prev) => [...prev, word]); // Select word
    }
  };

  return (
    <div className="game-container">
      <h1>Connections Game</h1>
      <p>Select 4 related words to form a group.</p>
      <div className="grid">
        {gridWords.map((word) => (
          <div
            key={word}
            className={`word ${selectedWords.includes(word) ? "selected" : ""} ${
              lockedGroups.includes(word) ? "locked" : ""
            }`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </div>
        ))}
      </div>
      <button
        onClick={validateGroup}
        disabled={selectedWords.length !== 4}
        className="validate-button"
      >
        Submit Group
      </button>
      <p>{message}</p>
      {gridWords.length === 0 && <p>Congratulations! You've completed the game!</p>}
    </div>
  );
};

export default ConnectionsGame;
