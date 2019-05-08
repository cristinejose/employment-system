import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/employeeTable.css';
import { searchEmp } from '../util/search.js';
import { showRow } from '../util/view.js';
import { editRow } from '../util/edit.js';



class EmployeeTable extends Component {

    render() {

        return (
            <Fragment  >

                <div className="page">

                    <div>

                        <form className="profile">

                            <strong> <p > EMPLOYEE PROFILE</p> </strong>
                            <div classId="data" >

                                ID: 
                                <input className="box" id="id" /> <br /> <br/>
                                FIRST NAME: 
                                <input className="box" id="fname" /><br />  <br/>
                                MIDDLE NAME: 
                                <input className="box" id="mname" /><br />  <br/>
                                LAST NAME: 
                                <input className="box" id="lname" /><br /> <br/>
                                BIRTH DATE: 
                                <input className="box" id="bday" /> <br /> <br/>
                                POSITION:  
                                <input  className="box" id="position" /> <br />  <br/>

                            </div>
                            <button className="edit_button" type='button' onClick={editRow}>Edit</button>

                        </form>

                    </div>


                    <div className="search-container">
                        <input id="myInput" type="text" placeholder="Search here..." className="search" onKeyUp={searchEmp} />
                    </div>


                    <table className='employee-table' id="MyTable">
                        <thead>
                            <tr className='employee-table-row'>
                                <th className='employee-table-cell'>Employee ID</th>
                                <th className='employee-table-cell'>FIRST NAME</th>
                                <th className='employee-table-cell'>MIDDLE NAME</th>
                                <th className='employee-table-cell'>LAST NAME</th>
                                <th className='employee-table-cell'>BIRTH DATE</th>
                                <th className='employee-table-cell'>POSITION</th>
                                <th className='employee-table-cell'>ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.employeeList.map((employee, id) => {
                                    return (
                                        <tr className='employee-table-content' key={employee.id} id="row" onClick={showRow} >

                                            <td id="id" className='employee-table-cell'> {employee.id}</td>
                                            <td id="fname" className='employee-table-cell'> {employee.firstName} </td>
                                            <td id="mname" className='employee-table-cell'>{employee.middleName}</td>
                                            <td id="lname" className='employee-table-cell'>{employee.lastName}</td>
                                            <td id="bday" className='employee-table-cell'>{employee.bDay}</td>
                                            <td id="position" className='employee-table-cell'>{employee.position}</td>

                                            <td className='employee-table-cell'>

                                                <button type='button' onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

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