import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/table.css';


class Table extends Component { 


//     constructor(props) {
//         super(props);
//         this.state = {
//             filtered: []
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     componentDidMount2() {
//         this.setState({
//           filtered: this.props.user
//         });
//       }
      
//       componentWillReceiveProps(nextProps) {
//         this.setState({
//           filtered: nextProps.user
//         });
//       }


//       handleChange(e) {
//         // Variable to hold the original version of the list
//     let currentList = [];
//         // Variable to hold the filtered list before putting into state
//     let newList = [];

//         // If the search bar isn't empty
//     if (e.target.value !== "") {
//             // Assign the original list to currentList
//       currentList = this.props.user;

//             // Use .filter() to determine which items should be displayed
//             // based on the search terms
//       newList = currentList.filter(user => {
//                 // change current item to lowercase
//         const lc = user.toLowerCase();
//                 // change search term to lowercase
//         const filter = e.target.value.toLowerCase();
//                 // check to see if the current list item includes the search term
//                 // If it does, it will be added to newList. Using lowercase eliminates
//                 // issues with capitalization in search terms and search content
//         return lc.includes(filter);
//       });
//     } else {
//             // If the search bar is empty, set newList to original task list
//       newList = this.props.user;
//     }
//         // Set the filtered state based on what our rules added to newList
//     this.setState({
//       filtered: newList
//     });
//   }




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
                                    {/* <td className='user-table-cell'><button type='button' onClick={this.props.handleEditUser}>Edit</button></td> */}
                                    <td className='user-table-cell'><button type='button' onClick={() => this.props.deleteUser(id)}>Delete</button></td>
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
    // handleEditUser: PropTypes.func,
    deleteUser: PropTypes.func,
    userList2 : PropTypes.array,
    getUsers: PropTypes.func
}

export {
    Table
}