import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Navbar from "./Components/Layouts/Navbar";


import ContactState from './Context/Contact/ContactState'
import "./App.css";

const App = () => {
  return (
    <ContactState>
<Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
    </ContactState>
    
  );
};

export default App;
