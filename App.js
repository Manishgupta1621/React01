import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM.createRoot

// React Element

const elm = <span>React Element </span>

const Title =  (
    <h1 className="head" tbIndex="1" >
        {elm}
        Learning React using JSX 🚀
    </h1>
);


// const Title = () => (
//     <h1 className="head" tbIndex="1" >
//         Learning React using JSX 🚀
//     </h1>
// );

//  same tarika func likhne ka
// const fn = () => true;

// const fn2 = () => {
//     return true;
// }
 

// React componement

// const HeadingComponent = () =>{
//     return <h1 class="heading" >React Function component </h1>;
// }

const data = api.getdata();
// jsx is prevent cross site scripting and sanitizie data no data can hack 

const HeadingComponent = () =>(
    <div id="container">
        {data}
        {Title()}
        <Title/>
        {<Title></Title>}
        <h1 class="heading" >React Function component </h1>
    </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
