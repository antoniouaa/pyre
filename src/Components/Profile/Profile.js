import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

export function Profile(props) {
  const { feedId, name, link } = props;

  return (
    <Link to={`/${name}`} className="result" key={feedId}>
      <li key={feedId} className="list-item">
        <h3>{name}</h3>
        <div>
          <p>{link.toLowerCase()}</p>
        </div>
      </li>
    </Link>
  );
}
