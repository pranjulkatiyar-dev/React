import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
<h1 className="heading" tabIndex="1">
    namste react using jsx
    </h1>
    );
 
    console.log(heading);
    
 
// JSX - HTML-like or XML syntax
const jsxheading = <h1> namste React using JSX</h1>

console.log(jsxheading);


 const root =ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);