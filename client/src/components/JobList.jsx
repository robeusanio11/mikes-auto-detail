import React from 'react';
import JobListEntry from './JobListEntry.jsx';

const JobList = ({ jobs }) => {
  return (
    <ul>
      {jobs.map((job) => (
        <JobListEntry job={job}/>
      ))}
    </ul>
  )
}

export default JobList;