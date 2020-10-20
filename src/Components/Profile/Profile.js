import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

export function Profile(props) {
  const { id, username, name, email } = props;

  return (
    <Link to={`/${username}`} className="result" key={id}>
      <li key={id} className="list-item">
        <h3>{name}</h3>
        <div>
          <h5>{username.toLowerCase()}</h5>
          <p>{email.toLowerCase()}</p>
        </div>
      </li>
    </Link>
  );
}
