import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// JSX => React.createElement => Object => HTML(DOM)  babel converts JSX to React.createElement

const Title = () => {
  return (
  <h1>Namaste Bhookharo</h1>
  )
  };
const HeaderComponent = () => {
  return (
    <div>
  <div>
    <Title />
  </div>
  <div>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Cart</li>
    <li>Home</li>
  </ul>
  </div>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
