import React, { Component } from "react";
import "./App.css";
import AdminSignup from "./components/signUp/AdminSignup";
import AdminSignin from "./components/SignIn/AdminSignin";
import Admin_Navbar from './components/Admin_Navbar'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Admin extends Component {
  render() {

    let AnavLink = (
      <div className="Tab">
        <NavLink to="/E-Pay/Admin/Sign-In" activeClassName="activeLink" className="signIn">
          Admin Sign In
        </NavLink>
        <NavLink exact to="/E-Pay/Admin/Sign-Up" activeClassName="activeLink" className="signUp">
          Admin Sign Up
        </NavLink>
      </div>
    );

    const Adminlogin = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        {Adminlogin ? (
          <Router>
            <Admin_Navbar/>
            <Route exact path="/E-Pay/Admin/Sign-Up" component={AdminSignup}></Route>
            <Route path="/E-Pay/Admin/Sign-In" component={AdminSignin}></Route>
          </Router>
        ) : (
          <Router>
            {AnavLink}
            <Route exact path="/E-Pay/Admin/Sign-Up" component={AdminSignup}></Route>
            <Route path="/E-Pay/Admin/Sign-In" component={AdminSignin}></Route>
          </Router>
        )}
      </div>
    );
  }
}
