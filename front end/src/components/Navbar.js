import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Profile from './Profile'
import AllUserList from './AllUserList'
import View from './View'
import AddCustomer from './AddCustomer'
import CustomerBalance from './CustomerBalance'
import CustomerReview from './CustomerReview'
import Edit from './Edit'
import Home from './Home/Home'

export default function Navbar() {
    return (
        <div>
  <nav style = {{"width": "1222px"}} class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/epay">E-Pay</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
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
                    <Route path="/home" component={Home}/>
                    <Route path= "/View/:id" component={View}/>
                    <Route path= "/Add-Customer" component={AddCustomer}/>
                    <Route path= "/Customer-Balance" component={CustomerBalance}/>
                    <Route path= "/Customer-Review" component={CustomerReview}/>
                    <Route path= "/Edit/:id" component={Edit}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/AllUserList" component={AllUserList}/>
                </Switch>

        </div>
    )
}
