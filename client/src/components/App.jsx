import React from 'react';
import InfoBar from './InfoBar.jsx';
import JobList from './JobList.jsx';
import Header from './Header.jsx';

const jobs = [
  {
    title: "Exterior Basic Detail",
    description: "Foam bath. Two bucket hand wash. Cleaning of wheels, tires, and wheel wells. Polymer wax applied, by hand, to paint and glass. Tire shine.",
    options: ["$50.00 | 45 mins | Car/Sedan", "$65.00 | 45 mins | Midsize", "$80.00 | 1 hr | SUVs, Trucks, Minivans"]
  },
  {
    title: "Interior Basic Detail",
    description: "Foam bath. Two bucket hand wash. Cleaning of wheels, tires, and wheel wells. Polymer wax applied, by hand, to paint and glass. Tire shine.",
    options: "$50.00 | 45 mins"
  },
  {
    title: "Interior Full Detail - Reset Button",
    description: "For clients looking to hit the reset button on their vehicle's interior. Including the following methods, but not limited to: Removal of all applicable seats for maximum coverage & cleaning (if needed or applicable). Deep stain removal, shampoo, and extraction of all floor carpet. Also; floor mats. Deep stain removal, shampoo, and extraction of all upholstered seats. Steam cleaning disinfection of all floor carpet and floor mats. Headliner Steam cleaning & microfiber stain extraction. Degrease, Steam blasting & wipe-down of all interior surfaces: including steering wheel, dash, door panels, center console, gear shift, cup holders, gas/brake/clutch pedals, etc. Disinfectant chemical wipe-down of all interior surfaces. Streak-free window cleaning. Odor neutralizer.",
    options: ["$350.00 | 5 hrs | Sedans, Midsize", "$450.00 | 6 hrs | Third Row, SUVs, Minivans"]
  },
  {
    title: "Seat Shampoo",
    description: "Deep cleaning & shampoo of seats - fabric and upholstery. Extraction and steam sanitation process to disenfect the surface. Deep stain removal.",
    options: ["$30.00 | 15 mins | One Seat", "$50.00 | 30 mins | Two Seats (front or back)", "$90.00 | 45 mins | Front & Back", "$130.00 | 1 hr | Front & Back, Third Row"]
  }
];

class App extends React.Component {
  constructor(props){
    super(props);

    // this.state = {

    // }
  }

  render() {
    return (
      <>
        <header>
          <Header />
          <hr />
        </header>
        <div class="home">
          <InfoBar />
          <main class="main-col">
            <h3>Book an Appointment</h3>
            <JobList jobs={jobs}/>
          </main>
        </div>
      </>
    )
  }
}

export default App;