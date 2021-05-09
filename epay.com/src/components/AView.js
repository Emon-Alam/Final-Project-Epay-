import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function AView() {

    const {id} = useParams();

    const [view, setView] = useState({
    email: '',
    phone: '',
    type: '',
    first_name: '',
    last_name: ''
    })

    const { email, phone ,type ,first_name ,last_name } = view

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/epay/view/${id}`)
        console.log(result)
        setView(result.data)
        }
    

    return (
        <div style = {{"width": "2022px"}} className="container  border shadow">
            <h1>{type}-{first_name} details</h1>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
        
                                <tr>
                                <th scope="row">{id}</th>
                                <td>{first_name}</td>
                                <td>{last_name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                </tr>
                
                    
                    }
                </tbody>
            </table>
        </div>
    )
}
