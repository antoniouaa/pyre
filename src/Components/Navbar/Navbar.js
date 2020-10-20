import React from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItem";
import { Logo } from "../Logo/Logo";

import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <Logo />
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
