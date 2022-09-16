import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './home_style.css';
import { Helmet } from "react-helmet";






export default function Home() {
  return (
    <>
    <Helmet>
      <script type="text/javascript">
        console.log(sessionStorage.getItem("login_status"));
      {/* if(sessionStorage.getItem("login_status")!==null&&sessionStorage.getItem("login_status")!=="")
         alert('Successfully Logged in'); */}
          
      </script>
      </Helmet>
    <div>
        <body> 
        <section>
  <div id="holder" style={{"display":"none"}}>
    <div className="fare">
      <table id="yy" width="50%" border={10} style={{"width":"1000px","height":"320px","border-radius":"20px","border-color":"rgba(240, 248, 255, 0.61)"}}>
        <caption style={{"color":"#6cf","font-size":"30px","font-family":"cursive","background-color":"rgba(0, 0, 255, 0.596)"}}>
          <b>FARE DETAILS </b></caption>
        <thead>
          <tr style={{"background-color":"rgba(251, 255, 0, 0.938)","font-family":"cursive"}}>
            <th>UNIT</th>
            <th>KILOMETER</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{"background-color":"rgba(0, 162, 255, 0.938)","font-family":"cursive"}}>
            <td>LESS THAN </td>
            <td>5</td>
            <td>20</td>
          </tr>
          <tr style={{"background-color":"rgba(255, 0, 0, 0.938)","font-family":"cursive"}}>
            <td>LESS THAN </td>
            <td>15</td>
            <td>30</td>
          </tr>
          <tr style={{"background-color":"rgba(43, 255, 0, 0.938)","font-family":"cursive"}}>
            <td>LESS THAN </td>
            <td>30</td>
            <td>70</td>
          </tr>
          <tr style={{"background-color":"rgba(247, 0, 255, 0.938)","font-family":"cursive"}}>
            <td>LESS THAN </td>
            <td>70</td>
            <td>100</td>
          </tr>
          <tr style={{"background-color":"rgba(255, 145, 0, 0.938)","font-family":"cursive"}}>
            <td>LESS THAN </td>
            <td>150</td>
            <td>220</td>
          </tr>
          <tr style={{"background-color":"rgba(244, 245, 210, 0.938)","font-family":"cursive"}}>
            <td>UPTO </td>
            <td>220</td>
            <td>350</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="body1" id="Body1"><img src={require('./images/BODY1.png')} alt="" /></div>
  <div className="body2"><img src={require('./images/body2.png')} alt="" /></div>
  <div className="body3"><img src={require('./images/body3.png')} alt="" /></div>
  <div className="body4"><img src={require('./images/body4.png')} alt="" /></div>
  <div className="body5"><img src={require('./images/body5.png')} alt="" /></div>
  <div className="body6"><img src={require('./images/body6.png')} alt="" /></div>
  <input id="faree" type="button" defaultValue="KNOW MORE" onclick="myFunction()" />
</section>
 </body> 
    </div>
    </>
    
  )
}