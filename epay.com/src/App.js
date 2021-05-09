import React, { Component } from "react";
import "./App.css";
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import AdminSignup from "./components/signUp/AdminSignup";
import AdminSignin from "./components/SignIn/AdminSignin";
import Navbar from './components/Navbar'
import Admin_Navbar from './components/Admin_Navbar'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/E-Pay/Customer/Sign-In" activeClassName="activeLink" className="signIn">
          Customer Sign In
        </NavLink>
        <NavLink exact to="/E-Pay/Customer/Sign-Up" activeClassName="activeLink" className="signUp">
          Customer Sign Up
        </NavLink>
      </div>
    );

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


    const login = localStorage.getItem("isCLoggedIn");
    const Adminlogin = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        {login ? (
          <Router>
             <Navbar/>
            <Route exact path="/E-Pay/Customer/Sign-Up" component={Signup}></Route>
            <Route path="/E-Pay/Customer/Sign-In" component={Signin}></Route>
          </Router>
        ) : (
          <Router>
            {navLink}
            <Route exact path="/E-Pay/Customer/Sign-Up" component={Signup}></Route>
            <Route path="/E-Pay/Customer/Sign-In" component={Signin}></Route>
          </Router>
        )}

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
