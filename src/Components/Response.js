import React, { useState, useEffect } from "react";
import axios from "axios";

import { Profile } from "../Components/Profile/Profile";
import "./Response.css";

export function Response() {
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

  console.log(results);

  if (results.length > 0) {
    return (
      <ul className="list-container">
        {results.map((result) => {
          const { feedId, name, link } = result;
          return <Profile key={feedId} id={feedId} name={name} link={link} />;
        })}
      </ul>
    );
  } else {
    return (
      <div>
        <p>Fetching...</p>
      </div>
    );
  }
}
