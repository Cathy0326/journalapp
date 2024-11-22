import React, { useState } from "react";
import "../styles/menu.css"; // Link to your CSS file

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu">
      {/* Navigation Drawer */}
      <div className={`side-drawer ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        ></button>
        <ul>
          <li>Edit</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
        {/* Add other components like the card and timer button */}
      </div>
    </div>
  );
};

export default Menu;
