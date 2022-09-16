import React from 'react';
import './SignUpUser_Style.css';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'; 


export default function SignUpUser() {


  

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);


    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit1 = event => {
      //  prevent page refresh
      event.preventDefault();
      let pass1 = document.getElementById("newSignPass").value;
      let pass2 = document.getElementById("newSignRePass").value;
      if(pass1===pass2){
      freeBookingForm();
      let sh=document.getElementById("errorShow");
      ReactDOM.findDOMNode(sh).style.display = 'none';
      }
      else{
        let sh=document.getElementById("errorShow");
        ReactDOM.findDOMNode(sh).style.display = 'block';

      }
      
      
      
    };

    const handleSubmit2 = event => {
      event.preventDefault();
      //http://localhost:3000/UserAddBooking?noneAddBusno=1001&noneAdddate=2022-06-24&noneAddtoDest=kolkata&noneAddfromOrigin=digha
      let noneAddBusno=document.getElementById("newSignName1").value;
      let noneAdddate=document.getElementById("newSignEmail1").value;
      let noneAddtoDest=document.getElementById("newSignPass1").value;
      let noneAddfromOrigin=document.getElementById("newSignMobno1").value;

      let noneAddName=document.getElementById("newSignName").value;
      let noneAddEmail=document.getElementById("newSignEmail").value;
      let noneAddMobno=document.getElementById("newSignMobno").value;
      let noneAllpass=document.getElementById("newSignPass").value;
      let noneAddfare=0;

      console.log(noneAddBusno);
      console.log(noneAdddate);
      console.log(noneAddtoDest);
      console.log(noneAddfromOrigin);
      console.log(noneAddName);
      console.log(noneAddEmail);
      console.log(noneAddMobno);
      console.log(noneAllpass); 
      console.log(noneAddfare);

      let article={ busno: noneAddBusno , travel: { destprice: noneAddfare , destname: noneAddtoDest , originname: noneAddfromOrigin , destdate: noneAdddate } , user: { username: noneAddName , mobno: noneAddMobno , email: noneAddEmail , password: noneAllpass } };
      let url= 'http://localhost:8001/booking/saveService';
      axiosRequest1(url,article);
      return (<Navigate to = {"/"} />);
      
      
    };




  return (
    <div>
    <div id="qqqq">
    <div id="UserSignDiv">
        <form id= "UserSignForm" onSubmit={handleSubmit1}  >
        <input className="newSignName" type="text" id="newSignName" name="newSignName" defaultValue="" placeholder="Enter Your Name" required  /><br></br>
        <input className="newSignEmail" type="email" id="newSignEmail" name="newSignEmail" defaultValue="" placeholder="Enter your Email ID" required  /><br></br>
        <input className="newSignMobno" type="number" id="newSignMobno" name="newSignMobno" defaultValue="" placeholder="Enter your Mobile Number" required /><br /><br />
        <input className="newSignPass" type="password" id="newSignPass" name="newSignPass" defaultValue="" placeholder="Enter password" required  /><br /><br />
        <input className="newSignRePass" type="password" id="newSignRePass" name="newSignRePass" defaultValue="" placeholder="Confirm password" required /><br /><br />
        <input className="newSignButt" id="newSignButt" type="submit" value={"CREATE ACCOUNT"}  />
        </form>

        <form id= "freeForm" onSubmit={handleSubmit2}>
        <input className="newSignName1" type="number" id="newSignName1" name="newSignName1" defaultValue="" placeholder="Enter bus numbr" required  /><br></br>
        <input className="newSignEmail1" type="date" id="newSignEmail1" name="newSignEmail1" defaultValue="" placeholder="Enter travel datae" required  /><br></br>
        <input className="newSignMobno1" type="text" id="newSignMobno1" name="newSignMobno1" defaultValue="" placeholder="Enter departure location" required /><br /><br />
        <input className="newSignPass1" type="text" id="newSignPass1" name="newSignPass1" defaultValue="" placeholder="Enter arrival location" required /><br /><br />
        
        <input className="newSignButt" id="newSignButt1" type="submit" value={"BOOK FOR FREE"} />
        </form>
        <div id="errorShow" >Passwords must match*</div>

        <div id="uploadImg"
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
        
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div id="imgTestUpload" 
        style={{
          height: "200px",
          width: "200px",
          border: "3px dashed white",
          borderRadius:"100%"
          
          
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img 
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius:"100%",
            border:"20px"
            
            
          }}
        />
      </div>
      <div id="textUpload">
        Click to upload Image
      </div>
    </div>
    </div>
    </div>






    <div id="footer_deep">
        Copywrite&copy; Group-5
        <div className="f1">
          {
            "Wanderer is the world's largest online bus ticket booking service. We are trusted by over 25 million happy customers globally."
          }
          {
            "Wanderer offers bus ticket booking through its website, iOS and Android mobile apps for all major routes."
          }
        </div>
      </div>
    </div>
  )
}
function freeBookingForm()
{
  
  let ele1 = document.getElementById("UserSignForm");
  ReactDOM.findDOMNode(ele1).style.display = 'none';
  console.log("form2")
  let ele2 = document.getElementById("freeForm");
  ReactDOM.findDOMNode(ele2).style.display = 'block';
}

async function axiosRequest1(url,article)
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
      throw new Error("SOMETING WENT WRONG!"+"\n"+"ACCOUNT NOT CREATED"+"\n"+"PLEASE TRY AGAIN");
    }
    throw err;
  });
} catch (err) {  
   alert(err);
}
if(error==="")
{
  alert("CONGRATULATIONS ACCOUNT SUCCESSFULLY CREATED"+"\n"+"ENJOY THE FREE RIDE");
}
}
