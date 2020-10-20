import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Feeds } from "./Components/Feeds/Feeds";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/feeds">
            <Feeds />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
