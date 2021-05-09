import React, {useState, useEffect} from 'react'
import './centerStyle.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function View() {

    const {id} = useParams();

    const [view, setView] = useState({
    full_name: '', 
    email: '',
    created_at: ''
    })

    const {full_name, email, created_at} = view

    useEffect(()=>loadUser(),[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/api/view/${id}`)
        console.log(result)
        setView(result.data)
        }
    

    return (
       <div>
           <br/>
            This is the View Customer Profile Section
            <br/><br/>
            <table className="table border shadow" style={{"color":"darkblue","minHeight": "10vh", "width":"132%"}}>
                <thead>
                    <tr>
                    <th scope="col">User Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
        
                                <tr>
                                <th scope="row">{id}</th>
                                <td>{full_name}</td>
                                <td>{email}</td>
                                <td>{created_at}</td>
                                </tr>
                
                    
                    }
                </tbody>
            </table>
        </div>
    )
}
