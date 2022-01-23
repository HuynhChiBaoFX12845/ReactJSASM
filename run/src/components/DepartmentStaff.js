import React from 'react';
import {CardBody, CardText, CardTitle, Card, Breadcrumb, BreadcrumbItem} from 'reactstrap';

function RenderCardDepartment({ department }) {
  return (
      <Card>
          <CardBody>
              <CardTitle>
                  {department.name}
              </CardTitle>
              <CardText>
                  Số lượng nhân viên : {department.numberOfStaff}
              </CardText>
          </CardBody>
      </Card>
  );
}

const Departmentdepartment = (props) => {

  const menu = props.departments.map((department) => {
      return (
          <div className='col-12 col-md-4 col-lg-3'>
              <RenderCardDepartment department={department}/>
          </div>
      );
  });
  
  return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
      </div>
  )
}
export default Departmentdepartment;