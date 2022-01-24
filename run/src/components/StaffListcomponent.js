import React from 'react';
import dateFormat from 'dateformat';
import { CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffList({ staff }) {

    if (staff != null) {
        return (
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4'>
                    <CardImg src={staff.image} />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <ul>
                        <li><h3>Họ và tên : {staff.name}</h3></li>
                        <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
                        <li>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
                        <li>Phòng ban : {staff.department.name}</li>
                        <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
                        <li>Số ngày đã làm thêm : {staff.overTime}</li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}
const StaffList = (props) => {
    if (props.staff != null)
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/nhan-vien'>Nhân viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.staff.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.staff.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='container'>
                        <RenderStaffList staff={props.staff} />
                    </div>
                </div>
            </div>


        );
    else
        return (
            <div></div>
        )
}
export default StaffList;