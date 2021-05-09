import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function CustomerBalance() {
   
const [dataa, setData] = useState([])



useEffect(async()=>
await axios.get('http://127.0.0.1:8000/api/epay/ctransition').then(response => {
    setData(response.data.reverse())
    localStorage.setItem("token", JSON.stringify(response.data));
}),[]
);

const deleteProfile = async (id)=>{
    await axios.delete(`http://127.0.0.1:8000/api/epay/ctransition/delete/${id}`)
    axios.get('http://127.0.0.1:8000/api/epay/ctransition').then(response => {
    setData(response.data.reverse())
})
}
   
    return (
        <div style = {{"width": "2022px"}} className="container  border shadow">
            <h2>All Type Balance details</h2>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col"> ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Total Purchased</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Loan</th>
                    <th scope="col">Card No</th>
                    <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        dataa.map(user=>{
                            return(
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.bank_name}</td>
                                <td>{user.total_purchased}</td>
                                <td>{user.balance}</td>
                                <td>{user.loan}</td>
                                <td>{user.card_no}</td>
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



