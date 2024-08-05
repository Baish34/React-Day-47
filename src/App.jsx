import React, { useState } from "react";
import "./App.css";

function IncrementDecrementCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function ToggleBackground() {
  const [background, setBackground] = useState("lightblue");

  const toggleColor = () => {
    setBackground(background === "lightblue" ? "grey" : "lightblue");
  };

  return (
    <div>
      <button style={{ backgroundColor: background }} onClick={toggleColor}>
        Toggle Background
      </button>
    </div>
  );
}

function HideMessage() {
  const [showMessage, setShowMessage] = useState(true);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p>This is a toggleable message!</p>}
    </div>
  );
}

function ChangeTextColor() {
  const [color, setColor] = useState("red");

  const colorToggler = () => {
    setColor(color === "red" ? "green" : "red");
  };

  return (
    <div>
      <p style={{ color: color }}>Text Color Toggler</p>
      <button onClick={colorToggler}>Toggle Color</button>
    </div>
  );
}

function FruitList() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div>
      <h2>Select a Fruit</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            onClick={() => handleFruitClick(fruit)}
            style={{ cursor: "pointer" }}
          >
            {fruit}
          </li>
        ))}
      </ul>
      {selectedFruit && <p>You selected: {selectedFruit}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <IncrementDecrementCount />
      <hr />
      <ToggleBackground />
      <hr />
      <HideMessage />
      <hr />
      <ChangeTextColor />
      <hr />
      <FruitList />
    </main>
  );
}
