import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

export function Thumbnail(props) {
  const { feedId, name, link } = props;

  return (
    <Link to={`/feeds/${name}`} className="result" key={feedId}>
      <h3>{name}</h3>
      <div>
        <p>{link.toLowerCase()}</p>
      </div>
    </Link>
  );
}
