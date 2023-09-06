import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading 1",
    key: 2,
  },
  "Namaste React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading 2",
    key: 1,
  },
  "Learning By Subham Prasad"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    key: 3,
  },
  [heading, heading2]
);

const c1 = React.createElement(
  "div",{},[container,heading2]
)

// const heading3 =() =>{
//   return <h1>Hellooo</h1>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(c1);
