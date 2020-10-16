import React from "react";

import "./Profile.css";

export function Profile(props) {
  const { id, username, name, email } = props;

  return (
    <li key={id} className="list-item">
      <h3>{username}</h3>
      <div>
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
    </li>
  );
}
