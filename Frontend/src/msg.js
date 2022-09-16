import React from "react";
import "./msg.css";

export default function Msg() {
  return (
    <div>
      <div className="form">
        <div className="title">We're here 24 x 7 to help you...</div>
        <div className="subtitle">Enter your queries below: </div>

        <div className="input-container ic1">
          <input id="subject" className="input" type="text" placeholder="Enter subject" />
          <div className="cut"></div>
          {/* <label htmlFor="subject" className="placeholder">
            Enter subject
          </label> */}
        </div>

        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder="Enter Description"
          />
          <div className="cut"></div>
          {/* <label htmlFor="description" className="placeholder">
            Enter Description
          </label> */}
        </div>

        <button
          type="text"
          className="submit"
          onClick={() =>
            alert("Query recorded...We will get back to you soon...")
            
          }
        >
          submit
        </button>
      </div>
    </div>
  );
}
