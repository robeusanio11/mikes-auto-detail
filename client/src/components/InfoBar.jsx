import React from 'react';

const InfoBar = (props) => {
  return (
    <div class="info-bar">
      <h2>Mike's Auto Detail</h2>
      <button>Book An Appointment</button>
      <p>
      Serving the Bay Area & Central Valley. We are a mobile service. Quality professional auto detailing, specializing in ceramic coatings and interior detailing solutions.
      </p>
      <p>
      My name is Michael Andersen, and I am the founder and detailer of Mike’s Auto Detail.
      </p>
      <p>
      Reach out if you have any questions!
      (209) 734-7132
      </p>
      <p>
      Please choose the correct price option for your vehicle: Car/Sedan, Midsize, or Truck/SUV
      </p>


      {/* maybe used <dl> and <dt> */}
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

      <h4>Connect</h4>
      <a href=''>instagram</a>
    </div>
  )
}

export default InfoBar;