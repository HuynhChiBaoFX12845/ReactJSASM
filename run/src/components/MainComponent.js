import React, { Component } from 'react';
import MenuStaff from './MenuStaffComponent';
import DepartmentStaff from './DepartmentStaff';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import SalaryStaff from './SalaryStaff';
import { STAFFS } from '../shared/staffs'
import {Navbar, NavbarBrand} from 'reactstrap'

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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>
                <StaffList staffs={this.state.staffs} />
            </div>
        );
    }
}

export default Main;