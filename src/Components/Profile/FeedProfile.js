import React, { useState, useEffect } from "react";
import axios from "axios";

export function FeedProfile(props) {
  const title = props.match.params.name;
  const [feed, setFeed] = useState([]);
  function fetchData() {
    axios
      .get(`/feeds/${title}`)
      .then((response) => {
        setFeed(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(fetchData, 100);
  }, []);

  const [id, name, link, dateAdded, description] = feed;

  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>
        Found at: {link}, on {dateAdded}
      </p>
      <p>{description ? description : "No description available"}</p>
    </div>
  );
}
