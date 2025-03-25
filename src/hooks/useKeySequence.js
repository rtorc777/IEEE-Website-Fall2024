import { useState, useEffect } from "react";

const useKeySequence = (sequence, onMatch) => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const handleKeydown = (event) => {
      setCurrent((prev) => [...prev, event.key].slice(-sequence.length));
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [sequence.length]);

  useEffect(() => {
    if (JSON.stringify(current) === JSON.stringify(sequence)) {
      onMatch();
      setCurrent([]);
    }
  }, [current, sequence, onMatch]);

  return current;
};

export default useKeySequence;
