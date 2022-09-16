import React from "react";

export default function Tab() {
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
            FAQS
          </caption>
          <thead>
            <tr>
              <th>ERROR</th>
              <th>REASON</th>
              <th>POSSIBLE SOLUTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UNAVAILABILITY OF BUSES </td>
              <td>NO BUS AVAILABLE ON THE SELECTED DATE OR TIME</td>
              <td>PLEASE TRY DIFFERNT DATE OR TIME</td>
            </tr>
            <tr>
              <td>REFUND</td>
              <td>NO REFUNDS RECEIVED</td>
              <td>REFUNDS WILL BE PROCESSED WITHIN 48 HOURS</td>
            </tr>
            <tr>
              <td>OFFERS NEW SIGNUP </td>
              <td>AVAILABLE OFFERS</td>
              <td>NEW USER WILL GET FLAT 50 % OFF </td>
            </tr>
            <tr>
              <td>OFFERS EXISTING USERS </td>
              <td>AVAILABLE OFFERS</td>
              <td>
                EXISTING CUSTOMER WILL GET OFFERS BASED ON THEIR PAST USAGE
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
