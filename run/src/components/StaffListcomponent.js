import React, { Component } from 'react';
import dateFormat from 'dateformat';


class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedStaff: null
        }
    }


    onSelectedStaff(staff) {
        this.setState({ SelectedStaff: staff })
    }

    renderStaff(staff) {
        if (staff != null)
            return (
                <ul>
                    <li><h3>Họ và tên : {staff.name}</h3></li>
                    <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
                    <li>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
                    <li>Phòng ban : {staff.department.name}</li>
                    <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
                    <li>Số ngày đã làm thêm : {staff.overTime}</li>
                </ul>
            )
        else
            return (
                <div></div>
            )
    }

    render() {
        const menu = this.props.staffs.map((staff) => {
            return (
                <div className='col-12 col-md-6 col-lg-4'>
                    <ul key={staff.id} onClick={() => this.onSelectedStaff(staff)}>
                        <li>{staff.name}</li>
                    </ul>
                </div>
            )
        });
        return (
            <div>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderStaff(this.state.SelectedStaff)}
                </div>
            </div>
        );
    }
}

export default StaffList;