import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuStaff from './MenuStaffComponent';
import DepartmentStaff from './DepartmentStaff';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import SalaryStaff from './SalaryStaffComponent';
import { STAFFS } from '../shared/staffs'
import { ROLE } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            roles: ROLE,
            departments: DEPARTMENTS
        }
    }
    render() {

        const StaffWithId = ({match}) => {
            return (
                <StaffList staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]}/>
            )
        };
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/nhan-vien' component={() => <MenuStaff staffs={this.state.staffs} />} />
                    <Route path="/nhan-vien/:id" component={StaffWithId} />
                    <Route exact path='/phong-ban' component={() => <DepartmentStaff departments={this.state.departments} />} />
                    <Route exact path="/bang-luong" component={() => <SalaryStaff staffs={this.state.staffs} />} />
                    <Redirect to='/nhan-vien' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;