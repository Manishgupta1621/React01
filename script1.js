//  <div id="parent">
//     <div id="heading">
//         <h1>I am Tag one</h1>
//     </div>
//  </div>

const parent = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {}, "I am h1 tags"), React.createElement("h2", {}, "I am h2 tags")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1", {}, "I am h1 tags"), React.createElement("h2", {}, "I am h2 tags")]
    )]

);






// const heading = React.createElement(
//     "h1",
//     { id: "heading", abc:"xyz" },
//     "Hello World From React !"
// );

console.log(parent) //obect

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);