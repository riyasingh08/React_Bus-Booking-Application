import React, {useState, useEffect} from 'react';
import './UserShow_Style.css';
import { Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function UserShow() {

let dd=sessionStorage.getItem("login_status") ? sessionStorage.getItem("login_status"):"" ;
let ddd=sessionStorage.getItem("user_travel_id") ? sessionStorage.getItem("user_travel_id"):"";
console.log(dd.split("Booking :"));
const [userData0,setuserData0]= useState( dd.split("Booking :"));
const [userData,setUserData]= useState(ddd.split("Booking :"));


if(dd===null||dd==="")
{
    
    alert("PLEASE LOGIN FIRST");
    return (<Navigate to = {"/login"} />);
}








  return (
    <div>
    <div id="user_details_show">
    <div><b>YOUR BOOKINGS :</b></div>
    <b>{userData0[0]}</b>
    <div >
    {
        userData.slice(1).map((user,index)=>
            
             
            <p>
                <p>{user}</p>
                
                {/* need travel id from session storage */}
            </p>
        )
    }  
    </div>
    
    <div>
    <button id="del_butt" onClick={del}>DELETE BOOKING</button>
    </div>

    <div>
    <button id="updat_butt" onClick={updat}>UPDATE USER ACCOUNT</button>
    </div>
    
    

    <div id="del_form">
    <form  action=''>
        <input className="uidtodel" type="number" id="uidtodel" name="uidtodel" defaultValue="" placeholder="Enter Booking Id to Delete" required /><br></br>
        <input className="deleteUserBt" id="deleteUserBt" type="button" Value="CANCEL BOOKING" onClick={axiosdel}/>
    </form>
    </div> 

    <div id="updat_form">
    <form  action=''>
        <input className="uidtodel" type="text" id="undtoupdat" name="uidtodel" defaultValue="" placeholder="Enter new User Name" required  /><br></br>
        <input className="uidtodel" type="number" id="umdtoupdat" name="uidtodel" defaultValue="" placeholder="Enter new Mobile Number" required /><br></br>
        <input className="deleteUserBt" id="deleteUserBt" type="button" Value="UPDATE USER" onClick={axiosupdat}/>
    </form>
    </div> 
    
    <div id="wish" >HAPPY JOURNEY</div>
    </div>
    </div>
  )
}
function del(){
    console.log("test");
    let element = document.getElementById("del_form");
    if(ReactDOM.findDOMNode(element).style.display=='none')
    ReactDOM.findDOMNode(element).style.display = 'block';
    else
    ReactDOM.findDOMNode(element).style.display = 'none';
}
function axiosdel(){
    
    
    let element = document.getElementById("uidtodel").value;
    console.log(element);
    alert("CONFIRM CANCELLATION")
    let url="http://localhost:8001/booking/deletebookingService/"+element;
    axios.delete(url);
    alert("BOOKING SUCCESSFULLY DELETED"+"\n"+"PLEASE RELOGIN TO SEE THE CHANGES");
    

}

function updat(){
    console.log("test");
    let element = document.getElementById("updat_form");
    if(ReactDOM.findDOMNode(element).style.display=='none')
    ReactDOM.findDOMNode(element).style.display = 'block';
    else
    ReactDOM.findDOMNode(element).style.display = 'none';
}




async function axiosupdat(){
    
    
    let element1 = document.getElementById("undtoupdat").value;
    let element2 = document.getElementById("umdtoupdat").value;

    let em=sessionStorage.getItem("login_status");
    em=em.substring(em.indexOf("EMAIL_ID:")+10,em.indexOf("MOBILE_NUMBER:")-2);
    console.log(em);

    

    console.log(element1);
    console.log(element2);
     alert("CONFIRM USER CREDENTIAL UPDATE");
     
    let url="http://localhost:8001/booking/updateUser/"+em;
    let bo={ user: { username: element1 , mobno: element2 } }

    let error="";
    try {
    await axios.put(url,bo).catch(err => {
    if (err.response.status !== 201) {
      console.log(err.response.status);
      error=err.response.status;
      throw new Error("SOMETING WENT WRONG!"+"\n"+"USER CREDENTIALS NOT UPDATED"+"\n"+"PLEASE TRY AGAIN");
    }
    throw err;
  });
} catch (err) {  
   alert(err);
}
if(error==="")
{
  alert("USER CREDENTIALS UPDATED"+"\n"+"PLEASE RELOGIN TO SEE THE CHANGES");
}
    
}
