import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom'; 
import axios from 'axios';
   

export default function UserAddBooking() {

let c=0;
let b=window.location.href;
const [data1,setData1]= useState("");
const [data2,setData2]= useState("");
const [data3,setData3]= useState("");
const [data4,setData4]= useState("");
const [data5,setData5]= useState("");
const [data6,setData6]= useState("");
const [data7,setData7]= useState("");
const [data8,setData8]= useState("");
const [data9,setData9]= useState("");

let loginS=sessionStorage.getItem("login_status");
if(loginS==null||loginS=="")
{
    alert("PLEASE SIGN IN TO CONTINUE");
    return (<Navigate to = {"/login"} />);

}


let userddd1=loginS.substring(loginS.indexOf("USER_NAME"),loginS.indexOf("USER_ID"));
loginS=loginS.replace("\n","");
loginS=loginS.replace("\n","");
loginS=loginS.replace("\n","");
loginS=loginS.replace("\n","");


console.log(loginS);

let uname=loginS.substring(loginS.indexOf("USER_NAME",)+11,loginS.indexOf("USER_ID")-1);
console.log(uname);

let uid=loginS.substring(loginS.indexOf("USER_ID")+9,loginS.indexOf("EMAIL_ID")-1);
console.log(uid);

let uemail=loginS.substring(loginS.indexOf("EMAIL_ID")+10,loginS.indexOf("MOBILE_NUMBER")-1);
console.log(uemail);

let umobno=loginS.substring(loginS.indexOf("MOBILE_NUMBER")+15,loginS.indexOf("\n"));
console.log(umobno);



console.log(b);
let bno=b.substring(b.indexOf('=')+1,b.indexOf('&'));
b=b.replace("=","*");
b=b.replace("&","**");
console.log(bno);

console.log(b);
let bdate=b.substring(b.indexOf('=')+1,b.indexOf('&'));
b=b.replace("=","*");
b=b.replace("&","**");
console.log(bdate);

console.log(b);
let bdest=b.substring(b.indexOf('=')+1,b.indexOf('&'));
b=b.replace("=","*");
b=b.replace("&","**");
console.log(bdest);

console.log(b);
let borigin=b.substring(b.indexOf('=')+1,b.length);
b=b.replace("=","*");
console.log(borigin);

let bprice=Math.floor(Math.random() * (1500 - 100) + 100);
console.log(bprice);

let bpassword=sessionStorage.getItem("password");



let al="CONFIRM BOOKING"+"\n"+"User Name: "+uname+"\n"+"Email Id: "+uemail+"\n"+"Mobile Number: "+umobno+"\n"+"Journey Date: "+bdate+"\n"+"Departure: "+borigin+"\n"+"Arrivial: "+bdest+"\n"+"Total Fare: "+bprice;
alert(al);
    let resp="";
    let article={ busno: bno , travel: { destprice: bprice , destname: bdest , originname: borigin , destdate: bdate } , user: { username: uname , mobno: umobno , email: uemail , password: bpassword } };
    let url= 'http://localhost:8001/booking/saveService';
    axiosRequest(url,article);
    return (<Navigate to = {"/"} />);
}

async function axiosRequest(url,article)
{
  //axios request with error handling
  console.log(url);
  console.log(article);
  let error="";
  try {
    await axios.post(url, article).catch(err => {
    if (err.response.status !== 201) {
      console.log(err.response.status);
      error=err.response.status;
      throw new Error("SOMETING WENT WRONG!"+"\n"+"BOOKING NOT ADDED"+"\n"+"PLEASE TRY AGAIN");
    }
    throw err;
  });
} catch (err) {  
   alert(err);
}
if(error==="")
{
  alert("CONGRATULATIONS BOOKING SUCCESSFULLY ADDED"+"\n"+"HAVE A SAFE JOURNEY");
}
}
