import React, { useState, useEffect } from "react";
import axios from "axios";

import { Profile } from "../Profile/Profile";
import { AddFeed } from "./AddFeed";

import "./Feeds.css";

export function Feeds(props) {
  const [results, setResults] = useState([]);
  function fetchData() {
    axios
      .get("/feeds")
      .then((data) => {
        setResults(data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(fetchData, 1000);
  }, []);

  if (results.length > 0) {
    return (
      <div className="container">
        <AddFeed method={setResults} />
        <ul className="list-container">
          {results.map((result) => {
            const { feedId, name, link } = result;
            return <Profile key={feedId} id={feedId} name={name} link={link} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        <AddFeed method={setResults} />
      </div>
    );
  }
}
