import React from 'react';

const JobListEntry = ({ job }) => {
  return (
    <div>
      <h4>{job.title}</h4>
      <p>{job.description}</p>
    </div>
  )
}

export default JobListEntry;