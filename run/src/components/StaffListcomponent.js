import React, { Component } from 'react';

class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedStaff: null
        }
    }


    onSelectedStaff(staff){
        this.setState({SelectedStaff: staff})
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
                    
                </div>
            </div>
        );
    }
}

export default StaffList;