import React from 'react'
import { Card, CardText, CardBody, CardTitle,  Button } from 'reactstrap';

function RenderSalaryStaff({ staff }) {

    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const salary = basicSalary*staff.salaryScale+overTimeSalary*staff.overTime;

    return (
        <Card>
            <CardBody>
              <CardTitle>
                  {staff.name}
              </CardTitle>
              <CardText>
                  mã nhân viên : {staff.id}
              </CardText>
              <CardText>
                  Hệ số lương : {staff.salaryScale}
              </CardText>
              <CardText>
                  Số giờ làm thêm : {staff.overTime}
              </CardText>
              <Button>
                  Lương : {salary}
              </Button>
            </CardBody>
        </Card>
    );
}

const SalaryStaff = (props) => {

    const menu = props.staffs.map((staff) => {
        return (
            <div className='col-12 col-md-4 col-lg-3'>
                <RenderSalaryStaff staff={staff}/>
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
export default SalaryStaff;