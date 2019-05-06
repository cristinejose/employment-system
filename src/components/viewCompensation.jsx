import React, { Component } from 'react';
import { CompensationTable } from './compensationTable.jsx';
import axios from 'axios';

class ViewCompensation extends Component {
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

    //GET METHOD
    getCompensations() {
        axios.get('http://localhost:8080/restsample01/rest/compensations/')
            .then(res => {
                const compensationList = res.data;
                this.setState({ compensationList: compensationList });
            })

    }


    componentDidMount() {
        this.getCompensations();
    }



    //DELETE METHOD
    deleteCompensation = (rowIndex) => {
        let compensationList = [...this.state.compensationList];
        compensationList.splice(rowIndex, 1);
        this.setState({ compensationList: compensationList });

        axios.delete(`http://localhost:8080/restsample01/rest/compensations/${rowIndex}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    //RENDER METHOD
    render() {
        console.log(this.state.compensationList);
        return (

            <div>
                <CompensationTable compensationList={this.state.compensationList} deleteCompensation={this.deleteCompensation} editCompensation={this.editCompensation} />
            </div>


        );
    }
}
export default ViewCompensation;