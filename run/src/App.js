import React, { Component } from 'react';
import StaffList from './components/StaffListcomponent';
import { STAFFS } from './shared/staffs';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      staffs : STAFFS
    }
  }
  
  render() {
    return (
      <div>
        <StaffList/>
      </div>
    );
  }
}

export default App;
