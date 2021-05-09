import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function AllUserList() {
   
const [dataa, setData] = useState([])



useEffect(async()=>
await axios.get('/api/epay/view/all').then(response => {
    setData(response.data.reverse())
    localStorage.setItem("token", JSON.stringify(response.data));
}),[]
);

const deleteProfile = async (id)=>{
    await axios.delete(`/api/epay/delete/${id}`)
    axios.get('/api/epay/view/all').then(response => {
    setData(response.data.reverse())
})
}
   
    return (
        <div style = {{"width": "2022px"}} className="container  border shadow">
            <h1>All Type User details</h1>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">User Type</th><br></br>
                    <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        dataa.map(user=>{
                            return(
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.type}</td>
                                <td><Link className="btn btn-primary" to={`/View/${user.id}`}>View</Link></td>
                                <td><Link className="btn btn-warning" to={`/Edit/${user.id}`}>Edit</Link></td>
                                <td><button className="btn btn-danger" onClick = {()=>  deleteProfile(user.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}



