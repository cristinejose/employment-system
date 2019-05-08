import React, { Component } from 'react';
import { EmployeeTable } from './employeeTable.jsx';
import axios from 'axios';

class ViewEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {

            active: true,

            employeeList: [],

            employee:
            {
                id: '',
                firstName: '',
                middleName: '',
                lastName: '',
                bDay: '',
                position: ''
            }
        };
    }


   
    //GET METHOD
    getEmployees() {
        axios.get('http://localhost:8080/restsample01/rest/employees/')
            .then(res => {
                const employeeList = res.data;
                this.setState({ employeeList: employeeList });
            })
    }


    componentDidMount() {
        this.getEmployees();
    }



    //DELETE METHOD
    deleteEmployee = (rowIndex) => {
        let employeeList = [...this.state.employeeList];
        employeeList.splice(rowIndex,1);
        this.setState({ employeeList: employeeList });

        axios.delete(`http://localhost:8080/restsample01/rest/employees/${rowIndex}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    //RENDER METHOD
    render() { 
        console.log(this.state.employeeList);
        return (

            <div >
                <EmployeeTable employeeList={this.state.employeeList}  deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee} />
            </div>

        );
    }
}
export default ViewEmployee;