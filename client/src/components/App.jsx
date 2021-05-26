import React from 'react';
import InfoBar from './InfoBar.jsx';
import JobList from './JobList.jsx';
import Header from './Header.jsx';
import AppointmentJobList from './AppointmentJobList.jsx';

const jobs = [
  {
    title: "Exterior Basic Detail",
    description: "Foam bath. Two bucket hand wash. Cleaning of wheels, tires, and wheel wells. Polymer wax applied, by hand, to paint and glass. Tire shine.",
    options: ["$50.00 | 45 mins | Car/Sedan", "$65.00 | 45 mins | Midsize", "$80.00 | 1 hr | Truck/SUV"]
  },
  {
    title: "Interior Basic Detail",
    description: "Foam bath. Two bucket hand wash. Cleaning of wheels, tires, and wheel wells. Polymer wax applied, by hand, to paint and glass. Tire shine.",
    options: ["$50.00 | 45 mins"]
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
  },
  {
    title: "Interior Steam Clean",
    description: "Steam detail & sanitation of vehicle's interior.Complete vacuum of seats, floors and mats. Steam blasting & disinfection of all interior surfaces: including steering wheel, dash, door panels, center console, gear shift, cup holders, gas/brake/clutch pedals, etc. Wipe-down of leather seats (if applicable). Light stain removal of all carpet and upholstery by use of steam. Plastic shine dressing applied to all interior surfaces. Streak-free window cleaning.",
    options: ["$140.00 | 2 hrs 30 mins | Car/Sedan", "$160.00 | 3 hrs | Midsize", "$190.00 | 3 hrs | Truck/SUV"]
  },
   {
     title: "Hand Wash",
     description: "Two-bucket wash method with grit guards used. Complete hand wash of the exterior using microfiber wash mitt. Thorough cleaning of wheels and tires with use of soft brushes. Safe drying process ensured with air and microfiber towels.",
     options: ["$30.00 | 30 mins | Car/Sedan", "$40.00 | 30 mins | Midsize", "$50.00 | 30 mins | Truck/SUV"]
   },
   {
     title: "Odor Removal - Ozone Treatment",
     description: "This service removes all odors in the cabin, and gets your car's interior back smelling brand-new. Ozone air treatment will cycle all cabin air. This treatment will kill all airborne bacteria and viruses, and penetrate all carpet and upholstery. The ozone generator will be placed in the car and cycled for 30mins-1hour. A basic interior detail is included.",
     options: ["$150.00 | 1 hr"]
   },
   {
     title: "Exterior Level 1 Detail",
     description: "Protective coating, with a lifespan of 4-8 months. Hand wash. Paint decontamination, by use of Iron-X and/or clay bar, to remove surface contaminants. Sealant & wax applied to paint, wheels, glass, and plastic trim. Thorough cleaning of wheels/wheel-wells.",
     options: ["$120.00 | 2 hrs | Car/Sedan", "$140.00 | 2 hrs 30 mins | Midsize", "$160.00 | 2 hrs 45 mins | Truck/SUV"]
   },
   {
     title: "Stage 1 Paint Correction - Gloss Enhancement",
     description: "Light polish of paint to enhance gloss and remove 70-80% of surface defects. Sealant applied. Hand wash. Clay bar paint decontamination. Cleaning of wheels/wheel-wells. Vacuum & light detail of interior.",
     options: ["$600.00 | 8 hrs | Car/Sedan", "$700.00 | 10 hrs | Midsize", "$800.00 | 12 hrs | Truck/SUV"]
   },
   {
     title: "Ceramic Coating (5 Year Lifespan)",
     description: "Very durable, high-gloss, silky smooth to the touch, chemically bonded layer of 9h optically clear ceramic. Once applied, your car will remain glossier than a normal wax or sealant, and cleaning your car will be a breeze. Hand wash & complete decontamination of exterior using iron-fallout remover and clay bar. Cleaning of wheels/wheel-wells. Ceramic coating applied to paint, topped with a 1-year Si02 sealant. Glass, trim, and wheels coated in a 1-year sealant. Expected to last 3-5 years on a daily driven vehicle with proper maintenance.",
     options: ["$400.00 | 3 hrs | Car/Sedan", "$450.00 | 3 hrs 30 mins | Midsize", "$500.00 | 4 hrs | Truck/SUV"]
   }
];

class App extends React.Component {
  constructor(props){
    super(props);

    // this.state = {

    // }
  }

  render() {
    // return (
    //   <>
    //     <header>
    //       <Header />
    //       <hr />
    //     </header>
    //     <div class="home">
    //       <InfoBar />
    //       <main class="main-col">
    //         <h3>Book an Appointment</h3>
    //         <JobList jobs={jobs}/>
    //       </main>
    //     </div>
    //   </>
    // )
    return (
      <>
        <AppointmentJobList jobs={jobs}/>
      </>
    )
  }
}

export default App;