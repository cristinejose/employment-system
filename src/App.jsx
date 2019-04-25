import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import { Form } from './components/form.jsx';
import { Table } from './components/table.jsx';
import Sidebar from './components/sidebar.jsx';
import axios from 'axios';

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

  // postUsers() {
  //   axios.post( 'http://localhost:8080/restsample01/rest/users/', id)
  //    .then(res => {
  //      console.log(res);
  //      console.log(res.data);
  //    })
  // }

  // // componentWillMount() {
  //   this.postUsers();
  // }



  handleChangeInfo = e => {
    let { name, value } = e.target;
    if(name === "id"){
      value = parseInt(value);
    }
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

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
    // axios.post('http://localhost:8080/restsample01/rest/users/try', str,{headers:headers} )
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });

    axios.post('http://localhost:8080/restsample01/rest/users/', user ,{headers:headers})
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }


  deleteUser = rowIndex => {
    let userList2 = [...this.state.userList2];
    userList2.splice(rowIndex, 1);
    this.setState({ userList2: userList2 });
  }


  render() {
    console.log(this.state.userList2);
    return (
      <div className="emp-sys-app">

        <Header />
        <Sidebar />

        <div>
          <Form handleChangeInfo={this.handleChangeInfo} handleAddUser={this.handleAddUser} />
        </div>

        <div>
          <Table userList2={this.state.userList2} deleteUser={this.deleteUser} />
        </div>

      </div>
    );
  }
}
export default App;