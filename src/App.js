import React, { Component } from "react";
import "./App.css";
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );
    const login = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        {login ? (
          <Router>
             <Navbar/>
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
          </Router>
        ) : (
          <Router>
            {navLink}
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
          </Router>
        )}
      </div>
    );
  }
}
