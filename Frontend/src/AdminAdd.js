import React,{useState, useEffect} from 'react'
import axios from 'axios';
//import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

export default function AdminAdd() {

    let b=window.location.href;
    b=b.replace("%40","@");
    b=b.replace("%40","@");
    
    console.log(b);
    
    let addbusno=b.substring(b.indexOf('=')+1,b.indexOf('&'));
    let adddate=b.substring(b.indexOf('&')+9,b.indexOf('%')-3);
    let addorigin=b.substring(b.indexOf("addOrigin")+10,b.lastIndexOf('&'));
    let adddest=b.substring(b.lastIndexOf('=')+1,b.length);
    console.log(addbusno);
    console.log(adddate);
    console.log(addorigin);
    console.log(adddest);

    useEffect(() => {
    let article={ fromOrigin: addorigin , toDest: adddest , date: adddate , abusno: addbusno };
    axios.post('http://localhost:8001/booking/saveListing', article)
    alert("SUCCESSFULLY ADED NEW LISTING");
        
        
        
    }, []);
    

    
    
    


    


  return (<Navigate to = {"/login"} />)
}
