import React, { useState, useEffect } from "react";
import axios from "axios";

import { Profile } from "../Components/Profile/Profile";
import "./Response.css";

export function Response() {
  const [results, setResults] = useState([]);
  function fetchData() {
    axios
      .get("/users")
      .then((data) => setResults(data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(fetchData, 1000);
  }, []);

  if (results.length > 0) {
    return (
      <ul className="list-container">
        {results.map((result) => {
          const { id, username, name, email } = result;
          return (
            <Profile
              key={id}
              id={id}
              username={username}
              name={name}
              email={email}
            />
          );
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
