import React, { useState } from "react";

const InfoIntro = () => {

  const [clicked, setClicked] = useState(false);

  if (clicked === true) {
    return (
      <text>
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
        <p class="more-less" onClick={() => setClicked(!clicked)}>See Less</p>
      </text>
    );
  } else {
    return (
      <text>
        <p>
        Serving the Bay Area & Central Valley. We are a mobile service. Quality professional auto detailing, specializing in ceramic coatings and interior detailing solutions.
        </p>
        <p class="more-less" onClick={() => setClicked(!clicked)}>See More</p>
      </text>
    );
  }
}

export default InfoIntro;