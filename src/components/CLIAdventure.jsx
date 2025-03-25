import React, { useState } from "react";

const CLIAdventure = ({ closeCLI }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState("expanded"); // "base", "expanded", or "superExpanded"
  const [output, setOutput] = useState([
    "Choose a career to start with:",
    "A - Dog",
    "B - Souffle Chef",
    "C - Electrical and Computer Engineer",
  ]);
  const [input, setInput] = useState("");
  const [currentBranch, setCurrentBranch] = useState("root");

  // Start dragging
  const handleMouseDown = (e) => {
    setDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Drag movement
  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  // Stop dragging
  const handleMouseUp = () => setDragging(false);

  // Handle resizing
  const toggleSize = () => {
    if (size === "base") {
      setSize("expanded");
    } else if (size === "expanded") {
      setSize("superExpanded");
    } else {
      setSize("base");
    }
  };

  // Handle CLI commands
  const handleCommand = () => {
    let response = "";
    switch (currentBranch) {
      case "root":
        if (input.toLowerCase() === "a") {
          response = [
            "Congrats! You're a dog. I bet you knew that all along.",
            "You may not have known the responsibility that comes with that though.",
            "The diabolical Dr. Dioda has been scheming to steal all publicly accessible fridges.",
            "We do not know why, but that's why you're on the job agent.",
            "Before you embark on your mission, what will you have for breakfast first?",
            "A - Dog food",
            "B - Dog food",
          ];
          setCurrentBranch("A1");
        } else if (input.toLowerCase() === "b") {
          response = [
            "I suppose you oughta make a souffle then.",
            "Wait, drats, we don't have any ingredients.",
            "A - Put it off for a week",
            "B - Look for ingredients in the great outdoors",
            "C - I bet Tyler tastes good...",
          ];
          setCurrentBranch("B1");
        } else if (input.toLowerCase() === "c") {
          response = [
            "You have chosen a very economically fruitful career. How industrious of you.",
          ];
          setCurrentBranch("C1");
        } else {
          response = ["Invalid option. Please choose A, B, or C."];
        }
        break;

      case "A1":
        response = ["Enjoy your breakfast, agent. Your mission awaits..."];
        setCurrentBranch("missionStart");
        break;

      case "B1":
        if (input.toLowerCase() === "a") {
          response = ["You decide to put it off for a week. Time flies by..."];
          setCurrentBranch("delayedSouffle");
        } else if (input.toLowerCase() === "b") {
          response = ["You venture into the great outdoors in search of ingredients."];
          setCurrentBranch("outdoorSearch");
        } else if (input.toLowerCase() === "c") {
          response = ["Tyler doesn't appreciate being considered an ingredient..."];
          setCurrentBranch("tylerReaction");
        } else {
          response = ["Invalid option. Please choose A, B, or C."];
        }
        break;

      case "C1":
        response = [
          "If you didn't get a master's degree by now, you should note that you have left money on the table.",
        ];
        setCurrentBranch("end");
        break;

      default:
        response = [
          "The story ends here. Sign up for ProfHacks 2025. Maybe fate will brighten her smile upon you then.",
        ];
        break;
    }

    setOutput((prev) => [...prev, `> ${input}`, ...response]);
    setInput("");
  };

  const getSizeStyle = () => {
    switch (size) {
      case "base":
        return { width: "400px", height: "300px" };
      case "expanded":
        return { width: "600px", height: "400px" };
      case "superExpanded":
        return { width: "800px", height: "600px" };
      default:
        return { width: "400px", height: "300px" };
    }
  };

  return (
    <div
      className="absolute bg-black text-green-400 p-4 font-mono"
      style={{
        ...getSizeStyle(),
        top: `${position.y}px`,
        left: `${position.x}px`,
        border: "2px solid #00FF00",
        borderRadius: "8px",
        overflow: "hidden",
        zIndex: 50,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="cursor-grab active:cursor-grabbing bg-gray-800 text-white p-2 rounded-t-md"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <span>Magenta Protocol 493345 : Interface</span>
        <button
          onClick={closeCLI}
          className="float-right text-red-500 hover:text-red-700"
        >
          ✖
        </button>
        <button
          onClick={toggleSize}
          className="float-right text-blue-400 hover:text-blue-600 mr-2"
        >
          {size === "base"
            ? "Expand"
            : size === "expanded"
            ? "Super Expand"
            : "Shrink"}
        </button>
      </div>
      <div className="overflow-y-auto h-[80%]">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="mt-4">
        <span className="mr-2">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCommand()}
          className="bg-black text-green-400 border-none outline-none w-[90%]"
        />
      </div>
    </div>
  );
};

export default CLIAdventure;
