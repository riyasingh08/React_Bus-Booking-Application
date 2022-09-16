import React, {useState, useEffect} from 'react'
import BusService from './BusServce'
import './BusComponent_Style.css';
import LoginSuccess from './loginSuccess';
import Login from './login';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function BusComponent() {

    let sessionData="";
    let travel_id_data="";
    console.log("in bus component");

    let emailArray=new Array();
    let passwordArray=new Array();
    let idArray=new Array();
    let usernameArray=new Array();
    let mobnoArray=new Array();

    let busnoArray=new Array();
    let destdateArray=new Array();
    let originArray=new Array();
    let destnameArray=new Array();
    let destpriceArray=new Array();
    let travelIdArray=new Array();

    let fetchBookings="";

    let psuccess=false;
    let esuccess=false;
    
    let b=window.location.href;
    b=b.replace("%40","@");
    b=b.replace("%40","@");
    
    console.log("testststs"+b);
    let e=b.substring(b.indexOf('=')+1,b.indexOf('&'));
    let p=b.substring(b.lastIndexOf('=')+1,b.length);
    console.log(e);
    console.log(p);
    

    const [buses, setBuses] = useState([])

    useEffect(() => {
        getBuses()
    }, [])

    const getBuses = () => {

        BusService.getBuses().then((response) => {
            setBuses(response.data)
            
            let d=response.data;
            
            
            
        });
        
    };
    buses.map(
        bus=>
        {
            emailArray.push(bus.user.email);
            passwordArray.push(bus.user.password);
            mobnoArray.push(bus.user.mobno);
            usernameArray.push(bus.user.username);
            idArray.push(bus.user.id);

            busnoArray.push(bus.busno);
            destdateArray.push(bus.travel.destdate);
            originArray.push(bus.travel.originname);
            destnameArray.push(bus.travel.destname);
            destpriceArray.push(bus.travel.destprice);
            travelIdArray.push(bus.travel.id);

        }
    )
    console.log(emailArray);
    console.log(passwordArray);

    console.log("email   "+e);
    console.log("password  "+p);

//-----------------------------------ADMIN LOGIN---------------------------------
if(e==="adminbus@wanderer.in"&&p==="Admin@busBooking2022"){
sessionStorage.setItem("login_admin", "ADMIN ACCESS ");
return (<Navigate to = {"/login"} />);}


//---------------------------------------------------------------------------------
    var c=0;
    console.log(travelIdArray);
    
    if(emailArray.length>0){
    for(let i=0;i<emailArray.length;i++)
    {
        if(emailArray[i]===e)
        {
            let booking="Booking :"+"\n"+"BUS NUMBER: "+busnoArray[i]+"\n"+"TRAVEL DATE: "+destdateArray[i]+"\n"+"DEPARTURE: "+originArray[i]+"\n"+"DESTINATION: "+destnameArray[i]+"\n"+"TOTAL FARE: "+destpriceArray[i];
            fetchBookings=fetchBookings+"\n\n"+booking;
            let bokk="Booking :"+"\n"+"TRAVEL ID:"+travelIdArray[i]+"\n"+"BUS NUMBER: "+busnoArray[i]+"\n"+"TRAVEL DATE: "+destdateArray[i]+"\n"+"DEPARTURE: "+originArray[i]+"\n"+"DESTINATION: "+destnameArray[i]+"\n"+"TOTAL FARE: "+destpriceArray[i];
            travel_id_data=travel_id_data+"\n\n"+bokk;
            esuccess=true;
            if(passwordArray[i]===p&&c===0)
            {
                c++;
                sessionStorage.setItem("password", p);
                psuccess=true;  
                sessionData="USER_NAME: "+usernameArray[i]+"\n"+" USER_ID: "+idArray[i]+"\n"+" EMAIL_ID: "+emailArray[i]+"\n"+" MOBILE_NUMBER: "+mobnoArray[i];
            }
            

        }
        
    }
    if(esuccess===false)
    {
        console.log("User Account not found");
        sessionStorage.setItem("login_statusf", "User account not found !!! Try again");
        return (<Navigate to = {"/login"} />);

    }
    if(psuccess===false)
    {
        console.log("Incorrect password");
        sessionStorage.setItem("login_statusf", "Incorrect Password !!! Try again");
        return (<Navigate to = {"/login"} />);
    }
    if(psuccess===true)
    {
                sessionData=sessionData+fetchBookings;
                sessionStorage.setItem("login_status", sessionData);
                sessionStorage.setItem("user_travel_id",travel_id_data)
                console.log(sessionData);
                console.log("Login successfull");
                alert('Successfully Logged in');
                return (<Navigate to = {"/"} />);
    } 
}  
    
return(
        <div>  

</div>
        
    )
}
    


export default BusComponent