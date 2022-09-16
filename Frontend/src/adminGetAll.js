
import React, {useState, useEffect} from 'react'
import AdminService from './AdminServce'
import './adminGetAll.css'



export default function AdminGetAll() {
    console.log("adminGetAll");
    const [admins, setAdmins] = useState([])

    useEffect(() => {
        getAllAdmins()
    }, [])

    const getAllAdmins = () => {

        AdminService.getAllAdmins().then((response) => {
            setAdmins(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Admin List</h1>

            <table className = "dataTab1">
                <thead>
                    <tr>
                        <th>AID</th>
                        <th>ABUSNO</th>
                        <th>DATE</th>
                        <th>TODEST</th>
                        <th>FROMORIGIN</th>
                        
                    </tr>

                </thead >
                <tbody >
                    {
                        admins.map(
                                admin =>
                                <tr  key = {admin.aid}>
                                    <td> {admin.aid }</td>
                                    <td> {admin.abusno }</td>
                                    <td> {admin.date }</td>    
                                    <td> {admin.toDest }</td>
                                    <td> {admin.fromOrigin }</td>
                                    


                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}
