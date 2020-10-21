import React from "react";
import axios from "axios";

function submitHandler(event) {
  event.preventDefault();
  const [name, link] = event.target;
  const addFeedForm = new FormData();
  addFeedForm.append("name", name.value);
  addFeedForm.append("link", link.value);
  axios
    .post("/feeds/add", addFeedForm)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
  window.location.reload();
}

export function AddFeed({ setResults }) {
  return (
    <form className="feed-form" onSubmit={(e) => submitHandler(e)}>
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
  );
}
