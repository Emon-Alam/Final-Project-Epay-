import React, {useState} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function AddCustomer() {

    let redirect= useHistory()

    const [add, setAdd] = useState({
    first_name: '', 
    last_name: '',
    full_name: '',
    email: '',
    phone: '',
    password: '',
    type: ''
    })

    const {first_name, last_name, full_name, email, password, phone, type} = add

    const changeUser = (e)=>{
        setAdd({...add, [e.target.name] : e.target.value})
    }

    const formSubmit = (e)=>{
        e.preventDefault();

        const result = axios.post('http://127.0.0.1:8000/api/epay/cadd', add).then((response) => {
            console.log(result)
            setAdd({ first_name: '',last_name: '',full_name: '',email: '',password: '',phone: '',type: ''})
            redirect.push('/home')
        
        })

    }
    

    return (
        <div style = {{"width": "2022px"}} className="container  border shadow">
            <h2>Admin Reffer An Customer</h2>
            <div class="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name= "first_name" value={first_name} onChange= {changeUser} className="form-control" placeholder="Enter first name"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name= "last_name" value={last_name} onChange= {changeUser} className="form-control" placeholder="Enter last name"/>
                </div>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name= "full_name" value={full_name} onChange= {changeUser} className="form-control" placeholder="Enter full name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= "email" value={email} onChange= {changeUser} className="form-control"  placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name= "password" value={password} onChange= {changeUser} className="form-control"  placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name= "phone" value={phone} onChange= {changeUser} className="form-control" placeholder="Enter phone number"/>
                </div>
                <div className="form-group">
                    <label>User Type</label>
                    <input type="text" name= "type" value={type} onChange= {changeUser} className="form-control" placeholder="Enter user type"/>
                </div>
                <button type="submit" className="btn btn-success">ADD Customer</button><br></br>
            </form>
            </div>
        </div>
    )
}
