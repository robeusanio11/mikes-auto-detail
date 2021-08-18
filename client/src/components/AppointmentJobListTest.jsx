import React from 'react';
import AppointmentJob from './AppointmentJobTest.jsx';

const AppointmentJobList = ({ jobs }) => (
  <div id="myModal" class="modal">
    <div class="modal-content">
      <header
        id="appointmentModalHeader"
        class="modal-header"
      >
        <img src='https://d1g145x70srn7h.cloudfront.net/files/bfdb6e9d33911b56e830e95a712b73a0b31ff36f/original.jpeg' id="modal-title-image" />
        <div id='appointmentModalTitle'>Mike's Auto Detail</div>
        <div id='appointmentModalSignIn'>Sign In</div>
      </header>

      <div class="appointment-modal-content">
      <div class="modal-sidebar">test</div>
      <ul class="modal-appopintment-list">
        {
          jobs.map((job) => (
            <AppointmentJob job={job} />
          ))
        }
      </ul>
      </div>
    </div>

  </div>

);

export default AppointmentJobList;