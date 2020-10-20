import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Body } from "./Components/Body/Body";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
