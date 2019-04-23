import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/table.css';

class Table extends Component { 

    render() {
    
        return (
            <Fragment>
                <div>
                <header >
        
                </header>
                <table className='user-table'>
                <tbody>
                    <tr className='user-table-row'>
                        <strong><th className='user-table-cell'>Employee ID</th></strong>
                        <th className='user-table-cell'>FIRST NAME</th>
                        <th className='user-table-cell'>MIDDLE NAME</th>
                        <th className='user-table-cell'>LAST NAME</th>
                        <th className='user-table-cell'>BIRTH DATE</th>
                        <th className='user-table-cell'>POSITION</th>
                        <th className='user-table-cell'></th>
                    </tr>
                    {
                        this.props.usersList.map((user, index) =>{
                            return (
                                <tr className='user-table-row'>
                                    <td className='user-table-cell'>{user.employeeId}</td>
                                    <td className='user-table-cell'>{user.firstname}</td>
                                    <td className='user-table-cell'>{user.middlename}</td>
                                    <td className='user-table-cell'>{user.lastname}</td>
                                    <td className='user-table-cell'>{user.bday}</td>
                                    <td className='user-table-cell'>{user.position}</td>
                                    <td className='user-table-cell'><button type='button' onClick={() => this.props.deleteUser(index)}>Delete User</button></td>
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table>
                </div>
            </Fragment>
        );
    }
}

Table.propTypes = {
    deleteUser: PropTypes.func,
    usersList: PropTypes.func
}

export {
    Table
}