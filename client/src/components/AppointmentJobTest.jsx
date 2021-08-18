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
          onClick={(e) => {
            if (e.target.className !== 'more-less' && e.target.className !== 'job-options-select') {
              setChecked(!checked);
            }
          }}
        >
          <div class="job-list-entry">
            <h4>{job.title}</h4>
            {!checked &&
              <span>{job.options.length} Options</span>
            }
            <span class="more-less" onClick={() => setClicked(!clicked)}>See Less</span>
            <p class="job-list-entry-description">{job.description}</p>
            {checked &&
              <select class="job-options-select">
                {job.options.map((option) =>
                  (<option value={option}>{option}</option>)
                )}
              </select>
            }
          </div>
          <input type="checkbox" value={checked} checked={checked} />
        </div>
      );
    }
    return (
      <div
        class="job-list-entry-container"
        onClick={(e) => {
          console.log(e.target.className)
          if (e.target.className !== 'more-less' && e.target.className !== 'job-options-select') {
            setChecked(!checked);
          }
        }}
      >
        <div class="job-list-entry">
          <h4>{job.title}</h4>
          <div class="job-list-entry-options">
            {!checked &&
              <span>{job.options.length} Options</span>
            }
            <span
              class="more-less"
              onClick={() => {
                setClicked(!clicked);
              }}
            >More Info</span>
            {checked &&
              <>
              <br></br>
              <select class="job-options-select">
                {job.options.map((option) =>
                  (<option value={option}>{option}</option>)
                )}
              </select>
            </>
            }
          </div>
        </div>
        <input type="checkbox" value={checked} checked={checked} />
      </div>
    );
  }

  export default AppointmentJob;