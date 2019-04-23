import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import {Form} from './components/form.jsx';
import {Table} from './components/table.jsx';
import Sidebar from './components/sidebar.jsx';

class App extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
      usersList: [
        {
          employeeId:'001',
          firstname: 'Tin',
          middlename: 'Gonzales',
          lastname: 'Jose',
          bday: '1997-02-14',
          position: 'Engineer'
        },
      ],
      
      user: {
        employeeId: '',
        firstname: '',
        middlename: '',
        lastname: '',
        bday: '',
        position: ''
      }
  };
  }
  handleChangeInfo = e => {
      const {name, value} = e.target;
      this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
        }
    }));
  }

  handleAddUser = e => {
      let user = this.state.user;
      let usersList = [...this.state.usersList];
      usersList.push(user);
      this.setState({usersList : usersList});
      e.preventDefault();
    }

  deleteUser = rowIndex => {
      let usersList = [...this.state.usersList];
      usersList.splice(rowIndex, 1);
      this.setState({usersList: usersList});
    }

  render() {
      return (
      <div className="emp-sys-app">
      
      <Header/>
      <Sidebar/>
      
      <div className='forms-panel'>
          <Form  handleChangeInfo={this.handleChangeInfo} handleAddUser={this.handleAddUser}/>
      </div>

      <div className='table-panel'>
          <Table usersList={this.state.usersList} deleteUser={this.deleteUser} />
      </div>

      </div>
    );
  }
}

export default App;