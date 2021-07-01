import React, { useState, useEffect } from 'react';

const AppointmentJob = ({ job }) => {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(clicked, checked);
  })



  if (clicked) {
    return (
      <div
        class="job-list-entry-container"
        onClick={() => { setChecked(!checked); }}
      >
        <div class="job-list-entry">
          <h4>{job.title}</h4>
          <p class="job-list-entry-description">{job.description}</p>
          <p class="more-less" onClick={() => setClicked(!clicked)}>See Less</p>
        </div>
        <input type="checkbox" value={checked} checked={checked} />
      </div>
    );
  }
  return (
    <div
      class="job-list-entry-container"
      onClick={() => { setChecked(!checked); }}
    >
      <div class="job-list-entry">
        <h4>{job.title}</h4>
        <p
          class="more-less"
          onClick={() => { setClicked(!clicked); }}
        >More Info</p>
      </div>
      <input type="checkbox" value={checked} checked={checked} />
    </div>
  );
}




// return (
//   <div
//     class="job-list-entry-container"
//     onClick={() => { setChecked(!checked); }}
//   >
//     <div class="job-list-entry">
//       <h4>{job.title}</h4>

//       <p
//         class="more-less"
//         onClick={() => { setClicked(!clicked); }}
//       >More Info</p>
//     </div>
//     <input type="checkbox" value={checked} checked={checked} />
//   </div>
// );
// };

export default AppointmentJob;