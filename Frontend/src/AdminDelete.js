import React,{useState, useEffect} from 'react'
import axios from 'axios';
//import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

export default function AdminDelete() {

    let b=window.location.href;
    b=b.replace("%40","@");
    console.log(b);
    let delId=b.substring(b.indexOf('=')+1,b.length);
    console.log(delId);
    
    
    

     useEffect(() => {
        let delUrl="http://localhost:8001/booking/deleteListing/"+delId;
        axios.delete(delUrl)
        alert("SUCCESSFULLY DELETED LISTING");
            
            
            
        }, []); 

  return (<Navigate to = {"/login"} />)
}
