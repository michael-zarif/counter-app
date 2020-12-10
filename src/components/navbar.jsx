import React from "react";

// Stateless Functional Component + Object Destructuring
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <label className="navbar-brand">
        Shop Cart
        <span className="bagde badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </label>
    </nav>
  );
};

export default NavBar;
