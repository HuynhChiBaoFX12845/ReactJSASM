import React from 'react'
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderCardStaff({ staff }) {
    return (
        <Card>
            <CardBody>
            <CardImg src={staff.image} />
                <CardText>
                    {staff.name}
                </CardText>
            </CardBody>
        </Card>
    );
}

const MenuStaff = (props) => {

    const menu = props.staffs.map((staff) => {
        return (
            <div className='col-12 col-md-4 col-lg-3'>
                <RenderCardStaff staff={staff}/>
            </div>
        );
    });
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Danh sách nhân viên</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}
export default MenuStaff;