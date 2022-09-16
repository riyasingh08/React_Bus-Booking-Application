import React from "react";

export default function Contab() {
  return (
    <div>
      <div className="fare">
        <table className="table_deep"
          id="tech"
          width="50%"
          border="15px"
          style={{
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
        >
          <caption
            style={{
              color: "#6cf",
              fontSize: "30px",
              fontFamily: "cursive",
              backgroundColor: "rgba(0, 0, 255, 0.596)",
            }}
          >
            Contacts
          </caption>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arnab Nag </td>
              <td>arnabnag2000@gmail.com</td>
              <td>8777253982</td>
            </tr>
            <tr>
              <td>Riya Singh</td>
              <td>riyasingh@gmail.com</td>
              <td>8910272822</td>
            </tr>
            <tr>
              <td>Deeptaragh Roy </td>
              <td>roydeeptaragh@gmail.com</td>
              <td>9051737601 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
