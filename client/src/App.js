import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Navbar from "./Components/Layouts/Navbar";
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';



import ContactState from './Context/Contact/ContactState'
import AuthState from "./Context/Auth/AuthState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
<ContactState>
<Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
    </ContactState>
    </AuthState>
    
    
  );
};

export default App;
