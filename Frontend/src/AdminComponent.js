import React, {useState, useEffect} from 'react'
import AdminService from './AdminServce'
import './AdminComponent_Style.css';
import ReactDOM from 'react-dom';

let a1='http://localhost:8001/booking/getAdminListing/';
let a="";
function AdminComponent() {

    const [data1,setData1]= useState(true);
    let b=window.location.href;
    a=b.substring(b.indexOf('?')+1,b.lastIndexOf('T'));
    let f = a.substring(a.indexOf('=')+1,a.indexOf('&'));
    let t = a.substring(a.indexOf('&')+4,a.lastIndexOf('&'));
    let d = a.substring(a.lastIndexOf('=')+1,a.length);
    a=a1+f+'/'+t+'/'+d;

    

    const [admins, setAdmins] = useState([])

    useEffect(() => {
        getAdmins()
    }, [])

    const getAdmins = () => {

        AdminService.getAdmins(a).then((response) => {
            setAdmins(response.data)
            console.log("Array test"+response.data);

            if(response.data.length<1){
                console.log("Array empty"+response.data.length);
                //alert("SORRY NO BUS FOUND");
                
                let element = document.getElementById("no_bus_heading");
                
                ReactDOM.findDOMNode(element).style.display = 'block';
                
            }
            else if(response.data.length===0){
                let element = document.getElementById("no_bus_heading");
                
                ReactDOM.findDOMNode(element).style.display = 'none';

            }
            



            
        });
    };
    






    



    return (
        <div className = "container">
            
            <h1 id='no_bus_heading'> SORRY NO BUSES AVAILABLE </h1>

            <table className = "dataTab2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ABUSNO</th>
                        <th>DATE</th>
                        <th>TODEST</th>
                        <th>FROMORIGIN</th>
                        <th>ACTIONS</th>
                        
                    </tr>

                </thead>
                <tbody  id="yyyy">
                    {
                        admins.map(
                                admin =>
                                <tr key = {admin.aid}>
                                    <td> {admin.aid }</td>
                                    <td> {admin.abusno }</td>
                                    <td> {admin.date }</td>    
                                    <td> {admin.toDest }</td>
                                    <td> {admin.fromOrigin }</td>
                                    <td>
                                    <form  action="./UserAddBooking"onSubmit={""}>
                                        <input className="noneAddBusno" type="number" id="noneAddBusno" name="noneAddBusno" value={admin.abusno} />
                                        <input className="noneAdddate" type="datetime" id="noneAdddate" name="noneAdddate" value={admin.date} />
                                        <input className="noneAddtoDest" type="text" id="noneAddtoDest" name="noneAddtoDest" value={admin.toDest} />
                                        <input className="noneAddfromOrigin" type="text" id="noneAddfromOrigin" name="noneAddfromOrigin" value={admin.fromOrigin} />
                                        <input className="userAddBookibg" id="userAddBookibg" type="submit" value="BOOK YOUR TICKETS" />
                                    </form>

                                    </td>
                                    


                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}


export default AdminComponent