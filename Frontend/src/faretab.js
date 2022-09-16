import React from "react";

export default function Faretab() {
  return (
    <div>
      <div id="holder" style="display:none">
        <div className="fare">
          <table
            id="yy"
            width="50%"
            border="10"
            style="width:1000px;height: 320px;border-radius: 20px;border-color: rgba(240, 248, 255, 0.61);"
          >
            <caption style="color: #6cf;font-size: 30px;font-family: cursive;background-color: rgba(0, 0, 255, 0.596);">
              FARE DETAILS{" "}
            </caption>
            <thead>
              <tr style="background-color:rgba(251, 255, 0, 0.938);font-family: cursive;">
                <th>UNIT</th>
                <th>KILOMETER</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background-color:rgba(0, 162, 255, 0.938);font-family: cursive;">
                <td>LESS THAN </td>
                <td>5</td>
                <td>20</td>
              </tr>
              <tr style="background-color:rgba(255, 0, 0, 0.938);font-family: cursive;">
                <td>LESS THAN </td>
                <td>15</td>
                <td>30</td>
              </tr>
              <tr style="background-color:rgba(43, 255, 0, 0.938);font-family: cursive;">
                <td>LESS THAN </td>
                <td>30</td>
                <td>70</td>
              </tr>
              <tr style="background-color:rgba(247, 0, 255, 0.938);font-family: cursive;">
                <td>LESS THAN </td>
                <td>70</td>
                <td>100</td>
              </tr>
              <tr style="background-color:rgba(255, 145, 0, 0.938);font-family: cursive;">
                <td>LESS THAN </td>
                <td>150</td>
                <td>220</td>
              </tr>
              <tr style="background-color:rgba(244, 245, 210, 0.938);font-family: cursive;">
                <td>UPTO </td>
                <td>220</td>
                <td>350</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}