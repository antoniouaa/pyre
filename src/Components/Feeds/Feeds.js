import React from "react";
import { Response } from "../Response";

import "./Feeds.css";

function submitHandler() {}

export function Feeds(props) {
  return (
    <div className="container">
      <form className="feed-form" onSubmit={() => submitHandler()}>
        <div className="form-option">
          <label htmlFor="feedName">Feed Name</label>
          <input
            type="text"
            placeholder="Name"
            id="feedName"
            className="form-text"
          />
        </div>
        <div className="form-option">
          <label htmlFor="feedLink">Feed Link</label>
          <input
            type="text"
            placeholder="Link"
            id="feedLink"
            className="form-text"
          />
        </div>
        <button className="add-btn" id="addFeed">
          Add
        </button>
      </form>
      <div className="content">
        <Response />
      </div>
    </div>
  );
}
