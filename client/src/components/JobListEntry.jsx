import React, { useState } from 'react';

const JobListEntry = ({ job }) => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <div class="job-list-entry-container">
        <div class="job-list-entry">
          <h4>{job.title}</h4>
          <p class="job-list-entry-description">{job.description}</p>
          <p class="more-less" onClick={() => setClicked(!clicked)}>See Less</p>
        </div>
        <span>Book Now</span>
      </div>
    );
  }
  return (
    <div class="job-list-entry-container">
      <div class="job-list-entry">
        <h4>{job.title}</h4>
        <p class="job-list-entry-description">{job.description.substring(0, 100)}</p>
        <p class="more-less" onClick={() => setClicked(!clicked)}>See More</p>
      </div>
      <span>Book Now</span>
    </div>
  );
}

export default JobListEntry;