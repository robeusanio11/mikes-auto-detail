import React, { useState } from 'react';

const InfoHours = () => {

  const [clicked, setClicked] = useState(false);
  /* maybe used <dl> and <dt> */

  if (clicked) {
    return (
      <>
        <h4 class="hours-title">Location & Hours</h4>
        <table class="hours-table">
          <tr>
            <td>Sun</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Mon</td>
            <td>10:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Tue</td>
            <td>10:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Wed</td>
            <td>10:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Thu</td>
            <td>10:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Fri</td>
            <td>10:00AM - 5:00PM</td>
          </tr>
          <tr>
            <td>Sat</td>
            <td>Closed</td>
          </tr>
        </table>
        <p class="more-less" onClick={() => setClicked(!clicked)}>See More</p>
      </>
    );
  } else {
    return (
      <>
        <p>OPEN TODAY UNTIL 5PM *CHANGE THIS LATER*</p>
        <p class="more-less" onClick={() => setClicked(!clicked)}>See Less</p>
      </>
    );
  }
};

export default InfoHours;