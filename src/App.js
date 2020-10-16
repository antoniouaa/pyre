import React from "react";
import "./App.css";
import { Response } from "./Components/Response";
import { Navbar } from "./Components/Navbar/Navbar";
import { Body } from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
