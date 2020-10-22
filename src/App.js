import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Feeds } from "./Components/Feeds/Feeds";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { FeedProfile } from "./Components/Profile/FeedProfile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/feeds/:name" component={FeedProfile} />
          <Route path="/home" component={Home} />
          <Route path="/feeds" component={Feeds} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
