import React from 'react';
import InfoBar from './InfoBar.jsx';
import JobList from './JobList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);

    // this.state = {

    // }
  }

  render() {
    return (
      <div>
        <InfoBar />
        <JobList />
      </div>
    )
  }
}

export default App;