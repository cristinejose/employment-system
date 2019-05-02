import React, { Component } from 'react';
import './App.css';
import { EmployeeForm } from './components/employeeForm.jsx';
import axios from 'axios';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {

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

  // // GET METHOD
  // getEmployees() {
  //   axios.get('http://localhost:8080/restsample01/rest/employees/')
  //     .then(res => {
  //       const employeeList = res.data;
  //       this.setState({ employeeList: employeeList });
  //     })

  // }

  // componentDidMount() {
  //   this.getEmployees();
  // }

  // // HANDLE CHANGE

  // handleChangeInfo = e => {
  //   let { name, value } = e.target;
  //   if (name === "id") {
  //     value = parseInt(value);
  //   }
  //   this.setState((prevState) => ({
  //     employee: {
  //       ...prevState.employee,
  //       [name]: value
  //     }
  //   }));
  // }

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
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/restsample01/rest/employees/`, employee, { headers: headers })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }


  // //PUT METHOD
  // editEmployee = e => {
  //   let employee = this.state.employee;
  //   let employeeList = [...this.state.employeeList];
  //   employeeList.edit(employee);
  //   this.setState({ employeeList: employeeList });
  //   e.preventDefault();
  //   console.log("post");
  //   console.log(employee);
  //   let str = "hello";
  //   let headers = {
  //     'Content-Type': 'application/json',
  //   }

  //   axios.put(`http://localhost:8080/restsample01/rest/employees/`, employee, { headers: headers })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // }


  // // DELETE METHOD
  // deleteEmployee = (rowIndex) => {
  //   let employeeList = [...this.state.employeeList];
  //   employeeList.splice(rowIndex, 1);
  //   this.setState({ employeeList: employeeList });

  //   axios.delete(`http://localhost:8080/restsample01/rest/employees/${rowIndex}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }


  //RENDER METHOD
  render() {
    console.log(this.state.employeeList);
    return (
      <div className="parent">

        <div>
          <EmployeeForm handleChangeInfo={this.handleChangeInfo} handleAddEmployee={this.handleAddEmployee} />
        </div>

        {/* <div>
          <ViewEmployee employeeList={this.state.employeeList} deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee} />
        </div> */}

      </div>
    );
  }
}
export default Parent;