import React, { useState, useEffect } from "react";
import axios from "axios";

import { Thumbnail } from "../Profile/Thumbnail";
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
        <AddFeed onDataInsert={() => fetchData()} />
        <ul className="list-container">
          {results.map((result) => {
            const { id, title, link, dateAdded, description } = result;
            return (
              <li className="list-item" key={id}>
                <Thumbnail
                  key={id}
                  id={id}
                  title={title}
                  link={link}
                  dateAdded={dateAdded}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        <AddFeed onDataInsert={() => fetchData()} />
      </div>
    );
  }
}
