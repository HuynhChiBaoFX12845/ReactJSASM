import React, { Component } from 'react';
import StaffList from './components/StaffListcomponent';
import { STAFFS } from './shared/staffs';

class App extends Component {
  render() {
    return (
      <div>
        <StaffList/>
      </div>
    );
  }
}

export default App;
