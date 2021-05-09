import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function Edit() {

    let redirect = useHistory()

    const {id} = useParams();
    
    const [edit, setEdit] = useState({
    name: '', 
    email: '',
    phone: '',
    last_name: ''
    })

    const {name, email, phone, last_name} = edit

    const changeUser = (e)=>{
        setEdit({...edit, [e.target.name] : e.target.value})
    }

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/epay/edit/${id}`)
        console.log(result)
        setEdit(result.data)
        }

    const formSubmit = (e)=>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/epay/update/${id}`, edit).then((response) => {
            setEdit({name: '', email: '',phone: '',last_name: ''})
            redirect.push('/')
        })

       
    }
    

    return (
        <div style = {{"width": "2022px"}} className="container  border shadow">
            
            <div class="centerStyle">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name= "name" value={edit.first_name} onChange= {changeUser} className="form-control" placeholder="Enter First Name"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name= "last_name" value={edit.last_name} onChange= {changeUser} className="form-control" placeholder="Enter Last Name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= "email" value={edit.email} onChange= {changeUser} className="form-control"  placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name= "phone" value={edit.phone} onChange= {changeUser} className="form-control"  placeholder="Enter phone"/>
                </div>
                <button type="submit" className="btn btn-warning">Save</button>
            </form>
            </div>
        </div>
    )
}
