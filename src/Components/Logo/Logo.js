import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

export function Logo() {
  return (
    <Link to="/" className="logo">
      <h1>
        pyre <i className="fas fa-fire"></i>
      </h1>
    </Link>
  );
}
