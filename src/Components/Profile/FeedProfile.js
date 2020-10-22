import React, { useState, useEffect } from "react";
import axios from "axios";

export function FeedProfile(props) {
  const name = props.match.params.name;
  const [feed, setFeed] = useState([]);
  function fetchData() {
    axios
      .get(`/feeds/${name}`)
      .then((response) => {
        setFeed(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(fetchData, 100);
  }, []);

  const [id, , link] = feed;

  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Found at: {link}</p>
    </div>
  );
}
