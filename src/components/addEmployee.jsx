import React, { Component } from 'react';
import { EmployeeForm } from './employeeForm.jsx';
import axios from 'axios';

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {

      filtered:[],

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


   // HANDLE CHANGE

   handleChangeInfo = e => {
    let { name, value } = e.target;
    if (name === "id") {
      value = parseInt(value);
    }
    this.setState((prevState) => ({
      employee: {
        ...prevState.employee,
        [name]: value
      }
    }));
  }


  // POST METHOD
  handleAddEmployee = e => {
    let employee = this.state.employee;
    let employeeList = [...this.state.employeeList];
    employeeList.push(employee);
    this.setState({ employeeList: employeeList });
    e.preventDefault();
    console.log("post");
    console.log(employee);
    let str = "hello";
    alert("Employee Successfully Added!")
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/restsample01/rest/employees/`, employee, { headers: headers })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }



  //RENDER METHOD
  render() {
    console.log(this.state.employeeList);
    return (
      <div>

        <div>
          <EmployeeForm handleChangeInfo={this.handleChangeInfo} handleAddEmployee={this.handleAddEmployee} />
        </div>

      </div>
    );
  }
}
export default AddEmployee;