import React, { Component } from 'react';
import { CompensationForm } from './compensationForm.jsx';
import axios from 'axios';

class AddCompensation extends Component {
  constructor(props) {
    super(props);

    this.state = {

      compensationList: [],

      compensation:
      {
        id_comp: '',
        month: '',
        salary: '',
        bonus: '',
        commission: '',
      }
    };
  }


  // HANDLE CHANGE

  handleChangeInfo = e => {
    let { name, value } = e.target;
    if (name === "id_comp") {
      value = parseInt(value);
    }
    this.setState((prevState) => ({
      compensation: {
        ...prevState.compensation,
        [name]: value
      }
    }));
  }


  // POST METHOD
  handleAddCompensation = e => {
    let compensation = this.state.compensation;
    let compensationList = [...this.state.compensationList];
    compensationList.push(compensation);
    this.setState({ compensationList: compensationList });
    e.preventDefault();
    console.log("post");
    console.log(compensation);
    let str = "hello";
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/restsample01/rest/compensations/`, compensation, { headers: headers })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }


  //RENDER METHOD
  render() {
    console.log(this.state.compensationList);
    return (
      <div>

        <div>
          <CompensationForm handleChangeInfo={this.handleChangeInfo} handleAddCompensation={this.handleAddCompensation} />
        </div>

      </div>
    );
  }
}
export default AddCompensation;