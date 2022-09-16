import React,{useState, useEffect} from 'react'
import axios from 'axios';
//import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

export default function AdminUpdate() {

    let b=window.location.href;
    b=b.replace("%40","@");
    b=b.replace("%40","@");
  


    console.log(b);

    let auid=b.substring(b.indexOf('=')+1,b.indexOf('&'));
    console.log(auid);
    b=b.replace('=','*');
    b=b.replace('&','**');
    console.log(b);

    let aubusno=b.substring(b.indexOf('=')+1,b.indexOf('&'));
    console.log(aubusno);
    b=b.replace('=','*');
    b=b.replace('&','**');
    console.log(b);

    let audate=b.substring(b.indexOf('=')+1,b.indexOf('%')-3);
    console.log(audate);
    b=b.replace('=','*');
    b=b.replace('&','**');
    console.log(b);

    let auorigin=b.substring(b.indexOf('=')+1,b.indexOf('&'));
    console.log(auorigin);
    b=b.replace('=','*');
    b=b.replace('&','**');
    console.log(b);

    let audest=b.substring(b.indexOf('=')+1,b.length);
    console.log(audest);
    b=b.replace('=','*');
    console.log(b);

    
    let putUrl="http://localhost:8001/booking/updateListing/"+auid;
    console.log(putUrl);
    
    

    useEffect(() => {
    let article={ fromOrigin: auorigin , toDest: audest , date: audate , abusno: aubusno };
    axios.put(putUrl, article)
    alert("SUCCESSFULLY UPDATED LISTING");
        
        
        
    }, []); 
    

    
    
    


    


  return (<Navigate to = {"/login"} />)
}
