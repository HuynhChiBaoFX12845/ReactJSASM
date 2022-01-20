import React, { Component } from 'react';
import MenuStaff from './MenuStaffComponent';
import DepartmentStaff from './DepartmentStaff';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import SalaryStaff from './SalaryStaff';
import { STAFFS } from '../shared/staffs'
import { ROLE } from '../shared/staffs';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Main;