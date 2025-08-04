import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
 import "./Header.css";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="logo"> Theme App</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          aria-label="Select Theme"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;