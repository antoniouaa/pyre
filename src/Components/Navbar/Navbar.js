import React from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItem";

import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <h1 className="logo">
          pyre <i className="fas fa-fire"></i>
        </h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
