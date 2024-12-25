import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM.createRoot

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Learn React Again 🚀"),
      React.createElement("h2", {}, "I am h2 tags"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am h1 tags"),
      React.createElement("h2", {}, "I am h2 tags"),
    ]),
  ]
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root")); // Correct usage of createRoot
root.render(parent);
