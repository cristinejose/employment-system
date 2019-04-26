import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import { Form } from './components/form.jsx';
import { Table } from './components/table.jsx';
import Sidebar from './components/sidebar.jsx';
import axios from 'axios';
import {Search} from './components/search.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      userList2: [],

      user:
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

  // GET METHOD
  getUsers() {
    axios.get('http://localhost:8080/restsample01/rest/users/')
      .then(res => {
        const userList2 = res.data;
        this.setState({ userList2: userList2 });
      })

  }

  componentDidMount() {
    this.getUsers();
  }

  // HANDLE CHANGE

  handleChangeInfo = e => {
    let { name, value } = e.target;
    if (name === "id") {
      value = parseInt(value);
    }
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  // POST METHOD
  handleAddUser = e => {
    let user = this.state.user;
    let userList2 = [...this.state.userList2];
    userList2.push(user);
    this.setState({ userList2: userList2 });
    e.preventDefault();
    console.log("post");
    console.log(user);
    let str = "hello";
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post('http://localhost:8080/restsample01/rest/users/', user, { headers: headers })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }


  // PUT METHOD
  // handleEditUser = e => {
  //   let user = this.state.user;
  //   let userList2 = [...this.state.userList2];
  //   userList2.edit(user);
  //   this.setState({ userList2: userList2 });
  //   e.preventDefault();
  //   console.log("post");
  //   console.log(user);
  //   let str = "hello";
  //   let headers = {
  //     'Content-Type': 'application/json',
  //  }

  //   axios.put('http://localhost:8080/restsample01/rest/users/', user ,{headers:headers})
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // }


  // DELETE METHOD
  deleteUser = rowIndex => {
      let user = this.state.user;
    let userList2 = [...this.state.userList2];
    userList2.splice(rowIndex, 1);
    this.setState({ userList2: userList2 }); 
    let headers = {
      'Content-Type': 'application/json',
    }
  
      axios.delete('http://localhost:8080/restsample01/rest/users/', this.state.id, { headers: headers } )
      .then(res => {
      console.log(res);
        console.log(res.data);
      })
    }

  //RENDER METHOD
  render() {
    console.log(this.state.userList2);
    return (
      <div className="emp-sys-app">

        <Header />
        <Sidebar />

        <div>
          <Form handleChangeInfo={this.handleChangeInfo} handleAddUser={this.handleAddUser} />
        </div>

        {/* <div>
          <Search/>
        </div> */}
        
        <div>
          <Table userList2={this.state.userList2} deleteUser={this.deleteUser} editUser={this.editUser} />
        </div>

      </div>
    );
  }
}
export default App;