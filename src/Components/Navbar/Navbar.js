import React from "react";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}
