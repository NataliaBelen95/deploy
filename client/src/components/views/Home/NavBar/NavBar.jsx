import React from "react";
import { useRef } from "react";
import "./NavBar.css";
//import img from "../../../../assets/pokebola.png";

import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="NavBar">
      <h2>Pokes's App</h2>

      <nav ref={navRef}>
        <a href="/Pokes">Pokemons</a>
        <a href="/CreatePoke">Create Pokemon</a>
        <a href="/#">About Me</a>
        <a href="/home">Home</a>

        <button className="nav_btn nav_close_btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav_btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
