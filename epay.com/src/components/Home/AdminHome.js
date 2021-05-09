import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class AdminHome extends Component {
  state = {
    navigate: false,
  };

  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };
  render() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/E-Pay/Admin" push={true} />;
    }
    return (
      <div style = {{"width": "1022px"}} className="container  border shadow">
        <h3> Welcome to E-pay.com </h3>
        <div className="row">
          <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
            <h5> Welcome, {user.first_name} </h5> {user.type} Logged in
            successfully.
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3">
            <Button
              className="btn btn-primary text-right"
              onClick={this.onLogoutHandler}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
