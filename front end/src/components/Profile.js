//import React from 'react'
import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

export default class Profile extends Component {

    state = {
        navigate: false,
      };

      render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        const { navigate } = this.state;
        if (navigate) {
          return <Redirect to="/" push={true} />;
        }
    return (
        <div className="container  border shadow" style={{"width":"500%" ,"hight":"500%" }}>
            <h1>{user.type}-{user.first_name} details</h1>

            <thead>
                    <tr>
                    <th scope="col"> ID</th>
                    <th scope="col"> Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th><br></br>
                    <th scope="col">Action</th>
                    </tr>
                </thead>

            <tbody className="table border shadow" style={{"width":"400%"}}>

            <tr>
            <th scope="row">{user.id}</th>
            <td>{user.full_name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><Link className="btn btn-primary" to={`/View/${user.id}`}>View</Link></td>
            <td><Link className="btn btn-warning" to={`/Edit/${user.id}`}>Edit</Link></td>
            </tr>
            </tbody>


        </div>
    );
}
}
