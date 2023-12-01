


/**
 * create this html using react only
 * 
 * <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h1>I'm h2 tag</h1>
    </div>
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h1>I'm h2 tag</h1>
    </div>
</div>
 * 
 */

/***
 * usinh js 
 *  "div",
    { id: "parent"},React.createElement("div", {id: "child"},
    React.createElement("h1", {}, "I'm an h1 tag"))
 * 
 */


//using react

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
]);

console.log(parent); //logs an Object (a react element)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);