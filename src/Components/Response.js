import React, { useState, useEffect } from "react";

import { Profile } from "../Components/Profile/Profile";
import "./Response.css";

export function Response() {
  const [results, setResults] = useState([]);
  function fetchData() {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(fetchData, 1000);
    setTimeout(fetchData, 1000);
    setTimeout(fetchData, 1000);
    setTimeout(fetchData, 1000);
  }, []);

  if (results.length > 0) {
    return (
      <ul className="list-container">
        {results.map((result) => {
          const { id, username, name, email } = result;
          return (
            <Profile id={id} username={username} name={name} email={email} />
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