import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Navbar from "./Components/Layouts/Navbar";
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Alerts from './Components/Layouts/Alerts'



import ContactState from './Context/Contact/ContactState'
import AuthState from "./Context/Auth/AuthState";
import AlertState from "./Context/Alert/AlertState";
import setAuthToken from '../src/Utils/setAuthToken'
import footer from "./Components/Layouts/footer"

import PrivateRoute from  './Components/Routing/PrivateRoute';
import "./App.css";

if(localStorage.token){
  setAuthToken(localStorage.token)
}


const App = () => {
  return (
    <AuthState> 
<ContactState>
  <AlertState>
  <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Alerts/>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
        <footer/>
      </Fragment>
    </Router>
  </AlertState>

    </ContactState>
    </AuthState>
    
    
  );
};

export default App;
