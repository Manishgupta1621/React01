import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM.createRoot

// React Element => ReactElement-JS Object => HTMLElement(render)
const heading = React.createElement(
    "h1",
    {
        id: "heading"
    },
    "Manish Gupta 🚀"
);

console.log(heading);

// JSX - HTML-like or XML-like syntax

// JSX (transpiled before it reaches the JS Engine) - Parcel - Bable 

//JSX => React.createElement = >ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Learning React using JSX</h1>;

console.log(jsxHeading);

// Correct usage of createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); 

// Render the JSX element
root.render(jsxHeading);
