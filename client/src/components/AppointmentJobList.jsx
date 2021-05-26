import React from 'react';
import AppointmentJob from './AppointmentJob.jsx';

const AppointmentJobList = ({ jobs }) => (
  <ul>
    {
      jobs.map((job) => (
        <AppointmentJob job={job} />
      ))
    }
  </ul>
);

export default AppointmentJobList;