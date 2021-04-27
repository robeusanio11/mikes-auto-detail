import React, { useState } from 'react';

const InfoHours = () => {

  const [clicked, setClicked] = useState(false);
  /* maybe used <dl> and <dt> */

  if (clicked) {
    return (
      <>
      <h4>Location & Hours</h4>
      <ul>
        <li>Sun: Closed</li>
        <li>Mon: 10:00 AM - 5:00 PM</li>
        <li>Tue: 10:00 AM - 5:00 PM</li>
        <li>Wed: 10:00 AM - 5:00 PM</li>
        <li>Thu: 10:00 AM - 5:00 PM</li>
        <li>Fri: 10:00 AM - 5:00 PM</li>
        <li>Sat: Closed</li>
      </ul>
      <p class="more-less" onClick={() => setClicked(!clicked)}>See Less</p>
      </>
    )
  } else {
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
    )
  }
}

export default InfoHours;