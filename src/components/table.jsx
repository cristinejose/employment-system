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
                        <th className='user-table-cell'>Employee ID</th>
                        <th className='user-table-cell'>FIRST NAME</th>
                        <th className='user-table-cell'>MIDDLE NAME</th>
                        <th className='user-table-cell'>LAST NAME</th>
                        <th className='user-table-cell'>BIRTH DATE</th>
                        <th className='user-table-cell'>POSITION</th>
                        <th className='user-table-cell'></th>
                    </tr>
                    {
                        this.props.userList2.map((user,id ) => {
                            return (
                                <tr className='user-table-row' key= {user.id}>
                                    <td className='user-table-cell'> {user.id}</td>
                                    <td className='user-table-cell'> {user.firstName} </td>
                                    <td className='user-table-cell'>{user.middleName}</td>
                                    <td className='user-table-cell'>{user.lastName}</td>
                                    <td className='user-table-cell'>{user.bDay}</td>
                                    <td className='user-table-cell'>{user.position}</td>
                                    <td className='user-table-cell'><button type='button' onClick={() => this.props.deleteUser(id)}>Delete User</button></td>
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
    userList2 : PropTypes.array,
    getUsers: PropTypes.func
}

export {
    Table
}