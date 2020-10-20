import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";

import "./Footer.css";

export function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer">
          <Logo />
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Our mission</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <p>2020 Alex Antoniou</p>
        </div>
      </footer>
    </>
  );
}
