import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import AdminHome from './Home/AdminHome'
import Profile from './Profile'
import AllUserList from './AllUserList'
import AView from './AView'
import AddCustomer from './AddCustomer'
import CustomerBalance from './CustomerBalance'
import CustomerReview from './CustomerReview'
import AEdit from './AEdit'

export default function Admin_Navbar() {
    return (
        <div>
  <nav style = {{"width": "905px"}} className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/E-Pay"><strong><span style={{"color":"darkblue"}}>E</span><span style={{"color":"green"}}>-Pay</span></strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/E-Pay/Admin/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AllUserList">All User List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Add-Customer">Add Customer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Customer-Balance">Customer All Transition</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Customer-Review">Customer Review</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

                <Switch>
                    <Route path="/E-Pay/Admin/Home" component={AdminHome}/>
                    <Route path= "/View/:id" component={AView}/>
                    <Route path= "/Add-Customer" component={AddCustomer}/>
                    <Route path= "/Customer-Balance" component={CustomerBalance}/>
                    <Route path= "/Customer-Review" component={CustomerReview}/>
                    <Route path= "/Edit/:id" component={AEdit}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/AllUserList" component={AllUserList}/>
                </Switch>

        </div>
    )
}
