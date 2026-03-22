import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child", key:"child1"}, [
    React.createElement("h1", {key:"h1-1"}, "This is Namaste React"),
    React.createElement("h2", {key:"h2-1"}, "I'm h2 tag"),
    ]),
    React.createElement("div", {id:"child2", key:"child2"}, [
        React.createElement("h1", {key:"h1-2"}, "I'm h1 tag"),
        React.createElement("h2", {key:"h2-2"}, "I'm h2 tag"),
        React.createElement("h3", {key:"h3-2"}, "I'm h3 tag"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);