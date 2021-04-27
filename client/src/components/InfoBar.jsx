import React, { useState } from 'react';
import InfoIntro from './InfoIntro.jsx';
import InfoHours from './InfoHours.jsx';

const InfoBar = (props) => {
    return (
      <div class="info-bar">
      <img src="https://d1g145x70srn7h.cloudfront.net/files/bfdb6e9d33911b56e830e95a712b73a0b31ff36f/original.jpeg"/>
      <h3>Mike's Auto Detail</h3>
      <button>Book An Appointment</button>
      <InfoIntro />
      <InfoHours />
      <h4>Connect</h4>
      <section class="links">
        <a href="https://www.instagram.com/mikesautodetail.ca/">Instagram</a>
        <a href="https://www.facebook.com/mikesautodetailca/">Facebook</a>
      </section>
    </div>
  )
}

export default InfoBar;