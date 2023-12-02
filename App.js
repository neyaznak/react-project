// import React from "react";
// import ReactDOM from "react-dom/client";
//React.createElement ==> Object ==> HTMLElement

//JSX(transpiled before it reaches the JS) - Parcel - Babel

//JSX => React.createElement => ReactElement -JS Object +> HTMLElement(render)
//React Element

/**
 *
 * using React.createElement only(no JSX, no Functional Component)
 *
 */

// const heading = React.createElement(
//     "div",
//     {className: "title"},
//     React.createElement("h1",{},"This is H1 normal"),
//     React.createElement("h2",{},"This is H2 normal"),
//     React.createElement("h3",{},"This is H3 normal")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 *
 * using JSX
 */

// const jsxHeading = (
//     <div className="title">
//         <h1>This is H1 JSX</h1>
//         <h2>This is H2 JSX</h2>
//         <h3>This is H3 JSX</h3>
//     </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

/**
 * using functional component
 */

// const FnCompHeading = () => (
//     <div className="title">
//         <h1>This is H1 functional</h1>
//         <h2>This is H2 functional</h2>
//         <h3>This is H3 functional</h3>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FnCompHeading />);
import React from "react";
import ReactDOM from "react-dom/client";

import logo from './images/logo.png';
import userIcon from './images/userIcon.png';

const Header = () => {
  return (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="user-icon">
      <img src={userIcon} alt="User Icon" />
    </div>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Hi React using JSX!!!
  </h1>
);

//React Functional Component
//Component Composition
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Hi React Functional Component</h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<HeadingComponent/>);
