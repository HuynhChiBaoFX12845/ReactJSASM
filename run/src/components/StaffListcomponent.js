import React, { Component } from 'react';

class StaffList extends Component {
    render() {
        const menu = this.props.staffs.map((staff) => {
            return (
                    <div className='col-12 col-md-6 col-lg-4'>
                        <ul key={staff.id}>
                            <li>{staff.name}</li>
                        </ul>
                    </div>
            )
        });
        return (
            <div className='row'>
                {menu}
            </div>
        );
    }
}

export default StaffList;