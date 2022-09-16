import { render } from '@testing-library/react';
import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import BusComponent from './BusComponent';
import './login_style.css';
import { Helmet } from "react-helmet";
import ReactDOM from 'react-dom';
import AdminGetAll from './adminGetAll';
import AdminUpdate from './AdminUpdate';
import AdminDelete from './AdminDelete';




let e="";
let p="";
let d="";
// export default function Login() {
  class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.logout1 = this.logout1.bind(this);
      this.onload1 = this.onload1.bind(this);
      this.addformToggle = this.addformToggle.bind(this);
      this.updateformToggle = this.updateformToggle.bind(this);
      this.updateformToggle = this.updateformToggle.bind(this);
      this.deleteformToggle = this.deleteformToggle.bind(this);
      
      
    }
  
    handleChange1(event) {
      this.setState({value: event.target.value});
      e=event.target.value;
    }
    handleChange2(event) {
      this.setState({value: event.target.value});
      p=event.target.value;
    }
  
    handleSubmit(event) {
      
      d=e+"&"+p;
      alert("Confirm Submission");
      BusComponent();
      event.preventDefault();
    }

     logout1(e){
      


      if((sessionStorage.getItem("login_statusf")!==null&&sessionStorage.getItem("login_statusf")!=="")
      ||(sessionStorage.getItem("login_status")!==null&&sessionStorage.getItem("login_status")!=="")
      ||(sessionStorage.getItem("login_admin")!==null&&sessionStorage.getItem("login_admin")!=="")){
      sessionStorage.setItem("login_statusf", "");
      sessionStorage.setItem("login_status", "");
      sessionStorage.setItem("login_admin", "");
      console.log(sessionStorage.getItem("login_statusf"));
      console.log(sessionStorage.getItem("login_status"));
      console.log(sessionStorage.getItem("login_admin"));
      alert("SUCCESSFULLY LOGED OUT");

      let element1 = document.getElementById("AdminPannel");
      ReactDOM.findDOMNode(element1).style.display = 'none';

      let element2 = document.getElementById("adminAdd");
      ReactDOM.findDOMNode(element2).style.display = 'none';

      let element3 = document.getElementById("adminUpdat");
      ReactDOM.findDOMNode(element3).style.display = 'none';

      let element4 = document.getElementById("adminDel");
      ReactDOM.findDOMNode(element4).style.display = 'none';
      
     }
     else
     alert("YOURE ARE NOT LOGGED IN \n PLEASE LOGIN FIRST");
    }

    onload1(){
      console.log("onload");
    if(sessionStorage.getItem("login_admin")!==null&&sessionStorage.getItem("login_admin")!=="")
    {

      let element = document.getElementById("AdminPannel");
      ReactDOM.findDOMNode(element).style.display = 'block';
    }
  }
  componentDidMount() {
    this.onload1()
}
addformToggle()
{
      let element = document.getElementById("adminAdd");
      if(ReactDOM.findDOMNode(element).style.display=='none')
      ReactDOM.findDOMNode(element).style.display = 'block';
      else
      ReactDOM.findDOMNode(element).style.display = 'none';

}
updateformToggle()
{
      let element = document.getElementById("adminUpdat");
      if(ReactDOM.findDOMNode(element).style.display=='none')
      ReactDOM.findDOMNode(element).style.display = 'block';
      else
      ReactDOM.findDOMNode(element).style.display = 'none';

}
deleteformToggle()
{
      let element = document.getElementById("adminDel");
      if(ReactDOM.findDOMNode(element).style.display=='none')
      ReactDOM.findDOMNode(element).style.display = 'block';
      else
      ReactDOM.findDOMNode(element).style.display = 'none';

}
showUser()
{
  
}
    
  



  render(){
  return (
    <>
    <Helmet>
      <script type="text/javascript">
        console.log(sessionStorage.getItem("login_statusf"));
      if(sessionStorage.getItem("login_statusf")!==null&&sessionStorage.getItem("login_statusf")!=="")
         alert(sessionStorage.getItem("login_statusf"));
      sessionStorage.setItem("login_statusf", "");
      var v="Already logged in as :"+"\n"+"    USER DETAILS"+"\n"+sessionStorage.getItem("login_status");
      
      if(sessionStorage.getItem("login_admin")!==null&&sessionStorage.getItem("login_admin")!=="")
        alert(sessionStorage.getItem("login_admin"))
      

        

          
      </script>
      </Helmet>
  
  <div  >
  
  <div className="bg1"></div>
  <div className="m1">WE TRAVEL</div>
  <div className="m2">not to escape life</div>
  <div className="m3">BUT FOR LIFE</div>
  <div className="m4">not to escape us</div>
  <div className="di">
  <div>
  <form  action="./BusComponent"  onSubmit={this.handleSubmit}>
    <input className="efield" type="email" id="email" name="email" defaultValue="" placeholder="Enter email Id"  onChange={this.handleChange1} required /><br />
    <input className="pfield" type="password" id="password" name="password" defaultValue="" placeholder="Enter password" onChange={this.handleChange2} required  /><br /><br />
    
    <input className="sbutton" type="submit" defaultValue="Submit" />
  </form> 
  <h id="noaccsign">DONT HAVE AN ACCOUNT </h>
  <button id='logoutbutton'  onClick={this.logout1}>LOGOUT</button>
  

  <form id="noConflict" action="./SignUpUser">
    <input className="signupbutton" id="signupbutton" type="submit" value="SIGN UP"/>
  </form>

  
  
  
</div>
</div>
<div id="adminAdd">
<form  action="./AdminAdd">
    <input className="addBusno" type="number" id="addBusno" name="addBusno" defaultValue="" placeholder="Enter Busno" required  /><br></br>
    <input className="addDate" type="datetime-local" id="addDate" name="addDate" defaultValue="" placeholder="Enter Date" required  /><br></br>
    <input className="addOrigin" type="text" id="addOrigin" name="addOrigin" defaultValue="" placeholder="Enter departure" required /><br /><br />
    <input className="addDest" type="text" id="addDest" name="addDest" defaultValue="" placeholder="Enter destination" required /><br /><br />
    
    <input className="addAdminbutton" id="addAdminbutton" type="submit" defaultValue="Submit" />
</form>
</div>

<div id="adminUpdat">
<form  action="./AdminUpdate">
    <input className="idtoedit" type="number" id="idtoedit" name="idtoedit" defaultValue="" placeholder="Enter Listing Id to Update" required  /><br></br>
    <input className="addBusno" type="number" id="addBusno" name="addBusno" defaultValue="" placeholder="Enter Busno" required  /><br></br>
    <input className="addDate" type="datetime-local" id="addDate" name="addDate" defaultValue="" placeholder="Enter Date" required  /><br></br>
    <input className="addOrigin" type="text" id="addOrigin" name="addOrigin" defaultValue="" placeholder="Enter departure" required /><br /><br />
    <input className="addDest" type="text" id="addDest" name="addDest" defaultValue="" placeholder="Enter destination" required /><br /><br />
    
    <input className="addAdminbutton" id="addAdminbutton" type="submit" defaultValue="Submit" />
</form>
</div>

<div id="adminDel">
<form  action="./AdminDelete">
    <input className="idtodel" type="number" id="idtodel" name="idtodel" defaultValue="" placeholder="Enter Listing Id to Delete" required  /><br></br>
    <input className="deleteAdminbutton" id="deleteAdminbutton" type="submit" defaultValue="Submit" />
</form>
</div>

<div id="AdminPannel">
<form id="adminPannelGet" action="./adminGetAll">
<input className="GetAd" id="GetAd" type="submit" value="GET ALL LISTINGS"/>
</form>
<button id='adminPanneAdd'  onClick={this.addformToggle}>ADD LISTINGS</button>
<button id='adminPanneUpdat'  onClick={this.updateformToggle}>UPDATE LISTINGS</button>
<button id='adminPanneUDel'  onClick={this.deleteformToggle}>DELETE LISTINGS</button>
</div>

<div id="UserPannel">
  <form id="adminPannelGet" action="./UserShow">
    <input className="GetAd" id="GetAd" type="submit" value="YOUR BOOKINGS"/>
  </form>
</div>







</div>
</>
  )
}
}
export default Login;
