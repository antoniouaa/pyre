import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

export function Thumbnail(props) {
  const { id, title, link, dateAdded, description } = props;

  return (
    <Link to={`/feeds/${title}`} className="result" key={id}>
      <h2>{title}</h2>
      <div>
        <p>Added on: {dateAdded}</p>
        <h4>{link.toLowerCase()}</h4>
        {description ? <p>{description}</p> : <p>No description available</p>}
      </div>
    </Link>
  );
}
