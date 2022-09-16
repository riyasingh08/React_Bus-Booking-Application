import React from 'react';
import './AboutPagStyle.css';
//import Contact from './Contact';
import { Link } from "react-router-dom";
const About = () =>{

    return(
    <div className="aboutstyle">
      <h1 className='hh1' Style=" position: absolute;margin-left: 0%;">About Us</h1>
      <div className="testmrquee">
      <marquee width="70%" direction="left" height="100px">
      We travel not to escape life,but for life,not to escape us
        </marquee>
      </div>
        <div className="Container1">
            <div className="Upper">
                <div className="MissionStatement">
                    <h2 className='hh2' Style="bold">Why us?</h2>
                    <p>
                        <li>Get the best-in-class bus travel experience </li>
                        <li>We carefully curate the best rated buses .</li>
                        <li>Our journey is Safe, punctual & Comfortable.</li>
                    </p>
                        <h3 className='hh3'>Hurry up!! and book your ride now.</h3>
                        <button className="buttonBook"><Link to="/login">BOOK NOW</Link></button>
                </div>
                <div className="Values">
                <h2 className='hh2'>Our values</h2>
                 <p>
                    <li>We work to be transparent</li>
                    <li>We believe in Autonomy & Accountability</li>
                    <li>We lean towards long-term impact</li>
                    <li>We believe our best perk is amazing peers</li>
                 </p>
            </div>
            </div>
            <div className="Middle">
                <div className="History">
                    <h2 className='hh2'>History</h2>
                    <p id="historyPara">
                        <li>Established in 2022</li>
                        <li>Head-office:Kolkata</li>
                        <li>Address:201A,Ripon street</li>
                        <li>Pin:kolkata-700118</li>
                    </p>
                </div>
            </div>
            <div className="Lower">
                <div className="contact">
                    <h2 className='hh2'>Reach us here</h2><br></br>
                    <button className="buttndes"><Link to="/helpar">Click Me!</Link></button>
                </div>
            </div>

        </div>
    </div>  
    )
}
export default About;