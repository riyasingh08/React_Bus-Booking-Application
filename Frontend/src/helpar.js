import React from "react";
import "./helpar.css";
import { useState } from "react";
import Tab from "./tab";
import Msg from "./msg";
import Contab from "./contab";

export default function Helpar() {
  const [isToggledTech, setIsToggledTech] = useState(false);
  const [isToggledLMsg, setIsToggledLMsg] = useState(false);
  const [isToggledLCall, setIsToggledLCall] = useState(false);

  return (
    <div>
      <div id="header1">
        <div className="container">
          <div className="logo_deep">
            <img src={require("./images/logo.png")} />
          </div>
          <div></div>
          <div className="h2_deep">WANDERER CARE</div>
          <div className="logo_deep">
            <img src={require("./images/bus_help.jpg")} />
          </div>
          {isToggledTech && <Tab />}
          {isToggledLMsg && <Msg />}
          {isToggledLCall && <Contab />}
          <div>
            <button id="call" />
          </div>
          <div>
            <button
              onClick={() => setIsToggledLCall(!isToggledLCall)}
              id="live_call"
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (setIsToggledTech(!isToggledTech)) {
                }
              }}
              id="technical"
            />
          </div>
          <div>
            <button id="message" />
          </div>
          <div>
            <button id="representative" />
          </div>
          <div>
            <button
              onClick={() => {
                setIsToggledLMsg(!isToggledLMsg);
              }}
              id="live_message"
            />
          </div>
          {/* <div>
            <button onClick={() => setIsToggled(!isToggled)} id="close" />
          </div> */}
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
  );
}
