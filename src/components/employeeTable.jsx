import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/employeeTable.css';

class EmployeeTable extends Component {

    render() {

        return (
            <Fragment>
                
                <div>
                    <table className='employee-table'>
                        <tbody>
                            <tr className='employee-table-row'>
                                <th className='employee-table-cell'>Employee ID</th>
                                <th className='employee-table-cell'>FIRST NAME</th>
                                <th className='employee-table-cell'>MIDDLE NAME</th>
                                <th className='employee-table-cell'>LAST NAME</th>
                                <th className='employee-table-cell'>BIRTH DATE</th>
                                <th className='employee-table-cell'>POSITION</th>
                                <th className='employee-table-cell'></th>
                                <th className='employee-table-cell'></th>

                            </tr>
                            {
                                this.props.employeeList.map((employee, id) => {
                                    return (
                                        <tr className='employee-table-content' key={employee.id}>
                                            <td className='employee-table-cell'> {employee.id}</td>
                                            <td className='employee-table-cell'> {employee.firstName} </td>
                                            <td className='employee-table-cell'>{employee.middleName}</td>
                                            <td className='employee-table-cell'>{employee.lastName}</td>
                                            <td className='employee-table-cell'>{employee.bDay}</td>
                                            <td className='employee-table-cell'>{employee.position}</td>
                                            <td className='employee-table-cell'><button type='button' onClick={this.props.editEmployee}>Edit</button></td>
                                            <td className='employee-table-cell'><button type='button' onClick={() => this.props.deleteEmployee(id)}>Delete</button></td>

                                        </tr>
                                    )
                                })
                            }

                            {/* {
                                this.state.filtered.map((employee, id) => {
                                    return (
                                        <tr key={id}>

                                            <th scope="row" onClick={this.toggle.bind(this)}>{employee.id}</th>
                                            <td onClick={this.toggle.bind(this)}>{employee.firstName}</td>
                                            <td onClick={this.toggle.bind(this)}>{employee.middleName}</td>
                                            <td onClick={this.toggle.bind(this)}>{employee.lastName}</td>
                                            <td onClick={this.toggle.bind(this)}>{employee.bDay}</td>
                                            <td onClick={this.toggle.bind(this)}>{employee.position}</td>
                                        </tr>
                                    )
                                }


                                )
                            } */}

                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

EmployeeTable.propTypes = {
    editEmployee: PropTypes.func,
    deleteEmployee: PropTypes.func

}

export {
    EmployeeTable
};