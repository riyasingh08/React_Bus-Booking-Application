import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header_style.css';
import { Link } from 'react-router-dom';
import AdminComponent from './AdminComponent';

let s="";
export default function Header1() {
  function greetUser() {
    <AdminComponent /> 
  }
  return (
    
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <title>Home Page</title>
  <div className="container">
    <header className="Header">
    
      <div className="logo"><img src={require('./images/logo.png')} alt="" /></div>
      {/* <div class="logo1"><img src="..//images/right bus.png" alt=""></div> */}
       <div className="logo2"><img src={require('./images/capg.png')} alt="" /></div>
      <div className="logo3"><img src={require('./images/bus.png')} alt="" /></div>
      <div className="logo4"><img src={require('./images/2258607-removebg-preview.png')} alt="" /></div>
      <div className="logo5"><img src={require('./images/king.png')} alt="" /></div>
      <div className="logo6"><img src={require('./images/moneyback-free-png-image-100-money-back-guarantee-11562975662o2whosrrtc-removebg-preview-removebg-preview (2).png')} alt="" /></div>
      <div className="logo7"><img src={require('./images/380-3806832_100-customer-satisfaction-guarantee-customer-satisfaction-guarantee-badge-removebg-preview-removebg-preview.png')} alt="" /></div>
      <div id="acc1"><img src={require('./images/kisspng-google-account-google-copy.png')} alt="" /></div>
      <div id="acc2"><img src={require('./images/kisspng-google-account-google-search-customer-service-goog-login-button-5acdd8de7b63d4.5206446615234398385054-removebg-preview (1).png')} alt="" /></div>
      <div id="acc3"><img src={require('./images/circle-removebg-preview.png')} alt="" /></div>
      <div><h id="acc4">A</h></div> 
      <nav>
        <ul className="a">
          <li><Link to="about">ABOUT US</Link></li>
          <li><Link to="helpar">HELP</Link></li>
          <li><Link to="login">LOGIN</Link></li>
          <li><Link to="/">HOME</Link></li>
          
        </ul>
        <ul className="A">
          <li>
            <select className="srv" id>
              <option />
              <optgroup label="TICKET BOOKING">
                <option>BOOK SINGLE TICKET</option>
                <option>BOOK GROUP TICKET</option>
                <option>BOOK WHOLE BUS</option>
              </optgroup>
              <optgroup label="FREIGHT CARRY">
                <option>ONLY FREIGHT</option>
                <option>PASSENGER WITH FREIGHT</option>
              </optgroup>
            </select>
          </li>
        </ul>
        <ul className="B">
          <li>
            <select className="srv1" id>
              <option />
              <optgroup label="ONBOARD AMINITIES">
                <option>AIR CONDITIONER</option>
                <option>FREE WIFI</option>
                <option>CHARGING PORT </option>
                <option>PERSONAL DISPLAY</option>
              </optgroup>
              <optgroup label="SLEEPER AMINITIES">
                <option>PILLOW</option>
                <option>PILLOW COVER</option>
                <option>BED COVER</option>
                <option>PILLOW COVER</option>
                <option>BLANKET</option>
              </optgroup>
            </select>
          </li>
        </ul>
        <ul className="C">
          <li>
            <select className="srv2" id>
              <option />
              <optgroup label="FREE PLAN">
                <option>MAX BOOKING OF 10 PERSON</option>
                <option>LOW PRIORITY BOOKING</option>
                <option>NO SEATS UPDTAE AVAILABLE </option>
              </optgroup>
              <optgroup label="PREMIUM">
                <option>MAXIMUM LIMIT OF 5 WHOLE BUSES </option>
                <option>HIGH PRIORITY BOOKING</option>
                <option>HIERARCHICAL SEAT UPDATES AVAILABLE </option>
              </optgroup>
              <optgroup label="PREMIUM+">
                <option>NO LIMIT OF BOOKING </option>
                <option>HIGHEST PRIORITY BOOKING</option>
                <option>FIRST PREFERNCE SEAT UPDATES AVAILABLE </option>
              </optgroup>
            </select>
          </li>
        </ul>
      </nav>
      <div className="h2"><b>TRAVEL LIKE A KING</b> </div>
      <div id="ivd"><b>Please fill in the above fields *</b> </div>
      <div className="table">
        <form id="serach_form" action="./AdminComponent" method="GET" onSubmit={"greetUser"} >
          <div className="col">
            <br /><table>
              <tbody><tr>
                  <td><b>FROM:</b></td>
                  <td><input type="text" name="from" placeholder="FROM" required /></td>
                </tr>
              </tbody></table>
          </div>
          <div className="col">
            <br /><table>
              <tbody><tr>
                  <td><b>TO:</b></td>
                  <td><input type="text" name="to" placeholder="TO" required /></td>
                </tr>
              </tbody></table>
          </div>
          <div className="col">
            <br /><table>
              <tbody><tr>
                  <td><b>DATE AND TIME:</b></td>
                  <td><input type="datetime-local" name="date" placeholder="DATE" required /></td>
                </tr>
              </tbody></table>
          </div>
          <div className="col">
            <table>
              <tbody><tr>
                  <td><br /><input id="sub" type="submit" value=""/></td>
                </tr>
              </tbody></table>
          </div>
        </form></div>
    </header>


    
    
  </div>
  
  </div>
  )
}
