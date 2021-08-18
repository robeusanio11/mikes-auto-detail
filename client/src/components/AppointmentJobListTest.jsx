import React from 'react';
import AppointmentJob from './AppointmentJobTest.jsx';

const AppointmentJobList = ({ jobs }) => (
  <div id="myModal" class="modal">
  <div class="modal-content">
    <p>Some text in the Modal..</p>
  </div>

</div>
  // <ul>
  //   {
  //     jobs.map((job) => (
  //       <AppointmentJob job={job} />
  //     ))
  //   }
  // </ul>
);

export default AppointmentJobList;